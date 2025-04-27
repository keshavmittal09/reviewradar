
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, AlertTriangle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ResultsDisplayProps {
  results: {
    fakePercentage: number
    realPercentage: number
    summary: string
  } | null
  isAnalyzing: boolean
  reviewText: string
}
// const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
// const API_URL = isLocalhost ? 'http://localhost:8000' : '';
const API_URL = "https://backenrr-production.up.railway.app"


export default function ResultsDisplay({ 
  results, 
  isAnalyzing, 
  reviewText,
  error 
}: { 
  results: any
  isAnalyzing: boolean
  reviewText: string
  error: string | null
}) {
  const fakeWidth = results ? `${results.fakePercentage}%` : "0%";
  const realWidth = results ? `${results.realPercentage}%` : "0%";
  const summaryRef = useRef<HTMLDivElement | null>(null);
  // if (error) {
  //   return (
  //     <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
  //       <p className="text-red-500">{error}</p>
  //     </div>
  //   )
  // }

  // // ...existing code...


  //     // Scroll to summary if on mobile
  // //     if (window.innerWidth < 1024 && summaryRef.current) {
  // //       summaryRef.current.scrollIntoView({ behavior: "smooth" })
  // //     }
  // //   } else {
  // //     setFakeWidth("0%")
  // //     setRealWidth("0%")
  // //   }
  // // }, [results])
  const [feedback, setFeedback] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [textFeedback, setTextFeedback] = useState("");

  const clearAll = () => {
    setFeedback("");
    setTextFeedback("");
    setFeedbackSubmitted(false);
    // Ideally results and reviewText should also be reset by the parent component via props
    window.location.reload(); // Quick hack: refreshes the page to reset everything
  };
  
 
   // Reset the feedback form when new results are available
  useEffect(() => {
    if (results) {
      setFeedbackSubmitted(false);
      setFeedback("");
      setTextFeedback("");
    }
  }, [results]);


  const handleFeedbackSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback, textFeedback }),
        
      });

      if (response.ok) {  
        setFeedbackSubmitted(true);
        setFeedback("");
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (error) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <Card className="bg-gray-900 bg-opacity-70 border border-gray-700 shadow-lg min-h-[425px]">

      <CardHeader>
        <CardTitle className="text-2xl">Analysis Results</CardTitle>
        <CardDescription className="text-gray-400">AI-powered review authenticity analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {isAnalyzing ? (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className="relative">
                <Loader2 className="h-16 w-16 animate-spin text-purple-500 mb-4" />
                <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 border-t-transparent animate-spin-slow"></div>
              </div>
              <p className="text-gray-300 text-lg mt-4">Analyzing review...</p>
              <p className="text-gray-400 text-sm mt-2">Examining patterns and linguistic markers</p>

              <div className="mt-6 w-full max-w-md">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 animate-progress"></div>
                </div>
              </div>
            </motion.div>
          ) : results ? (
            <div ref={summaryRef}>
              {/* Fake Probability Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">
                      <AlertTriangle size={18} />
                    </span>
                    <span className="text-gray-300">Fake Probability</span>
                  </div>
                  <span className="text-xl font-bold text-red-400">{results.fakePercentage}%</span>
                </div>
                <div className="h-6 bg-gray-700 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-1000 ease-out absolute top-0 left-0 progress-bar-fill"
                    style={{
                      width: fakeWidth,
                      transitionProperty: "width",
                      transitionDuration: "1s",
                    }}
                  ></div>
                </div>
              </div>

              {/* Real Probability Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">
                      <CheckCircle size={18} />
                    </span>
                    <span className="text-gray-300">Real Probability</span>
                  </div>
                  <span className="text-xl font-bold text-green-400">{results.realPercentage}%</span>
                </div>
                <div className="h-6 bg-gray-700 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-green-600 to-green-400 absolute top-0 left-0 progress-bar-fill"
                    style={{ width: realWidth }}
                  ></div>
                </div>
              </div>  

              {/* Verdict */}
              <div className="mt-8 p-6 bg-gray-900/90 rounded-lg border border-gray-700 shadow-lg">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <span className="mr-2">
                    {results.fakePercentage > results.realPercentage ? (
                      <span className="text-red-400 font-bold">🔍 Verdict: Likely Fake</span>
                    ) : (
                      <span className="text-green-400 font-bold">🔍 Verdict: Likely Real 👌</span>
                    )}
                  </span>
                  <Badge
                    className={
                      results.fakePercentage > results.realPercentage
                        ? "bg-red-900/70 text-red-200 hover:bg-red-900 text-sm px-3 py-1"
                        : "bg-green-900/70 text-green-200 hover:bg-green-900 text-sm px-3 py-1"
                    }
                  >
                    {results.fakePercentage > results.realPercentage ? "FAKE" : "REAL"}
                  </Badge>
                </h3>
                <p className="text-gray-200 text-lg">{results.summary}</p>
              </div>
              
              {/* Feedback Form */}
<div className="mt-6 p-5 bg-gray-900/80 rounded-lg border border-gray-700 shadow-md">
  <h4 className="text-lg font-medium text-gray-300 mb-4">We value your feedback!</h4>
  {feedbackSubmitted ? (
    <p className="text-green-400">Thank you for your feedback!</p>
  ) : (
    <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="feedback"
            value="This is Genuine"
            onChange={(e) => setFeedback(e.target.value)}
            className="form-radio text-purple-600 focus:ring-purple-500"
            required
          />
          <span className="text-gray-300">This is Genuine</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="feedback"
            value="This is Fake"
            onChange={(e) => setFeedback(e.target.value)}
            className="form-radio text-purple-600 focus:ring-purple-500"
          />
          <span className="text-gray-300">This is Fake</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="feedback"
            value="I'm Not Sure"
            onChange={(e) => setFeedback(e.target.value)}
            className="form-radio text-purple-600 focus:ring-purple-500"
          />
          <span className="text-gray-300">I'm Not Sure</span>
        </label>
      </div>
      <textarea
                      value={textFeedback}
                      onChange={(e) => setTextFeedback(e.target.value)}
                      placeholder="Share your thoughts about the analysis..."
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      rows={3}
                      // required
                    ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
      >
        Submit Feedback
      </button>
    </form>
  )}
</div>

<button
  onClick={clearAll}
  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
>
  Clear All
</button>


              {/* Analyzed Review */}
              <div className="mt-6 p-5 bg-gray-900/80 rounded-lg border border-gray-700 shadow-md">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Analyzed Review:</h4>
                <p className="text-gray-300 text-sm italic bg-gray-800/70 p-3 rounded-md">{reviewText}</p>
              </div>
            </div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="text-6xl mb-4 animate-float">🔍</div>
              <h3 className="text-xl text-gray-300 mb-2">No Review Analyzed Yet</h3>
              <p className="text-gray-400">Enter a review and click "Analyze Review" to see results</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
