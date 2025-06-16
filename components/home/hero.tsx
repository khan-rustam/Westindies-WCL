"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (event: MouseEvent) => {
      if (imageRef.current) {
        const { left, top, width, height } = imageRef.current.getBoundingClientRect()
        const x = (event.clientX - (left + width / 2)) / (width / 2) // -1 to 1 range
        const y = (event.clientY - (top + height / 2)) / (height / 2) // -1 to 1 range
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${-mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
    transition: "transform 0.1s ease-out",
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon/90 to-gold/80"></div>

      

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/30 rounded-full animate-ping"></div>

      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            West Indies Champions
            <span className="block text-gold text-3xl sm:text-5xl lg:text-6xl mt-2">WCL 2025</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to the Official Home of the West Indies Champions — Where cricket legends return, memories are
            reignited, and the Caribbean spirit takes over England!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-secondary text-lg px-8 py-4 hover-glow">Join the Champions</button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Watch Highlights
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  )
}
