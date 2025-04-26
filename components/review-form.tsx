"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Sparkles } from "lucide-react"

interface ReviewFormProps {
  onAnalyze: (text: string) => Promise<void>
  onSubmit: (text: string) => Promise<void>;
  isAnalyzing: boolean

 }
  
export default function ReviewForm({ onAnalyze, isAnalyzing }: ReviewFormProps) {
  const [review, setReview] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (review.trim()) {
      try {
        await onAnalyze(review)
      } catch (error) {
        console.error("Error analyzing review:", error)
      }
    }
  }

  // const handleExampleClick = (exampleText: string) => {
  //   setReview(exampleText)
  // }

  // const exampleReviews = [
  //   "This product is absolutely amazing! Best purchase I've ever made! Changed my life completely! BUY IT NOW!!!",
  //   "I've been using this laptop for about 3 weeks. The battery lasts around 6 hours with normal use, and the keyboard is comfortable. The screen could be brighter outdoors, but overall it's good value for the price.",
  //   "नाइस प्रोडक्ट, मुझे बहुत पसंद आया। Quality अच्छी है और price भी reasonable है। Would recommend to everyone!",
  // ]

  return (
    <Card className="bg-gray-900 bg-opacity-70 border border-gray-700 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-gray-900/90 to-gray-900/80 border-b border-gray-700">
        <CardTitle className="text-2xl flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
          Enter a Review
        </CardTitle>
        <CardDescription className="text-gray-400">Paste a review to analyze its authenticity</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6">
          <Textarea
            id="review-textarea"
            placeholder="Enter the review text here..."
            className="min-h-[200px] bg-gray-900/80 bg-opacity-80 border-gray-700 text-white resize-none rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            disabled={isAnalyzing}
          />
{/* 
          <div className="mt-6">
            <p className="text-sm text-gray-300 mb-3 flex items-center">
              <span className="inline-block w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></span>
              Or try one of these examples:
            </p>
            <div className="space-y-3">
              {exampleReviews.map((exampleText, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="outline"
                  // onClick={() => handleExampleClick(exampleText)}
                  className="w-full justify-start text-left h-auto py-3 px-4 text-sm bg-gray-900/70 bg-opacity-70 border-gray-700 hover:bg-gray-800 hover:border-purple-500/50 transition-all duration-200"
                  disabled={isAnalyzing}
                >
                  {exampleText.length > 70 ? `${exampleText.substring(0, 70)}...` : exampleText}
                </Button>
              ))}
            </div>
          </div> */}
        </CardContent>
        <CardFooter className="bg-gray-900/50 border-t border-gray-800 pt-4 pb-4">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-semibold text-white"
            disabled={!review.trim() || isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Analyze Review
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}