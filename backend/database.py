# # from fastapi import FastAPI, Request
# # from pydantic import BaseModel
# from pymongo import MongoClient
# from datetime import datetime
# import main
# import os

# # Replace with your own MongoDB URI
# MONGO_URI = "mongodb://localhost:27017/"  # or MongoDB Atlas URI

# # Connect to MongoDB
   
# client = MongoClient('mongodb+srv://k1:<db_password>@cluster0.yhvnzmm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
# db = client["cluster0"]
# collection = db["reviews"]

# # app = FastAPI()

# # class ReviewInput(BaseModel):
# #     review: main.review_text 
# #     prediction: main.fake_ma  # "fake" or "real"

# # @app.post("/submit_review")
# # async def submit_review(data: ReviewInput):
# #     collection.insert_one({
# #         "review": data.review,
# #         "prediction": data.prediction,
# #         "timestamp": datetime.utcnow()
# #     })
# #     return {"status": "saved"}

# # @app.get("/count_fake_reviews")
# # async def count_fake_reviews():
# #     fake_count = collection.count_documents({"prediction": "fake"})
# #     return {"total_fake_reviews": fake_count}


