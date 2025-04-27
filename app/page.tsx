"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import ReviewForm from "@/components/review-form"
import ResultsDisplay from "@/components/results-display"
import AnimatedBackground from "@/components/animated-background"
import { Analytics } from "@/components/analytics"
import Footer from "@/components/footer"


// const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
// const API_URL = isLocalhost ? 'http://localhost:8000' : '';
const API_URL = "https://backenrr-production.up.railway.app"

// fetch(`${baseUrl}/api/analyze`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ prompt }),
// });

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export default function Home() {
  const [reviewText, setReviewText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<{
    fakePercentage: number
    realPercentage: number
    summary: string
  } | null>(null)

  const handleAnalyze = async (text: string) => {
    setReviewText(text)
    setIsAnalyzing(true)
    setError(null)
    setResults(null)
  
    try {
      console.log('Sending request to:', `${API_URL}/api/analyze`)
      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ review_text: text }),
      })
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || 'Analysis failed')
      }
  
      const data = await response.json()
      console.log('Received data:', data)
      setResults({
        fakePercentage: data.fakePercentage,
        realPercentage: data.realPercentage,
        summary: data.summary,
      })
    } catch (error) {
      console.error('Error analyzing review:', error)
      setError(error instanceof Error ? error.message : 'Failed to analyze review. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground
          isAnalyzing={isAnalyzing}
          fakePercentage={results?.fakePercentage || 0}
          showResults={!!results}
        />
        </div>
      
      {/* <div className="p-6">
      <h1 className="text-xl font-bold text-center mb-4">Review Summary</h1>
      <ReviewPieChart />
      </div>
     */}
     
    

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-12"
        >
          <header className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              {/* <div className="flex flex-col items-center justify-center mb-4">
                  <img
                    src="/image_4.png"
                    alt="Review Guard Logo"
                    className="w-25 h-20 mb-3 drop-shadow-lg rounded-xl"
                  />
                  <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-center">
                    REVIEW GAURD
                  </h1>
                </div> */}
                <div className="flex items-center justify-center mb-4 space-x-4">
                    <img
                      src="/image_3.png"
                      alt="Review Guard Logo"
                      className="w-14 h-14 drop-shadow-lg rounded-xl"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                      REVIEW RADAR
                    </h1>
                  </div>


            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Advanced AI-Powered Analysis To Detect Fake Reviews 
            </motion.p>
          </header>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ReviewForm onSubmit={handleAnalyze} onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative z-30 results-section" // Added class for scrolling
            >
              <ResultsDisplay results={results} isAnalyzing={isAnalyzing} reviewText={reviewText} error={error} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16"
          >
            <Analytics />
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    </main>
  )
}
