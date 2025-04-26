"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedBackgroundProps {
  isAnalyzing: boolean
  fakePercentage: number
  showResults: boolean
}

// Update the AnimatedBackground component to ensure it doesn't interfere with content
export default function AnimatedBackground({ isAnalyzing, fakePercentage, showResults }: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black"></div>

      {/* Stars */}
      <StarField />

      {/* Animated elements based on state */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none"
            >
              <AnalyzingAnimation />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showResults && !isAnalyzing && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none"
            >
              <ResultBadge fakePercentage={fakePercentage} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating particles */}
      <FloatingParticles />
    </div>
  )
}

function StarField() {
  const [stars, setStars] = useState<
    Array<{ id: number; size: number; x: number; y: number; delay: number }>
  >([])

  useEffect(() => {
    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, []) // Generate stars only after hydration

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function FloatingParticles() {
  const [particles, setParticles] = useState<
    Array<{ id: number; size: number; x: number; y: number; duration: number; delay: number }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, []) // Generate particles only after hydration

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-sm animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function AnalyzingAnimation() {
  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      {/* Outer spinning ring */}
      <div className="absolute w-60 h-60 rounded-full border-4 border-purple-500 border-t-transparent animate-spin-slow"></div>

      {/* Middle spinning ring */}
      <div className="absolute w-44 h-44 rounded-full border-4 border-pink-500 border-b-transparent animate-spin-reverse"></div>

      {/* Inner spinning ring */}
      <div className="absolute w-28 h-28 rounded-full border-4 border-blue-500 border-l-transparent animate-spin-slow"></div>

      {/* Pulsing center */}
      <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full animate-pulse"></div>

      {/* Center text */}
      <div className="text-white text-center z-10 animate-pulse">
        <div className="text-2xl font-bold">Analyzing</div>
        <div className="text-sm opacity-70 mt-1">Please wait...</div>
      </div>

      {/* Orbiting dots */}
      <div className="absolute w-60 h-60 animate-spin-slow" style={{ animationDuration: "8s" }}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
      </div>
      <div className="absolute w-60 h-60 animate-spin-reverse" style={{ animationDuration: "12s" }}>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full"></div>
      </div>
      <div className="absolute w-60 h-60 animate-spin-slow" style={{ animationDuration: "10s" }}>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
      <div className="absolute w-60 h-60 animate-spin-reverse" style={{ animationDuration: "14s" }}>
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
  )
}

function ResultBadge({ fakePercentage }: { fakePercentage: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Calculate color based on fake percentage
  const getColor = () => {
    if (fakePercentage > 70) return "#ef4444" // Red for highly fake
    if (fakePercentage > 50) return "#f97316" // Orange for likely fake
    if (fakePercentage > 30) return "#facc15" // Yellow for uncertain
    return "#22c55e" // Green for likely real
  }

  const getSecondaryColor = () => {
    if (fakePercentage > 70) return "#b91c1c" // Darker red
    if (fakePercentage > 50) return "#c2410c" // Darker orange
    if (fakePercentage > 30) return "#ca8a04" // Darker yellow
    return "#15803d" // Darker green
  }

  // Calculate real percentage if fake percentage is less than 30
  const realPercentage = fakePercentage <= 30 ? 100 - fakePercentage : undefined

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Animation variables
    let angle = 0
    const particles: Array<{
      x: number
      y: number
      radius: number
      speed: number
      angle: number
      size: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 80; i++) {
      const radius = Math.random() * 120 + 50
      particles.push({
        x: rect.width / 2,
        y: rect.height / 2,
        radius: radius,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Draw glow effect
      const gradient = ctx.createRadialGradient(
        rect.width / 2,
        rect.height / 2,
        10,
        rect.width / 2,
        rect.height / 2,
        150,
      )
      gradient.addColorStop(0, `${getColor()}80`) // Semi-transparent
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Draw outer circle with 3D effect
      ctx.beginPath()
      ctx.arc(rect.width / 2, rect.height / 2, 80, 0, Math.PI * 2)
      const circleGradient = ctx.createLinearGradient(
        rect.width / 2 - 80,
        rect.height / 2 - 80,
        rect.width / 2 + 80,
        rect.height / 2 + 80,
      )
      circleGradient.addColorStop(0, getSecondaryColor())
      circleGradient.addColorStop(1, getColor())
      ctx.fillStyle = circleGradient
      ctx.fill()

      // Draw inner circle
      ctx.beginPath()
      ctx.arc(rect.width / 2, rect.height / 2, 70, 0, Math.PI * 2)
      const innerGradient = ctx.createRadialGradient(
        rect.width / 2 - 20,
        rect.height / 2 - 20,
        0,
        rect.width / 2,
        rect.height / 2,
        70,
      )
      innerGradient.addColorStop(0, "#ffffff")
      innerGradient.addColorStop(1, getColor())
      ctx.fillStyle = innerGradient
      ctx.fill()

      // Draw rotating ring
      angle += 0.01
      ctx.beginPath()
      ctx.arc(rect.width / 2, rect.height / 2, 100, 0, Math.PI * 2)
      ctx.strokeStyle = getColor()
      ctx.lineWidth = 5
      ctx.stroke()

      // Draw second rotating ring
      ctx.beginPath()
      ctx.arc(rect.width / 2, rect.height / 2, 110, angle, angle + Math.PI * 1.5)
      ctx.strokeStyle = getSecondaryColor()
      ctx.lineWidth = 3
      ctx.stroke()

      // Draw particles
      particles.forEach((particle) => {
        particle.angle += particle.speed / 100
        const x = rect.width / 2 + Math.cos(particle.angle) * particle.radius
        const y = rect.height / 2 + Math.sin(particle.angle) * particle.radius

        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = getColor()
        ctx.globalAlpha = particle.opacity
        ctx.fill()
      })

      ctx.globalAlpha = 1

      // Draw percentage text with 3D effect
      ctx.fillStyle = "white"
      ctx.font = "bold 36px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Shadow for 3D effect
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
      ctx.shadowBlur = 10
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2

      // **Display realPercentage if it's calculated** (when fakePercentage < 30)
      const percentageToDisplay = realPercentage !== undefined ? realPercentage : fakePercentage;

      ctx.fillText(`${percentageToDisplay}%`, rect.width / 2, rect.height / 2 - 10)

      // Reset shadow
      ctx.shadowColor = "transparent"
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      // Draw label
      ctx.font = "16px Arial"
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
      ctx.fillText(fakePercentage > 50 ? "FAKE PROBABILITY" : "REAL PROBABILITY", rect.width / 2, rect.height / 2 + 20)

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [fakePercentage, realPercentage])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 1.5 }}
      className="relative animate-float"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <canvas
        ref={canvasRef}
        width="350"
        height="350"
        className="w-[350px] h-[350px] transform rotate-3d"
        style={{ transform: "rotateX(10deg) rotateY(10deg)" }}
      />
    </motion.div>
  )
}
