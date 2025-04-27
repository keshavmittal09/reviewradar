// "use client"
//
// import type React from "react"
//
// import { useState } from "react"
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { X } from "lucide-react"
//
// export default function Footer() {
//   const [openModal, setOpenModal] = useState(false)
//   const [modalContent, setModalContent] = useState<{
//     title: string
//     content: React.ReactNode
//   } | null>(null)
//
//   const handleLinkClick = (title: string, content: React.ReactNode) => {
//     setModalContent({ title, content })
//     setOpenModal(true)
//   }
//
//   const footerLinks = [
//     {
//       title: "Documentation",
//       content: (
//         <div className="space-y-4">
//           <h3 className="text-lg font-medium text-purple-400">Getting Started</h3>
//           <p>
//             Our fake review detection API provides powerful tools to identify potentially fraudulent reviews across your
//             platform.
//           </p>
//
//           <h3 className="text-lg font-medium text-purple-400">Installation</h3>
//           <div className="bg-gray-900 p-3 rounded-md font-mono text-sm">npm install @fake-review-detector/client</div>
//
//           <h3 className="text-lg font-medium text-purple-400">Basic Usage</h3>
//           <div className="bg-gray-900 p-3 rounded-md font-mono text-sm">
//             import {"{ analyzeReview }"} from '@fake-review-detector/client';
//             <br />
//             <br />
//             const result = await analyzeReview(reviewText);
//             <br />
//             console.log(result.fakePercentage);
//           </div>
//
//           <h3 className="text-lg font-medium text-purple-400">Advanced Configuration</h3>
//           <p>You can customize the detection sensitivity and output format:</p>
//           <div className="bg-gray-900 p-3 rounded-md font-mono text-sm">
//             const result = await analyzeReview(reviewText, {"{"}
//             <br />
//             &nbsp;&nbsp;sensitivity: 'high',
//             <br />
//             &nbsp;&nbsp;includeExplanation: true,
//             <br />
//             &nbsp;&nbsp;language: 'en'
//             <br />
//             {"}"});
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "API Reference",
//       content: (
//         <div className="space-y-4">
//           <h3 className="text-lg font-medium text-purple-400">Endpoints</h3>
//
//           <div className="border border-gray-700 rounded-md overflow-hidden">
//             <div className="bg-gray-800 p-3 border-b border-gray-700">
//               <span className="bg-green-700 text-green-100 px-2 py-1 rounded text-xs mr-2">POST</span>
//               <span className="font-mono">/api/analyze</span>
//             </div>
//             <div className="p-3 bg-gray-900">
//               <p className="mb-2">Analyze a review for authenticity</p>
//               <h4 className="text-sm font-medium text-gray-400 mt-3">Request Body</h4>
//               <div className="bg-gray-800 p-2 rounded-md font-mono text-sm mt-1">
//                 {"{"}
//                 <br />
//                 &nbsp;&nbsp;"text": "This product is amazing! Best purchase ever!",
//                 <br />
//                 &nbsp;&nbsp;"options": {"{"} "sensitivity": "medium" {"}"}
//                 <br />
//                 {"}"}
//               </div>
//
//               <h4 className="text-sm font-medium text-gray-400 mt-3">Response</h4>
//               <div className="bg-gray-800 p-2 rounded-md font-mono text-sm mt-1">
//                 {"{"}
//                 <br />
//                 &nbsp;&nbsp;"fakePercentage": 75,
//                 <br />
//                 &nbsp;&nbsp;"realPercentage": 25,
//                 <br />
//                 &nbsp;&nbsp;"summary": "This review shows signs of being fake..."
//                 <br />
//                 {"}"}
//               </div>
//             </div>
//           </div>
//
//           <div className="border border-gray-700 rounded-md overflow-hidden mt-4">
//             <div className="bg-gray-800 p-3 border-b border-gray-700">
//               <span className="bg-blue-700 text-blue-100 px-2 py-1 rounded text-xs mr-2">GET</span>
//               <span className="font-mono">/api/stats</span>
//             </div>
//             <div className="p-3 bg-gray-900">
//               <p className="mb-2">Get statistics about analyzed reviews</p>
//               <h4 className="text-sm font-medium text-gray-400 mt-3">Response</h4>
//               <div className="bg-gray-800 p-2 rounded-md font-mono text-sm mt-1">
//                 {"{"}
//                 <br />
//                 &nbsp;&nbsp;"totalAnalyzed": 1250,
//                 <br />
//                 &nbsp;&nbsp;"fakeDetected": 327,
//                 <br />
//                 &nbsp;&nbsp;"averageConfidence": 87.3
//                 <br />
//                 {"}"}
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Research Papers",
//       content: (
//         <div className="space-y-4">
//           <div className="border border-gray-700 rounded-md p-4">
//             <h3 className="text-lg font-medium text-purple-400">Detecting Fake Reviews Using Linguistic Features</h3>
//             <p className="text-sm text-gray-400">Published in Journal of AI Research, 2023</p>
//             <p className="mt-2">
//               This paper presents a novel approach to detecting fake reviews using advanced linguistic analysis and
//               natural language processing techniques.
//             </p>
//             <div className="mt-3">
//               <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs mr-2">NLP</span>
//               <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs mr-2">
//                 Machine Learning
//               </span>
//               <span className="inline-block bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
//                 Sentiment Analysis
//               </span>
//             </div>
//             <a href="#" className="text-purple-400 hover:text-purple-300 text-sm mt-3 inline-block">
//               Download PDF
//             </a>
//           </div>
//
//           <div className="border border-gray-700 rounded-md p-4">
//             <h3 className="text-lg font-medium text-purple-400">
//               Comparative Analysis of Fake Review Detection Algorithms
//             </h3>
//             <p className="text-sm text-gray-400">Published in Conference on E-Commerce Security, 2022</p>
//             <p className="mt-2">
//               This study compares the effectiveness of various algorithms for detecting fake reviews across multiple
//               e-commerce platforms.
//             </p>
//             <div className="mt-3">
//               <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs mr-2">
//                 Algorithms
//               </span>
//               <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs mr-2">
//                 Benchmarking
//               </span>
//               <span className="inline-block bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">E-Commerce</span>
//             </div>
//             <a href="#" className="text-purple-400 hover:text-purple-300 text-sm mt-3 inline-block">
//               Download PDF
//             </a>
//           </div>
//
//           <div className="border border-gray-700 rounded-md p-4">
//             <h3 className="text-lg font-medium text-purple-400">
//               The Economics of Fake Reviews: Impact and Mitigation
//             </h3>
//             <p className="text-sm text-gray-400">Published in Journal of Digital Economy, 2023</p>
//             <p className="mt-2">
//               This research examines the economic impact of fake reviews on businesses and consumers, and proposes
//               strategies for mitigation.
//             </p>
//             <div className="mt-3">
//               <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs mr-2">
//                 Economics
//               </span>
//               <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs mr-2">
//                 Consumer Behavior
//               </span>
//               <span className="inline-block bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">Policy</span>
//             </div>
//             <a href="#" className="text-purple-400 hover:text-purple-300 text-sm mt-3 inline-block">
//               Download PDF
//             </a>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Case Studies",
//       content: (
//         <div className="space-y-6">
//           <div className="border border-gray-700 rounded-md overflow-hidden">
//             <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-4">
//               <h3 className="text-xl font-medium text-white">E-Commerce Giant Reduces Fake Reviews by 87%</h3>
//               <p className="text-gray-300 mt-1">Major online retailer implements our API to combat review fraud</p>
//             </div>
//             <div className="p-4">
//               <p className="mb-3">
//                 One of the world's largest e-commerce platforms was struggling with an influx of fake reviews that were
//                 damaging customer trust and affecting sales.
//               </p>
//
//               <h4 className="text-md font-medium text-purple-400 mt-4">Challenge</h4>
//               <p>
//                 The platform was receiving over 50,000 new reviews daily, making manual verification impossible. Their
//                 existing automated systems had a high false positive rate, causing legitimate reviews to be removed.
//               </p>
//
//               <h4 className="text-md font-medium text-purple-400 mt-4">Solution</h4>
//               <p>
//                 By implementing our Fake Review Detection API with custom training on their specific product categories,
//                 they were able to automatically flag suspicious reviews for human review.
//               </p>
//
//               <h4 className="text-md font-medium text-purple-400 mt-4">Results</h4>
//               <ul className="list-disc pl-5 space-y-1 mt-2">
//                 <li>87% reduction in fake reviews within 3 months</li>
//                 <li>23% increase in customer trust metrics</li>
//                 <li>15% increase in conversion rates on products with verified reviews</li>
//                 <li>98.5% accuracy in fake review detection</li>
//               </ul>
//
//               <a href="#" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
//                 Read Full Case Study
//               </a>
//             </div>
//           </div>
//
//           <div className="border border-gray-700 rounded-md overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-4">
//               <h3 className="text-xl font-medium text-white">Restaurant Review Platform Restores Credibility</h3>
//               <p className="text-gray-300 mt-1">How a popular review site tackled fake reviews from competitors</p>
//             </div>
//             <div className="p-4">
//               <p className="mb-3">
//                 A leading restaurant review platform was facing a crisis of credibility as restaurant owners were
//                 posting fake negative reviews about competitors.
//               </p>
//
//               <h4 className="text-md font-medium text-purple-400 mt-4">Challenge</h4>
//               <p>
//                 The platform needed to identify fake negative reviews without discouraging genuine critical feedback
//                 from customers.
//               </p>
//
//               <h4 className="text-md font-medium text-purple-400 mt-4">Solution</h4>
//               <p>
//                 Our API was integrated into their review submission process, providing real-time analysis of review
//                 authenticity with a focus on detecting competitor sabotage patterns.
//               </p>
//
//               <h4 className="text-md font-medium text-purple-400 mt-4">Results</h4>
//               <ul className="list-disc pl-5 space-y-1 mt-2">
//                 <li>92% of fake competitor reviews identified and removed</li>
//                 <li>35% increase in restaurant owner satisfaction</li>
//                 <li>18% growth in active users following publicity about improved review quality</li>
//               </ul>
//
//               <a href="#" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
//                 Read Full Case Study
//               </a>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Blog",
//       content: (
//         <div className="space-y-6">
//           <article className="border border-gray-700 rounded-md overflow-hidden">
//             <img src="/placeholder.svg?height=200&width=600" alt="Blog header" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-medium text-white">The Rising Tide of AI-Generated Fake Reviews</h3>
//               <p className="text-gray-400 text-sm mt-1">
//                 Published April 10, 2023 • By Dr. Sarah Chen, Chief Data Scientist
//               </p>
//
//               <p className="mt-3">
//                 The landscape of online reviews is changing rapidly with the advent of sophisticated AI text generation.
//                 This presents new challenges for detection systems...
//               </p>
//
//               <div className="flex items-center mt-4">
//                 <div className="flex space-x-2">
//                   <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
//                     AI Ethics
//                   </span>
//                   <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
//                     GPT Models
//                   </span>
//                 </div>
//                 <a href="#" className="text-purple-400 hover:text-purple-300 ml-auto">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </article>
//
//           <article className="border border-gray-700 rounded-md overflow-hidden">
//             <img src="/placeholder.svg?height=200&width=600" alt="Blog header" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-medium text-white">5 Ways to Protect Your Business from Review Fraud</h3>
//               <p className="text-gray-400 text-sm mt-1">
//                 Published March 22, 2023 • By Michael Torres, Head of Security
//               </p>
//
//               <p className="mt-3">
//                 Review fraud can significantly impact your business reputation and bottom line. Here are five practical
//                 strategies to protect your platform...
//               </p>
//
//               <div className="flex items-center mt-4">
//                 <div className="flex space-x-2">
//                   <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
//                     Security
//                   </span>
//                   <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
//                     Best Practices
//                   </span>
//                 </div>
//                 <a href="#" className="text-purple-400 hover:text-purple-300 ml-auto">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </article>
//
//           <article className="border border-gray-700 rounded-md overflow-hidden">
//             <img src="/placeholder.svg?height=200&width=600" alt="Blog header" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-medium text-white">
//                 The Psychology Behind Fake Reviews: Why People Write Them
//               </h3>
//               <p className="text-gray-400 text-sm mt-1">
//                 Published February 15, 2023 • By Dr. Lisa Wong, Behavioral Scientist
//               </p>
//
//               <p className="mt-3">
//                 Understanding the psychological motivations behind fake review creation can help in developing more
//                 effective detection strategies...
//               </p>
//
//               <div className="flex items-center mt-4">
//                 <div className="flex space-x-2">
//                   <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
//                     Psychology
//                   </span>
//                   <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">Research</span>
//                 </div>
//                 <a href="#" className="text-purple-400 hover:text-purple-300 ml-auto">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </article>
//         </div>
//       ),
//     },
//     {
//       title: "About Us",
//       content: (
//         <div className="space-y-6">
//           <div className="mb-6">
//             <h3 className="text-xl font-medium text-purple-400 mb-3">Our Mission</h3>
//             <p>
//               At Fake Review Detector, we're committed to creating a more trustworthy digital marketplace by providing
//               cutting-edge tools to identify and combat review fraud. We believe that authentic customer feedback is
//               essential for both businesses and consumers to make informed decisions.
//             </p>
//           </div>
//
//           <div className="mb-6">
//             <h3 className="text-xl font-medium text-purple-400 mb-3">Our Story</h3>
//             <p>
//               Founded in 2020 by a team of data scientists and e-commerce experts, Fake Review Detector was born out of
//               frustration with the growing problem of fake reviews across online platforms. What started as a research
//               project at Stanford University has grown into a comprehensive solution used by businesses worldwide.
//             </p>
//
//             <p className="mt-3">
//               Our team combines expertise in natural language processing, machine learning, and behavioral psychology to
//               create detection algorithms that continuously evolve to stay ahead of increasingly sophisticated fake
//               review techniques.
//             </p>
//           </div>
//
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//             <div className="bg-gray-800/50 p-4 rounded-lg text-center">
//               <div className="w-20 h-20 bg-purple-700/30 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <span className="text-3xl">🔍</span>
//               </div>
//               <h4 className="text-lg font-medium text-white mb-2">Accuracy</h4>
//               <p className="text-sm text-gray-300">
//                 Our algorithms achieve 97.8% accuracy in detecting fake reviews across multiple languages and
//                 industries.
//               </p>
//             </div>
//
//             <div className="bg-gray-800/50 p-4 rounded-lg text-center">
//               <div className="w-20 h-20 bg-purple-700/30 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <span className="text-3xl">🛡️</span>
//               </div>
//               <h4 className="text-lg font-medium text-white mb-2">Protection</h4>
//               <p className="text-sm text-gray-300">
//                 We protect over 500 e-commerce platforms and have analyzed more than 50 million reviews to date.
//               </p>
//             </div>
//
//             <div className="bg-gray-800/50 p-4 rounded-lg text-center">
//               <div className="w-20 h-20 bg-purple-700/30 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <span className="text-3xl">🔄</span>
//               </div>
//               <h4 className="text-lg font-medium text-white mb-2">Innovation</h4>
//               <p className="text-sm text-gray-300">
//                 Our team publishes cutting-edge research and continuously updates our models to combat evolving fake
//                 review tactics.
//               </p>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Careers",
//       content: (
//         <div className="space-y-6">
//           <div className="mb-6">
//             <h3 className="text-xl font-medium text-purple-400 mb-3">Join Our Team</h3>
//             <p>
//               We're looking for passionate individuals who are excited about using AI and machine learning to create a
//               more trustworthy digital world. At Fake Review Detector, you'll work with cutting-edge technology and
//               collaborate with experts in data science, engineering, and product development.
//             </p>
//           </div>
//
//           <div className="mb-8">
//             <h3 className="text-lg font-medium text-white mb-3">Why Work With Us</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-start">
//                 <div className="bg-purple-900/30 p-2 rounded-md mr-3">
//                   <span className="text-xl">💡</span>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-200">Impactful Work</h4>
//                   <p className="text-sm text-gray-400">
//                     Help build technology that protects millions of consumers and businesses from fraud.
//                   </p>
//                 </div>
//               </div>
//
//               <div className="flex items-start">
//                 <div className="bg-purple-900/30 p-2 rounded-md mr-3">
//                   <span className="text-xl">🚀</span>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-200">Growth Opportunities</h4>
//                   <p className="text-sm text-gray-400">
//                     Rapid company growth means plenty of opportunities for career advancement.
//                   </p>
//                 </div>
//               </div>
//
//               <div className="flex items-start">
//                 <div className="bg-purple-900/30 p-2 rounded-md mr-3">
//                   <span className="text-xl">🌐</span>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-200">Remote-First</h4>
//                   <p className="text-sm text-gray-400">Work from anywhere with our globally distributed team.</p>
//                 </div>
//               </div>
//
//               <div className="flex items-start">
//                 <div className="bg-purple-900/30 p-2 rounded-md mr-3">
//                   <span className="text-xl">🧠</span>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-200">Continuous Learning</h4>
//                   <p className="text-sm text-gray-400">
//                     Professional development budget and regular knowledge sharing sessions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-white mb-3">Open Positions</h3>
//
//             <div className="border border-gray-700 rounded-md overflow-hidden">
//               <div className="bg-gray-800 p-4">
//                 <h4 className="text-lg font-medium text-white">Senior Machine Learning Engineer</h4>
//                 <div className="flex items-center mt-1">
//                   <span className="text-gray-400 text-sm">Remote</span>
//                   <span className="mx-2 text-gray-500">•</span>
//                   <span className="text-gray-400 text-sm">Full-time</span>
//                 </div>
//               </div>
//               <div className="p-4 bg-gray-900">
//                 <p className="mb-3">
//                   We're looking for an experienced ML engineer to help develop and improve our fake review detection
//                   algorithms.
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Python</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">TensorFlow</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">NLP</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">
//                     5+ Years Experience
//                   </span>
//                 </div>
//                 <a href="#" className="text-purple-400 hover:text-purple-300">
//                   View Job Description
//                 </a>
//               </div>
//             </div>
//
//             <div className="border border-gray-700 rounded-md overflow-hidden">
//               <div className="bg-gray-800 p-4">
//                 <h4 className="text-lg font-medium text-white">Frontend Developer</h4>
//                 <div className="flex items-center mt-1">
//                   <span className="text-gray-400 text-sm">Remote</span>
//                   <span className="mx-2 text-gray-500">•</span>
//                   <span className="text-gray-400 text-sm">Full-time</span>
//                 </div>
//               </div>
//               <div className="p-4 bg-gray-900">
//                 <p className="mb-3">
//                   Join our frontend team to build intuitive interfaces for our review analysis dashboard and tools.
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">React</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">TypeScript</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Next.js</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">
//                     3+ Years Experience
//                   </span>
//                 </div>
//                 <a href="#" className="text-purple-400 hover:text-purple-300">
//                   View Job Description
//                 </a>
//               </div>
//             </div>
//
//             <div className="border border-gray-700 rounded-md overflow-hidden">
//               <div className="bg-gray-800 p-4">
//                 <h4 className="text-lg font-medium text-white">Data Scientist</h4>
//                 <div className="flex items-center mt-1">
//                   <span className="text-gray-400 text-sm">Remote</span>
//                   <span className="mx-2 text-gray-500">•</span>
//                   <span className="text-gray-400 text-sm">Full-time</span>
//                 </div>
//               </div>
//               <div className="p-4 bg-gray-900">
//                 <p className="mb-3">
//                   Help us analyze patterns in review data and develop new features to improve detection accuracy.
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Python</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Data Analysis</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">ML</span>
//                   <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">
//                     2+ Years Experience
//                   </span>
//                 </div>
//                 <a href="#" className="text-purple-400 hover:text-purple-300">
//                   View Job Description
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Privacy Policy",
//       content: (
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-xl font-medium text-purple-400 mb-3">Privacy Policy</h3>
//             <p className="text-sm text-gray-400">Last Updated: April 15, 2023</p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">1. Introduction</h4>
//             <p>
//               At Fake Review Detector, we take your privacy seriously. This Privacy Policy explains how we collect, use,
//               disclose, and safeguard your information when you use our fake review detection service.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">2. Information We Collect</h4>
//             <p className="mb-2">We collect the following types of information:</p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Review text submitted for analysis</li>
//               <li>IP addresses and device information</li>
//               <li>Usage data and analytics</li>
//               <li>Account information if you create an account</li>
//             </ul>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">3. How We Use Your Information</h4>
//             <p className="mb-2">We use the collected information for:</p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Providing and improving our fake review detection service</li>
//               <li>Training and refining our machine learning models</li>
//               <li>Analyzing usage patterns to improve user experience</li>
//               <li>Communicating with you about your account or our services</li>
//               <li>Preventing fraud and ensuring security</li>
//             </ul>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">4. Data Retention</h4>
//             <p>
//               We retain the review text submitted for analysis for 30 days, after which it is anonymized for research
//               purposes. Account information is retained as long as you maintain an active account with us.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">5. Data Sharing and Disclosure</h4>
//             <p className="mb-2">We may share your information with:</p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Service providers who help us deliver our services</li>
//               <li>Law enforcement when required by law</li>
//               <li>Business partners with your explicit consent</li>
//             </ul>
//             <p className="mt-2">We do not sell your personal information to third parties.</p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">6. Your Rights</h4>
//             <p className="mb-2">Depending on your location, you may have the following rights:</p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Access to your personal information</li>
//               <li>Correction of inaccurate information</li>
//               <li>Deletion of your personal information</li>
//               <li>Restriction of processing</li>
//               <li>Data portability</li>
//               <li>Objection to processing</li>
//             </ul>
//             <p className="mt-2">To exercise these rights, please contact us at privacy@fakereviewdetector.com.</p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">7. Security</h4>
//             <p>
//               We implement appropriate technical and organizational measures to protect your personal information.
//               However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot
//               guarantee absolute security.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">8. Changes to This Privacy Policy</h4>
//             <p>
//               We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
//               Privacy Policy on this page and updating the "Last Updated" date.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">9. Contact Us</h4>
//             <p>If you have any questions about this Privacy Policy, please contact us at:</p>
//             <p className="mt-2">privacy@fakereviewdetector.com</p>
//             <p>Fake Review Detector, Inc.</p>
//             <p>123 AI Boulevard</p>
//             <p>San Francisco, CA 94105</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Terms of Service",
//       content: (
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-xl font-medium text-purple-400 mb-3">Terms of Service</h3>
//             <p className="text-sm text-gray-400">Last Updated: April 15, 2023</p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">1. Acceptance of Terms</h4>
//             <p>
//               By accessing or using the Fake Review Detector service, you agree to be bound by these Terms of Service.
//               If you do not agree to these terms, please do not use our service.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">2. Description of Service</h4>
//             <p>
//               Fake Review Detector provides tools and APIs for detecting potentially fraudulent reviews using artificial
//               intelligence and machine learning technologies. Our service analyzes review text to determine the
//               likelihood that it is authentic or fake.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">3. User Accounts</h4>
//             <p className="mb-2">
//               To access certain features of our service, you may need to create an account. You are responsible for:
//             </p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Maintaining the confidentiality of your account credentials</li>
//               <li>All activities that occur under your account</li>
//               <li>Notifying us immediately of any unauthorized use of your account</li>
//             </ul>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">4. API Usage and Rate Limits</h4>
//             <p>
//               Our API is subject to rate limits based on your subscription plan. Exceeding these limits may result in
//               temporary suspension of API access. You agree not to attempt to circumvent these rate limits.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">5. Prohibited Uses</h4>
//             <p className="mb-2">You agree not to use our service to:</p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Generate fake reviews</li>
//               <li>Violate any applicable laws or regulations</li>
//               <li>Infringe on the intellectual property rights of others</li>
//               <li>Harass, abuse, or harm another person</li>
//               <li>Interfere with or disrupt the service</li>
//               <li>Attempt to gain unauthorized access to our systems</li>
//             </ul>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">6. Intellectual Property</h4>
//             <p>
//               All content, features, and functionality of our service, including but not limited to text, graphics,
//               logos, and software, are owned by Fake Review Detector and are protected by copyright, trademark, and
//               other intellectual property laws.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">7. Disclaimer of Warranties</h4>
//             <p>
//               Our service is provided "as is" and "as available" without any warranties of any kind, either express or
//               implied. We do not guarantee that our service will be uninterrupted, secure, or error-free, or that
//               results obtained from using our service will be accurate or reliable.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">8. Limitation of Liability</h4>
//             <p>
//               In no event shall Fake Review Detector be liable for any indirect, incidental, special, consequential, or
//               punitive damages, including but not limited to loss of profits, data, or use, arising out of or in
//               connection with our service.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">9. Termination</h4>
//             <p>
//               We may terminate or suspend your account and access to our service at our sole discretion, without notice,
//               for conduct that we believe violates these Terms of Service or is harmful to other users of our service,
//               us, or third parties, or for any other reason.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">10. Changes to Terms</h4>
//             <p>
//               We reserve the right to modify these Terms of Service at any time. We will provide notice of significant
//               changes by posting the new Terms of Service on our website and updating the "Last Updated" date.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">11. Governing Law</h4>
//             <p>
//               These Terms of Service shall be governed by and construed in accordance with the laws of the State of
//               California, without regard to its conflict of law provisions.
//             </p>
//           </div>
//
//           <div>
//             <h4 className="text-lg font-medium text-white mb-2">12. Contact Us</h4>
//             <p>If you have any questions about these Terms of Service, please contact us at:</p>
//             <p className="mt-2">legal@fakereviewdetector.com</p>
//             <p>Fake Review Detector, Inc.</p>
//             <p>123 AI Boulevard</p>
//             <p>San Francisco, CA 94105</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Contact",
//       content: (
//         <div className="space-y-6">
//           <div className="mb-6">
//             <h3 className="text-xl font-medium text-purple-400 mb-3">Contact Us</h3>
//             <p>
//               We'd love to hear from you! Whether you have questions about our service, need technical support, or want
//               to explore partnership opportunities, our team is here to help.
//             </p>
//           </div>
//
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div className="bg-gray-800/50 p-5 rounded-lg">
//               <h4 className="text-lg font-medium text-white mb-3">General Inquiries</h4>
//               <div className="space-y-2">
//                 <p className="flex items-center">
//                   <span className="text-purple-400 mr-2">📧</span>
//                   <span>info@fakereviewdetector.com</span>
//                 </p>
//                 <p className="flex items-center">
//                   <span className="text-purple-400 mr-2">📞</span>
//                   <span>+1 (555) 123-4567</span>
//                 </p>
//                 <p className="flex items-center">
//                   <span className="text-purple-400 mr-2">⏱️</span>
//                   <span>Monday-Friday, 9am-5pm PT</span>
//                 </p>
//               </div>
//             </div>
//
//             <div className="bg-gray-800/50 p-5 rounded-lg">
//               <h4 className="text-lg font-medium text-white mb-3">Technical Support</h4>
//               <div className="space-y-2">
//                 <p className="flex items-center">
//                   <span className="text-purple-400 mr-2">📧</span>
//                   <span>support@fakereviewdetector.com</span>
//                 </p>
//                 <p className="flex items-center">
//                   <span className="text-purple-400 mr-2">📞</span>
//                   <span>+1 (555) 987-6543</span>
//                 </p>
//                 <p className="flex items-center">
//                   <span className="text-purple-400 mr-2">⏱️</span>
//                   <span>24/7 Support</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//
//           <div className="bg-gray-900/80 p-6 rounded-lg border border-gray-700">
//             <h4 className="text-lg font-medium text-white mb-4">Send Us a Message</h4>
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
//                   <input
//                     type="email"
//                     className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>
//
//               <div>
//                 <label className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="What's this about?"
//                 />
//               </div>
//
//               <div>
//                 <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
//                 <textarea
//                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
//                   placeholder="Tell us how we can help..."
//                 ></textarea>
//               </div>
//
//               <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:-translate-y-1">
//                 Send Message
//               </button>
//             </div>
//           </div>
//
//           <div className="mt-8">
//             <h4 className="text-lg font-medium text-white mb-4">Our Location</h4>
//             <div className="bg-gray-800 rounded-lg overflow-hidden h-64">
//               {/* This would be a map in a real implementation */}
//               <div className="w-full h-full flex items-center justify-center bg-gray-900">
//                 <p className="text-gray-400">Interactive map would be displayed here</p>
//               </div>
//             </div>
//             <div className="mt-3">
//               <p className="text-gray-300">Fake Review Detector, Inc.</p>
//               <p className="text-gray-400">123 AI Boulevard</p>
//               <p className="text-gray-400">San Francisco, CA 94105</p>
//               <p className="text-gray-400">United States</p>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ]
//
//   return (
//     <>
//       <footer className="bg-gray-900/80 border-t border-gray-800 mt-16">
//         <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Fake Review Detector</h3>
//               <p className="text-gray-400 mb-4">
//                 Advanced AI-powered analysis to detect fake reviews with stunning visualization.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-purple-400">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400">
//                   <span className="sr-only">GitHub</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path
//                       fillRule="evenodd"
//                       d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400">
//                   <span className="sr-only">LinkedIn</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path
//                       fillRule="evenodd"
//                       d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Documentation", footerLinks[0].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Documentation
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("API Reference", footerLinks[1].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     API Reference
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Research Papers", footerLinks[2].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Research Papers
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Case Studies", footerLinks[3].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Case Studies
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Blog", footerLinks[4].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Blog
//                   </button>
//                 </li>
//               </ul>
//             </div>
//
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("About Us", footerLinks[5].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     About Us
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Careers", footerLinks[6].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Careers
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Privacy Policy", footerLinks[7].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Privacy Policy
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Terms of Service", footerLinks[8].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Terms of Service
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleLinkClick("Contact", footerLinks[9].content)}
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     Contact
//                   </button>
//                 </li>
//               </ul>
//             </div>
//
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
//               <p className="text-gray-400 mb-4">Stay updated with the latest in fake review detection technology.</p>
//               <form className="flex flex-col sm:flex-row gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
//                 />
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//
//           <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400">© 2023 Fake Review Detector. All rights reserved.</p>
//             <div className="mt-4 md:mt-0 flex space-x-6">
//               <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
//                 Privacy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
//                 Terms
//               </a>
//               <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
//                 Cookies
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//
//       <Dialog open={openModal} onOpenChange={setOpenModal}>
//         <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto bg-gray-900 text-gray-100 border border-gray-700">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-bold text-white flex items-center justify-between">
//               {modalContent?.title}
//               <button onClick={() => setOpenModal(false)} className="text-gray-400 hover:text-white transition-colors">
//                 <X size={20} />
//               </button>
//             </DialogTitle>
//             <DialogDescription className="text-gray-400">
//               Explore our {modalContent?.title.toLowerCase()} resources
//             </DialogDescription>
//           </DialogHeader>
//           <div className="mt-4">{modalContent?.content}</div>
//         </DialogContent>
//       </Dialog>
//     </>
//   )
// }


// update_1
// -----------------------------------------------------------------------------------------------------------
"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function Footer() {
  const [openModal, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState<{
    title: string
    content: React.ReactNode
  } | null>(null)

  const handleLinkClick = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content })
    setOpenModal(true)
  }

  const footerLinks = [
    {
      title: "Documentation",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-purple-400">Getting Started</h3>
          <p>
            Our fake review detection API provides powerful tools to identify potentially fraudulent reviews across your
            platform.
          </p>

          <h3 className="text-lg font-medium text-purple-400">Installation</h3>
          <div className="bg-gray-900 p-3 rounded-md font-mono text-sm">npm install @fake-review-detector/client</div>

          <h3 className="text-lg font-medium text-purple-400">Basic Usage</h3>
          <div className="bg-gray-900 p-3 rounded-md font-mono text-sm">
            import {"{ analyzeReview }"} from '@fake-review-detector/client';
            <br />
            <br />
            const result = await analyzeReview(reviewText);
            <br />
            console.log(result.fakePercentage);
          </div>

          <h3 className="text-lg font-medium text-purple-400">Advanced Configuration</h3>
          <p>You can customize the detection sensitivity and output format:</p>
          <div className="bg-gray-900 p-3 rounded-md font-mono text-sm">
            const result = await analyzeReview(reviewText, {"{"}
            <br />
            &nbsp;&nbsp;sensitivity: 'high',
            <br />
            &nbsp;&nbsp;includeExplanation: true,
            <br />
            &nbsp;&nbsp;language: 'en'
            <br />
            {"}"});
          </div>
        </div>
      ),
    },
    {
      title: "API Reference",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-purple-400">Endpoints</h3>

          <div className="border border-gray-700 rounded-md overflow-hidden">
            <div className="bg-gray-800 p-3 border-b border-gray-700">
              <span className="bg-green-700 text-green-100 px-2 py-1 rounded text-xs mr-2">POST</span>
              <span className="font-mono">/api/analyze</span>
            </div>
            <div className="p-3 bg-gray-900">
              <p className="mb-2">Analyze a review for authenticity</p>
              <h4 className="text-sm font-medium text-gray-400 mt-3">Request Body</h4>
              <div className="bg-gray-800 p-2 rounded-md font-mono text-sm mt-1">
                {"{"}
                <br />
                &nbsp;&nbsp;"text": "This product is amazing! Best purchase ever!",
                <br />
                &nbsp;&nbsp;"options": {"{"} "sensitivity": "medium" {"}"}
                <br />
                {"}"}
              </div>

              <h4 className="text-sm font-medium text-gray-400 mt-3">Response</h4>
              <div className="bg-gray-800 p-2 rounded-md font-mono text-sm mt-1">
                {"{"}
                <br />
                &nbsp;&nbsp;"fakePercentage": 75,
                <br />
                &nbsp;&nbsp;"realPercentage": 25,
                <br />
                &nbsp;&nbsp;"summary": "This review shows signs of being fake..."
                <br />
                {"}"}
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-md overflow-hidden mt-4">
            <div className="bg-gray-800 p-3 border-b border-gray-700">
              <span className="bg-blue-700 text-blue-100 px-2 py-1 rounded text-xs mr-2">GET</span>
              <span className="font-mono">/api/stats</span>
            </div>
            <div className="p-3 bg-gray-900">
              <p className="mb-2">Get statistics about analyzed reviews</p>
              <h4 className="text-sm font-medium text-gray-400 mt-3">Response</h4>
              <div className="bg-gray-800 p-2 rounded-md font-mono text-sm mt-1">
                {"{"}
                <br />
                &nbsp;&nbsp;"totalAnalyzed": 1250,
                <br />
                &nbsp;&nbsp;"fakeDetected": 327,
                <br />
                &nbsp;&nbsp;"averageConfidence": 87.3
                <br />
                {"}"}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Research Papers",
      content: (
        <div className="space-y-4">
          <div className="border border-gray-700 rounded-md p-4">
            <h3 className="text-lg font-medium text-purple-400">Detecting Fake Reviews Using Linguistic Features</h3>
            <p className="text-sm text-gray-400">Published in Journal of AI Research, 2023</p>
            <p className="mt-2">
              This paper presents a novel approach to detecting fake reviews using advanced linguistic analysis and
              natural language processing techniques.
            </p>
            <div className="mt-3">
              <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs mr-2">NLP</span>
              <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs mr-2">
                Machine Learning
              </span>
              <span className="inline-block bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">
                Sentiment Analysis
              </span>
            </div>
            <a href="#" className="text-purple-400 hover:text-purple-300 text-sm mt-3 inline-block">
              Download PDF
            </a>
          </div>

          <div className="border border-gray-700 rounded-md p-4">
            <h3 className="text-lg font-medium text-purple-400">
              Comparative Analysis of Fake Review Detection Algorithms
            </h3>
            <p className="text-sm text-gray-400">Published in Conference on E-Commerce Security, 2022</p>
            <p className="mt-2">
              This study compares the effectiveness of various algorithms for detecting fake reviews across multiple
              e-commerce platforms.
            </p>
            <div className="mt-3">
              <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs mr-2">
                Algorithms
              </span>
              <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs mr-2">
                Benchmarking
              </span>
              <span className="inline-block bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">E-Commerce</span>
            </div>
            <a href="#" className="text-purple-400 hover:text-purple-300 text-sm mt-3 inline-block">
              Download PDF
            </a>
          </div>

          <div className="border border-gray-700 rounded-md p-4">
            <h3 className="text-lg font-medium text-purple-400">
              The Economics of Fake Reviews: Impact and Mitigation
            </h3>
            <p className="text-sm text-gray-400">Published in Journal of Digital Economy, 2023</p>
            <p className="mt-2">
              This research examines the economic impact of fake reviews on businesses and consumers, and proposes
              strategies for mitigation.
            </p>
            <div className="mt-3">
              <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs mr-2">
                Economics
              </span>
              <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs mr-2">
                Consumer Behavior
              </span>
              <span className="inline-block bg-green-900/50 text-green-300 px-2 py-1 rounded text-xs">Policy</span>
            </div>
            <a href="#" className="text-purple-400 hover:text-purple-300 text-sm mt-3 inline-block">
              Download PDF
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Case Studies",
      content: (
        <div className="space-y-6">
          <div className="border border-gray-700 rounded-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-4">
              <h3 className="text-xl font-medium text-white">E-Commerce Giant Reduces Fake Reviews by 87%</h3>
              <p className="text-gray-300 mt-1">Major online retailer implements our API to combat review fraud</p>
            </div>
            <div className="p-4">
              <p className="mb-3">
                One of the world's largest e-commerce platforms was struggling with an influx of fake reviews that were
                damaging customer trust and affecting sales.
              </p>

              <h4 className="text-md font-medium text-purple-400 mt-4">Challenge</h4>
              <p>
                The platform was receiving over 50,000 new reviews daily, making manual verification impossible. Their
                existing automated systems had a high false positive rate, causing legitimate reviews to be removed.
              </p>

              <h4 className="text-md font-medium text-purple-400 mt-4">Solution</h4>
              <p>
                By implementing our Fake Review Detection API with custom training on their specific product categories,
                they were able to automatically flag suspicious reviews for human review.
              </p>

              <h4 className="text-md font-medium text-purple-400 mt-4">Results</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>87% reduction in fake reviews within 3 months</li>
                <li>23% increase in customer trust metrics</li>
                <li>15% increase in conversion rates on products with verified reviews</li>
                <li>98.5% accuracy in fake review detection</li>
              </ul>

              <a href="#" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
                Read Full Case Study
              </a>
            </div>
          </div>

          <div className="border border-gray-700 rounded-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-4">
              <h3 className="text-xl font-medium text-white">Restaurant Review Platform Restores Credibility</h3>
              <p className="text-gray-300 mt-1">How a popular review site tackled fake reviews from competitors</p>
            </div>
            <div className="p-4">
              <p className="mb-3">
                A leading restaurant review platform was facing a crisis of credibility as restaurant owners were
                posting fake negative reviews about competitors.
              </p>

              <h4 className="text-md font-medium text-purple-400 mt-4">Challenge</h4>
              <p>
                The platform needed to identify fake negative reviews without discouraging genuine critical feedback
                from customers.
              </p>

              <h4 className="text-md font-medium text-purple-400 mt-4">Solution</h4>
              <p>
                Our API was integrated into their review submission process, providing real-time analysis of review
                authenticity with a focus on detecting competitor sabotage patterns.
              </p>

              <h4 className="text-md font-medium text-purple-400 mt-4">Results</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>92% of fake competitor reviews identified and removed</li>
                <li>35% increase in restaurant owner satisfaction</li>
                <li>18% growth in active users following publicity about improved review quality</li>
              </ul>

              <a href="#" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
                Read Full Case Study
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Blog",
      content: (
        <div className="space-y-6">
            <article className="border border-gray-700 rounded-md overflow-hidden">
            <img src="/ChatGPT Image Apr 24, 2025, 02_12_57 AM.png" alt="AI-Generated Fake Reviews" className="w-full object-contain" />
            <div className="p-4">
              <h3 className="text-xl font-medium text-white">The Rising Tide of AI-Generated Fake Reviews</h3>
              <p className="text-gray-400 text-sm mt-1">
              Published April 10, 2023 • By Dr. Sarah Chen, Chief Data Scientist
              </p>

              <p className="mt-3">
                The landscape of online reviews is changing rapidly with the advent of sophisticated AI text generation.
                This presents new challenges for detection systems...
              </p>

              <div className="flex items-center mt-4">
                <div className="flex space-x-2">
                  <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
                    AI Ethics
                  </span>
                  <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
                    GPT Models
                  </span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 ml-auto">
                  Read More
                </a>
              </div>
            </div>
          </article>

          <article className="border border-gray-700 rounded-md overflow-hidden">
            <img src="/placeholder.svg?height=200&width=600" alt="Blog header" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-medium text-white">5 Ways to Protect Your Business from Review Fraud</h3>
              <p className="text-gray-400 text-sm mt-1">
                Published March 22, 2023 • By Michael Torres, Head of Security
              </p>

              <p className="mt-3">
                Review fraud can significantly impact your business reputation and bottom line. Here are five practical
                strategies to protect your platform...
              </p>

              <div className="flex items-center mt-4">
                <div className="flex space-x-2">
                  <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
                    Security
                  </span>
                  <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
                    Best Practices
                  </span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 ml-auto">
                  Read More
                </a>
              </div>
            </div>
          </article>

          <article className="border border-gray-700 rounded-md overflow-hidden">
            <img src="/placeholder.svg?height=200&width=600" alt="Blog header" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-medium text-white">
                The Psychology Behind Fake Reviews: Why People Write Them
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Published February 15, 2023 • By Dr. Lisa Wong, Behavioral Scientist
              </p>

              <p className="mt-3">
                Understanding the psychological motivations behind fake review creation can help in developing more
                effective detection strategies...
              </p>

              <div className="flex items-center mt-4">
                <div className="flex space-x-2">
                  <span className="inline-block bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">
                    Psychology
                  </span>
                  <span className="inline-block bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">Research</span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 ml-auto">
                  Read More
                </a>
              </div>
            </div>
          </article>
        </div>
      ),
    },
    {
      title: "About Us",
      content: (
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-purple-400 mb-3">Our Mission</h3>
            <p>
              At Fake Review Detector, we're committed to creating a more trustworthy digital marketplace by providing
              cutting-edge tools to identify and combat review fraud. We believe that authentic customer feedback is
              essential for both businesses and consumers to make informed decisions.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-purple-400 mb-3">Our Story</h3>
            <p>
              Founded in 2025, Review Radar was born out of
              frustration with the growing problem of fake reviews across online platforms. What started as a research
              project at Stanford University has grown into a comprehensive solution used by businesses worldwide.
            </p>

            <p className="mt-3">
              Our team combines expertise in natural language processing, machine learning, and behavioral psychology to
              create detection algorithms that continuously evolve to stay ahead of increasingly sophisticated fake
              review techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <div className="w-20 h-20 bg-purple-700/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🔍</span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Accuracy</h4>
              <p className="text-sm text-gray-300">
                Our algorithms achieve 97.8% accuracy in detecting fake reviews across multiple languages and
                industries.
              </p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <div className="w-20 h-20 bg-purple-700/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🛡</span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Protection</h4>
              <p className="text-sm text-gray-300">
                We protect over 500 e-commerce platforms and have analyzed more than 50 million reviews to date.
              </p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <div className="w-20 h-20 bg-purple-700/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🔄</span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Innovation</h4>
              <p className="text-sm text-gray-300">
                Our team publishes cutting-edge research and continuously updates our models to combat evolving fake
                review tactics.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Careers",
      content: (
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-purple-400 mb-3">Join Our Team</h3>
            <p>
              We're looking for passionate individuals who are excited about using AI and machine learning to create a
              more trustworthy digital world. At Fake Review Detector, you'll work with cutting-edge technology and
              collaborate with experts in data science, engineering, and product development.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-white mb-3">Why Work With Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Impactful Work</h4>
                  <p className="text-sm text-gray-400">
                    Help build technology that protects millions of consumers and businesses from fraud.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Growth Opportunities</h4>
                  <p className="text-sm text-gray-400">
                    Rapid company growth means plenty of opportunities for career advancement.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <span className="text-xl">🌐</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Remote-First</h4>
                  <p className="text-sm text-gray-400">Work from anywhere with our globally distributed team.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-2 rounded-md mr-3">
                  <span className="text-xl">🧠</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Continuous Learning</h4>
                  <p className="text-sm text-gray-400">
                    Professional development budget and regular knowledge sharing sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white mb-3">Open Positions</h3>

            <div className="border border-gray-700 rounded-md overflow-hidden">
              <div className="bg-gray-800 p-4">
                <h4 className="text-lg font-medium text-white">Senior Machine Learning Engineer</h4>
                <div className="flex items-center mt-1">
                  <span className="text-gray-400 text-sm">Remote</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">Full-time</span>
                </div>
              </div>
              <div className="p-4 bg-gray-900">
                <p className="mb-3">
                  We're looking for an experienced ML engineer to help develop and improve our fake review detection
                  algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">TensorFlow</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">NLP</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">
                    5+ Years Experience
                  </span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  View Job Description
                </a>
              </div>
            </div>

            <div className="border border-gray-700 rounded-md overflow-hidden">
              <div className="bg-gray-800 p-4">
                <h4 className="text-lg font-medium text-white">Frontend Developer</h4>
                <div className="flex items-center mt-1">
                  <span className="text-gray-400 text-sm">Remote</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">Full-time</span>
                </div>
              </div>
              <div className="p-4 bg-gray-900">
                <p className="mb-3">
                  Join our frontend team to build intuitive interfaces for our review analysis dashboard and tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Next.js</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">
                    3+ Years Experience
                  </span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  View Job Description
                </a>
              </div>
            </div>

            <div className="border border-gray-700 rounded-md overflow-hidden">
              <div className="bg-gray-800 p-4">
                <h4 className="text-lg font-medium text-white">Data Scientist</h4>
                <div className="flex items-center mt-1">
                  <span className="text-gray-400 text-sm">Remote</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">Full-time</span>
                </div>
              </div>
              <div className="p-4 bg-gray-900">
                <p className="mb-3">
                  Help us analyze patterns in review data and develop new features to improve detection accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">Data Analysis</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">ML</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs">
                    2+ Years Experience
                  </span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  View Job Description
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Privacy Policy",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-purple-400 mb-3">Privacy Policy</h3>
            <p className="text-sm text-gray-400">Last Updated: April 15, 2025</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">1. Introduction</h4>
            <p>
              At Fake Review Detector, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our fake review detection service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">2. Information We Collect</h4>
            <p className="mb-2">We collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Review text submitted for analysis</li>
              <li>IP addresses and device information</li>
              <li>Usage data and analytics</li>
              <li>Account information if you create an account</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">3. How We Use Your Information</h4>
            <p className="mb-2">We use the collected information for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Providing and improving our fake review detection service</li>
              <li>Training and refining our machine learning models</li>
              <li>Analyzing usage patterns to improve user experience</li>
              <li>Communicating with you about your account or our services</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">4. Data Retention</h4>
            <p>
              We retain the review text submitted for analysis for 30 days, after which it is anonymized for research
              purposes. Account information is retained as long as you maintain an active account with us.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">5. Data Sharing and Disclosure</h4>
            <p className="mb-2">We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Service providers who help us deliver our services</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
            <p className="mt-2">We do not sell your personal information to third parties.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">6. Your Rights</h4>
            <p className="mb-2">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
            <p className="mt-2">To exercise these rights, please contact us at privacy@fakereviewdetector.com.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">7. Security</h4>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">8. Changes to This Privacy Policy</h4>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">9. Contact Us</h4>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">privacy@fakereviewdetector.com</p>
            <p>Review Radar, Inc.</p>
            <p>AB-1 RN-315</p>
            <p>GLA University, Mathura</p>
          </div>
        </div>
      ),
    },
    {
      title: "Terms of Service",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-purple-400 mb-3">Terms of Service</h3>
            <p className="text-sm text-gray-400">Last Updated: April 15, 2025</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">1. Acceptance of Terms</h4>
            <p>
              By accessing or using the Fake Review Detector service, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">2. Description of Service</h4>
            <p>
              Fake Review Detector provides tools and APIs for detecting potentially fraudulent reviews using artificial
              intelligence and machine learning technologies. Our service analyzes review text to determine the
              likelihood that it is authentic or fake.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">3. User Accounts</h4>
            <p className="mb-2">
              To access certain features of our service, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">4. API Usage and Rate Limits</h4>
            <p>
              Our API is subject to rate limits based on your subscription plan. Exceeding these limits may result in
              temporary suspension of API access. You agree not to attempt to circumvent these rate limits.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">5. Prohibited Uses</h4>
            <p className="mb-2">You agree not to use our service to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Generate fake reviews</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Interfere with or disrupt the service</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">6. Intellectual Property</h4>
            <p>
              All content, features, and functionality of our service, including but not limited to text, graphics,
              logos, and software, are owned by Fake Review Detector and are protected by copyright, trademark, and
              other intellectual property laws.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">7. Disclaimer of Warranties</h4>
            <p>
              Our service is provided "as is" and "as available" without any warranties of any kind, either express or
              implied. We do not guarantee that our service will be uninterrupted, secure, or error-free, or that
              results obtained from using our service will be accurate or reliable.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">8. Limitation of Liability</h4>
            <p>
              In no event shall Fake Review Detector be liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits, data, or use, arising out of or in
              connection with our service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">9. Termination</h4>
            <p>
              We may terminate or suspend your account and access to our service at our sole discretion, without notice,
              for conduct that we believe violates these Terms of Service or is harmful to other users of our service,
              us, or third parties, or for any other reason.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">10. Changes to Terms</h4>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will provide notice of significant
              changes by posting the new Terms of Service on our website and updating the "Last Updated" date.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">11. Governing Law</h4>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of
              California, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-2">12. Contact Us</h4>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="mt-2">legal@fakereviewdetector.com</p>
            <p>Review Radar, Inc.</p>
            <p>AB1 RN-315</p>
            <p>GLA University, Mathura</p>
          </div>
        </div>
      ),
    },
    {
      title: "Contact",
      content: (
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-medium text-purple-400 mb-3">Contact Us</h3>
            <p>
              We'd love to hear from you! Whether you have questions about our service, need technical support, or want
              to explore partnership opportunities, our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="text-lg font-medium text-white mb-3">General Inquiries</h4>
              <div className="space-y-2">
          <p className="flex items-center">
            <span className="text-purple-400 mr-2">📧</span>
            <span>info@fakereviewdetector.com</span>
          </p>
          <p className="flex items-center">
            <span className="text-purple-400 mr-2">📞</span>
            <span>+91 9234567890</span>
          </p>
          <p className="flex items-center">
            <span className="text-purple-400 mr-2">⏱</span>
            <span>Monday-Friday, 9am-5pm PT</span>
          </p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="text-lg font-medium text-white mb-3">Technical Support</h4>
              <div className="space-y-2">
          <p className="flex items-center">
            <span className="text-purple-400 mr-2">📧</span>
            <span>support@fakereviewdetector.com</span>
          </p>
          <p className="flex items-center">
            <span className="text-purple-400 mr-2">📞</span>
            <span>+91 9876543210</span>
          </p>
          <p className="flex items-center">
            <span className="text-purple-400 mr-2">⏱</span>
            <span>24/7 Support</span>
          </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/80 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium text-white mb-4">Send Us a Message</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your.email@example.com"
            />
          </div>
              </div>

              <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="What's this about?"
          />
              </div>

              <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
            placeholder="Tell us how we can help..."
          ></textarea>
              </div>

              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:-translate-y-1">
          Send Message
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-medium text-white mb-4">Our Location</h4>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-64">
              <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1767.8079517024844!2d77.59423568846937!3d27.605435420927865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745430233160!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-3">
              <p className="text-gray-300">Review Radar, Inc.</p>
              <p className="text-gray-400">AB1 RN-315</p>
              <p className="text-gray-400">GLA University, Mathura</p>
              <p className="text-gray-400">India</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      <footer className="bg-gray-900/80 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Fake Review Detector</h3>
              <p className="text-gray-400 mb-4">
                Advanced AI-powered analysis to detect fake reviews with stunning visualization.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <span className="sr-only">X</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleLinkClick("Documentation", footerLinks[0].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Documentation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("API Reference", footerLinks[1].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    API Reference
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("Research Papers", footerLinks[2].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Research Papers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("Case Studies", footerLinks[3].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("Blog", footerLinks[4].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleLinkClick("About Us", footerLinks[5].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("Careers", footerLinks[6].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("Privacy Policy", footerLinks[7].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("Terms of Service", footerLinks[8].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("Contact", footerLinks[9].content)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
   {/* ---------------  -------------------------------Subscribe------------------ */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest in fake review detection technology.</p>
              <form
  onSubmit={async (e) => {
    e.preventDefault();
    const emailInput = (e.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement;
    const emailValue = emailInput.value; // Extract the value from the input field
    // const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
    // const API_URL = isLocalhost ? 'http://localhost:8000' : '';
    const API_URL = "https://backenrr-production.up.railway.app"

    try {
      const response = await fetch(`${API_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue }), // Use emailValue here
      });

      if (response.ok) {
        alert("Subscription successful!");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Subscription failed.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  }}
  className="flex flex-col sm:flex-row gap-2"
>
  <input
    type="email"
    name="email"
    placeholder="Your email"
    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
    required
  />
  <button
    type="submit"
    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
  >
    Subscribe
  </button>
</form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Fake Review Detector. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto bg-gray-900 text-gray-100 border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center justify-between">
              {modalContent?.title}
              <button onClick={() => setOpenModal(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Explore our {modalContent?.title.toLowerCase()} resources
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">{modalContent?.content}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}
