from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request
from pydantic import BaseModel
from typing import Optional
import os
from dotenv import load_dotenv
from openai import OpenAI
import re
import sys
import csv 
import pandas as pd
# from database import reviews_collection
# from datetime import datetime

# sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()


# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
client = OpenAI(
    base_url=os.getenv("OPENAI_BASE_URL"),#, "https://models.inference.ai.azure.com"),
    api_key=os.getenv("OPENAI_API_KEY")#, "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")#, "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"
)
class ReviewRequest(BaseModel):
    review_text: str

class ReviewResponse(BaseModel):
    fakePercentage: int
    realPercentage: int
    summary: str
    raw_result: Optional[str] = None


def data_extract(review_text,response):
     # Storing reviews into a CSV file

    fake_percentage, real_percentage = 0, 0

    # Extract percentages using regex
    fake_match = re.search(r"Fake Percentage:\s*(\d+)%", response)
    real_match = re.search(r"Real Percentage:\s*(\d+)%", response)

    if fake_match:
        fake_percentage = int(fake_match.group(1))
    if real_match:
        real_percentage = int(real_match.group(1))

    df = pd.read_csv("review.csv")
    val = 0
    name_to_check = review_text.strip()
    if name_to_check not in df["Review"].values:
        print(f"{name_to_check} found")
        
        val =  lambda fake_percentage , real_percentage : "fake" if fake_percentage > real_percentage else "real"
        
        # New data to add (e.g., adding a new person)
        new_data = {"Review": review_text.strip(), "Fake%": fake_percentage, "Real%": real_percentage , "Pred_Result" :val(fake_percentage , real_percentage)}
        # Append the new row to the DataFrame
        # df = df.append(new_data, ignore_index=True)
        new_row_df = pd.DataFrame([new_data])
        df = pd.concat([df, new_row_df], ignore_index=True)

        # Write the updated DataFrame back to the CSV file
        
        df.to_csv("review.csv", index=False)

        print("New row added successfully!")
    
    else : 
        print("review already present")


def api_out(prompt):
    try:
        response = client.chat.completions.create(
            model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        raise HTTPException(status_code=500, detail=f"Error calling AI service: {str(e)}")

def detect_fake_review(review_text):
    prompt = f"""
        Analyze the following customer review and determine whether it is potentially fake or real based on common patterns in online marketplace reviews from India.
        Consider that the grammar may be broken, or the review may use Hinglish (a mix of Hindi and English) or other local languages typically used in Indian reviews.

        Please evaluate the review by considering the following factors:

        Use of unnatural or overly generic language.
        Sentiment that seems overly positive or negative without specific details.
        Repeated phrases or patterns commonly found in fake reviews.
        Inconsistencies in product-specific details.
        Whether the review matches the behavior or style of genuine customer feedback.

        Review:
        "{review_text}"

        Instructions:

        Assess the likelihood of the review being fake or real, based on the factors listed above.

        if you think the given input is not a review but just a random text or the user just gave a question or something similier , then return the answer accordingly and give the fake and real both percentage zero!. 

        also strictly return accuracy percentage or confidence percentage inside summary in given format :accuracy: ZZ%

        Provide your answer strictly in the following format:

        Fake Percentage: XX%
        Real Percentage: YY%
        accuracy: ZZ%

        Conclude with a one-line summary on whether the review seems fake or real, mentioning the key reason behind the analysis.

        Ensure that your response is concise and in the requested format without any extra commentary or explanation.

       
    """
    # Get the response from the OpenAI API
    response = api_out(prompt)

    # Log the response to help debug
    print("OpenAI Response:", response)
    print("OpenAI API Key:", os.getenv("OPENAI_API_KEY"))

    data_extract(review_text,response)
    accuracy_match = re.search(r"accuracy:\s*(\d+)%", response)
    print(accuracy_match)
    


    return response




def parse_result(result):
    fake_percentage, real_percentage = 0, 0
    summary = ""
    
    # Extract percentages using regex
    fake_match = re.search(r"Fake Percentage:\s*(\d+)%", result)
    real_match = re.search(r"Real Percentage:\s*(\d+)%", result)
    
    if fake_match:
        fake_percentage = int(fake_match.group(1))
    if real_match:
        real_percentage = int(real_match.group(1))
    
    # Extract summary (last line that's not empty and not containing percentages)
    lines = [line.strip() for line in result.split('\n') if line.strip()]
    for line in lines:
        if "Percentage:" not in line:
            summary = line
    
    return fake_percentage, real_percentage, summary

@app.get("/")
def read_root():
    return {"message": "Fake Review Detector API is running"}

@app.post("/api/analyze", response_model=ReviewResponse)
async def analyze_review(request: ReviewRequest):
    if not request.review_text:
        raise HTTPException(status_code=400, detail="Review text is required")
    
    result = detect_fake_review(request.review_text)
    fake_percentage, real_percentage, summary = parse_result(result)

    # # Save to MongoDB
    # prediction_label = "fake" if fake_percentage > real_percentage else "real"
    # reviews_collection.insert_one({
    #     "review": request.review_text,
    #     "prediction": prediction_label,
    #     "timestamp": datetime.utcnow()
    # })
    
    return {
        "fakePercentage": fake_percentage,
        "realPercentage": real_percentage,
        "summary": summary,
        "raw_result": result
    }




@app.get("/components/analytics")
async def get_fake_review_count():
    df = pd.read_csv('review.csv')

    number = len(df["Review"])
    fake_num = len(df[df['Pred_Result'] == 'fake'])
    
    return {"total_reviews": number,"total_fake_reviews" : fake_num}


class Feedback(BaseModel):
    feedback: str
    textFeedback: Optional[str] = None  # optional textarea input

# @app.post("/api/feedback")
# async def receive_feedback(feedback: Feedback):
#     print("📩 Feedback received:", feedback.dict())

#     # Here you could:
#     # - Save to a database
#     # - Send to Slack/email
#     # - Log into a file
#     # - Run analytics, etc.

#     return {"message": "Feedback received successfully"}


@app.post("/api/feedback")
async def receive_feedback(feedback: Feedback, request: Request):
    try:
        print("Feedback received:", feedback.dict())

        df = pd.read_csv("review.csv")

        # Match the latest review (assuming feedback corresponds to latest input)
        # You could also match on full review text if you pass it from frontend
        latest_index = df.index[-1]  # Get the last row

        # Update the feedback column
        df.at[latest_index, "User_Feedback"] = feedback.feedback

        # Optionally store textFeedback too
        if feedback.textFeedback:
            df.at[latest_index, "Text_Feedback"] = feedback.textFeedback
        else:
            df.at[latest_index, "Text_Feedback"] = ""

        df.to_csv("review.csv", index=False)

        return {"message": "Feedback received successfully"}
    except Exception as e:
        print(" Error in /api/feedback:", e)
        raise HTTPException(status_code=500, detail="Internal Server Error")
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

    # mongodb+srv://k1:<db_password>@cluster0.yhvnzmm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//