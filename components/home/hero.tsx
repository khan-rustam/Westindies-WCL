"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (imageRef.current) {
        const { left, top, width, height } = imageRef.current.getBoundingClientRect()
        const x = (event.clientX - (left + width / 2)) / (width / 2)
        const y = (event.clientY - (top + height / 2)) / (height / 2)
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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon/90 to-gold/80"></div>

      

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/30 rounded-full animate-ping"></div>

      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
          {/* Logo above heading */}
          {/* <div className="flex justify-center mb-4">
            <Image
              src="/WCL Teams/West Indies Champions LOGO.png"
              alt="West Indies Champions Logo"
              width={180}
              height={180}
              className="w-28 sm:w-40 lg:w-48 h-auto object-contain drop-shadow-xl"
              priority
            />
          </div> */}
          {/* Hero Banner - Recommended size: 1600x500px */}
          <div className="w-screen relative pt-12 left-1/2 right-1/2 -mx-[50vw] mb-16" style={{ maxWidth: '100vw' }}>
            <Image
              src="/Banner.jpg"
              alt="West Indies Team Banner"
              width={1600}
              height={400}
              className="w-full h-[150px] sm:h-[280px] md:h-[360px] lg:h-[400xpx] object-cover object-bottom shadow-xl rounded-none"
              priority
            />
          </div>
          <h1 className="text-4xl uppercase sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            West Indies Champions
            {/* <span className="block text-gold text-3xl sm:text-5xl lg:text-6xl mt-2">WCL 2025</span> */}
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to the Official Home of the West Indies Champions — Where cricket legends return, memories are
            reignited, and the Caribbean spirit takes over England!
          </p>
{/* 
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-secondary text-lg px-8 py-4 hover-glow">Join the Champions</button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Watch Highlights
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}