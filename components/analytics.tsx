// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// import React, { useEffect, useState } from 'react';

// const DataComponent: React.FC = () => {
//   const [number, setNumber] = useState<number | null>(null);
//     // Fetch the number from FastAPI
//   useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/get-number');
//                 const result = await response.json();
//                 setNumber(result.number);  // Set the single number received
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);
//     if (number === null) {
//       return <div>Loading...</div>;
//     }
  
//     return <div>{`Fetched Number: ${number}`}</div>;
//   };
  
//   export function Analytics() {
//     const [number, setNumber] = useState<number | null>(null);
  
//     // Sam
// // export default DataComponent;
// export function Analytics() {
//   // Sample data for the charts
//   const stats = [
//     { label: "Reviews Analyzed", value: <DataComponent />, icon: "📊", color: "from-blue-500 to-blue-700" },
//     { label: "Fake Reviews Detected", value: "41", icon: "🚫", color: "from-red-500 to-red-700" },
//     { label: "Detection Accuracy", value: "94.8%", icon: "🎯", color: "from-green-500 to-green-700" },
//     { label: "Languages Supported", value: "12+", icon: "🌐", color: "from-purple-500 to-purple-700" },
//   ]

//   const commonPatterns = [
//     { pattern: "Excessive Punctuation!!!", percentage: 78 },
//     { pattern: "Extreme Language", percentage: 65 },
//     { pattern: "Generic Praise", percentage: 59 },
//     { pattern: "No Specific Details", percentage: 52 },
//     { pattern: "Repeated Phrases", percentage: 47 },
//   ]

//   return (
//     <div className="space-y-8">
//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-3xl font-bold text-center mb-8"
//       >
//         Analytics & Insights
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
//       >
//         {stats.map((stat, index) => (
//           <motion.div
//             key={stat.label}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 + index * 0.1 }}
//           >
//             <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm overflow-hidden">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg text-gray-300">{stat.label}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center">
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.color} mr-4`}
//                   >
//                     <span className="text-xl">{stat.icon}</span>
//                   </div>
//                   <span className="text-3xl font-bold">{stat.value}</span>
//                 </div>
//               </CardContent>
//               <div className={`h-1 w-full bg-gradient-to-r ${stat.color}`}></div>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//         className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
//       >
//         <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
//           <CardHeader>
//             <CardTitle>Common Patterns in Fake Reviews</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {commonPatterns.map((item, index) => (
//                 <motion.div
//                   key={item.pattern}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.9 + index * 0.1 }}
//                   className="space-y-2"
//                 >
//                   <div className="flex justify-between">
//                     <span className="text-gray-300">{item.pattern}</span>
//                     <span className="text-gray-400">{item.percentage}%</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2">
//                     <motion.div
//                       className="bg-gradient-to-r from-red-500 to-red-300 h-2 rounded-full"
//                       initial={{ width: 0 }}
//                       animate={{ width: `${item.percentage}%` }}
//                       transition={{ duration: 1, delay: 1 + index * 0.1 }}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

        // <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
        //   <CardHeader>
        //     <CardTitle>How Our Technology Works</CardTitle>
        //   </CardHeader>
        //   <CardContent>
        //     <div className="space-y-4">
        //       <motion.div
        //         initial={{ opacity: 0, y: 10 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ delay: 0.9 }}
        //         className="flex items-start"
        //       >
        //         <div className="bg-purple-600/20 p-2 rounded-full mr-3">
        //           <span className="text-xl">🧠</span>
        //         </div>
        //         <div>
        //           <h3 className="font-medium text-gray-200">AI-Powered Analysis</h3>
        //           <p className="text-gray-400 text-sm">
        //             Our advanced AI models analyze linguistic patterns and contextual clues to identify fake reviews.
        //           </p>
        //         </div>
        //       </motion.div>
        //
        //       <motion.div
        //         initial={{ opacity: 0, y: 10 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ delay: 1 }}
        //         className="flex items-start"
        //       >
        //         <div className="bg-blue-600/20 p-2 rounded-full mr-3">
        //           <span className="text-xl">🔍</span>
        //         </div>
        //         <div>
        //           <h3 className="font-medium text-gray-200">Multi-lingual Support</h3>
        //           <p className="text-gray-400 text-sm">
        //             Detects fake reviews in multiple languages including Hinglish and other regional variations.
        //           </p>
        //         </div>
        //       </motion.div>
        //
        //       <motion.div
        //         initial={{ opacity: 0, y: 10 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ delay: 1.1 }}
        //         className="flex items-start"
        //       >
        //         <div className="bg-green-600/20 p-2 rounded-full mr-3">
        //           <span className="text-xl">📊</span>
        //         </div>
        //         <div>
        //           <h3 className="font-medium text-gray-200">Probability Scoring</h3>
        //           <p className="text-gray-400 text-sm">
        //             Provides detailed probability scores with specific reasons for the analysis.
        //           </p>
        //         </div>
        //       </motion.div>
        //
        //       <motion.div
        //         initial={{ opacity: 0, y: 10 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ delay: 1.2 }}
        //         className="flex items-start"
        //       >
        //         <div className="bg-pink-600/20 p-2 rounded-full mr-3">
        //           <span className="text-xl">🔄</span>
        //         </div>
        //         <div>
        //           <h3 className="font-medium text-gray-200">Continuous Learning</h3>
        //           <p className="text-gray-400 text-sm">
        //             Our system continuously improves by learning from new patterns in fake reviews.
        //           </p>
        //         </div>
        //       </motion.div>
        //     </div>
        //   </CardContent>
        // </Card>
//       </motion.div>
//     </div>
//   )
// }

// -----------------------------------
// // change 2
// --------------------------------------


// "use client"
//
// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import React, { useEffect, useState } from 'react';
//
// const DataComponent: React.FC = () => {
//   const [number, setNumber] = useState<number | null>(null);
//
//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/components/analytics');
//       const result = await response.json();
//       setNumber(result.total_fake_reviews);  // Corrected key name
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//
//   fetchData();
// }, []);
//
//   // Render loading or the fetched number
//   if (number === null) {
//     return <div>Loading...</div>;
//   }
//
//   return <div>{`Fetched Number: ${number}`}</div>;
// };
//
// export function Analytics() {
//   const [number, setNumber] = useState<number | null>(null);
//
//   // Sample data for the charts
//   const stats = [
//     { label: "Reviews Analyzed", value: number !== null ? number : "Loading...", icon: "📊", color: "from-blue-500 to-blue-700" },
//     { label: "Fake Reviews Detected", value: "69", icon: "🚫", color: "from-red-500 to-red-700" },
//     { label: "Detection Accuracy", value: "94.8%", icon: "🎯", color: "from-green-500 to-green-700" },
//     { label: "Languages Supported", value: "12+", icon: "🌐", color: "from-purple-500 to-purple-700" },
//   ];
//
//   const commonPatterns = [
//     { pattern: "Excessive Punctuation!!!", percentage: 78 },
//     { pattern: "Extreme Language", percentage: 65 },
//     { pattern: "Generic Praise", percentage: 59 },
//     { pattern: "No Specific Details", percentage: 52 },
//     { pattern: "Repeated Phrases", percentage: 47 },
//   ];
//
//   return (
//     <div className="space-y-8">
//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="text-3xl font-bold text-center mb-8"
//       >
//         Analytics & Insights
//       </motion.h2>
//
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
//       >
//         {stats.map((stat, index) => (
//           <motion.div
//             key={stat.label}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 + index * 0.1 }}
//           >
//             <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm overflow-hidden">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg text-gray-300">{stat.label}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center">
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.color} mr-4`}
//                   >
//                     <span className="text-xl">{stat.icon}</span>
//                   </div>
//                   <span className="text-3xl font-bold">{stat.value}</span>
//                 </div>
//               </CardContent>
//               <div className={`h-1 w-full bg-gradient-to-r ${stat.color}`}></div>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React, { useEffect, useState } from 'react';


// const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
// const API_URL = isLocalhost ? 'http://localhost:8000' : '';
const API_URL = "https://backen-rr.onrender.com"

export function Analytics() {
  const [number, setNumber] = useState<number | null>(null);
  const [fake_num, setfNumber] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/components/analytics`);
        const result = await response.json();
        setNumber(result.total_reviews);
        setfNumber(result.total_fake_reviews);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const stats = [
    { label: "Reviews Analyzed", value: number !== null ? number : "Loading...", icon: "📊", color: "from-blue-500 to-blue-700" },
    { label: "Fake Reviews Detected", value:fake_num !== null ? fake_num : "Loading..." , icon: "🚫", color: "from-red-500 to-red-700" },
    { label: "Detection Accuracy", value: "86%", icon: "🎯", color: "from-green-500 to-green-700" },
    { label: "Languages Supported", value: "12+", icon: "🌐", color: "from-purple-500 to-purple-700" },
  ];

  const commonPatterns = [
    { pattern: "Excessive Punctuation!!!", percentage: 78 },  
    { pattern: "Extreme Language", percentage: 65 },
    { pattern: "Generic Praise", percentage: 59 },
    { pattern: "No Specific Details", percentage: 52 },
    { pattern: "Repeated Phrases", percentage: 47 },
  ];

  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Analytics & Insights
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-300">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.color} mr-4`}
                  >
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
              </CardContent>
              <div className={`h-1 w-full bg-gradient-to-r ${stat.color}`}></div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* ... rest of your component remains unchanged ... */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
      >
        <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Common Patterns in Fake Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commonPatterns.map((item, index) => (
                <motion.div
                  key={item.pattern}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-300">{item.pattern}</span>
                    <span className="text-gray-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-red-500 to-red-300 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

                <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>How Our Technology Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-start"
              >
                <div className="bg-purple-600/20 p-2 rounded-full mr-3">
                  <span className="text-xl">🧠</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-200">AI-Powered Analysis</h3>
                  <p className="text-gray-400 text-sm">
                    Our advanced AI models analyze linguistic patterns and contextual clues to identify fake reviews.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-start"
              >
                <div className="bg-blue-600/20 p-2 rounded-full mr-3">
                  <span className="text-xl">🔍</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-200">Multi-lingual Support</h3>
                  <p className="text-gray-400 text-sm">
                    Detects fake reviews in multiple languages including Hinglish and other regional variations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex items-start"
              >
                <div className="bg-green-600/20 p-2 rounded-full mr-3">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-200">Probability Scoring</h3>
                  <p className="text-gray-400 text-sm">
                    Provides detailed probability scores with specific reasons for the analysis.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-start"
              >
                <div className="bg-pink-600/20 p-2 rounded-full mr-3">
                  <span className="text-xl">🔄</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-200">Continuous Learning</h3>
                  <p className="text-gray-400 text-sm">
                    Our system continuously improves by learning from new patterns in fake reviews.
                  </p>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>

      </motion.div>
    </div>
  );
}

