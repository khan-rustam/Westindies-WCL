"use client"

import { useEffect, useRef, useState } from "react"

export default function WCLSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-gradient">The World Championship of Legends</span>
          <span className="block text-maroon mt-2">Season 2</span>
        </h2>

        <div
          className={`bg-gradient-to-r from-maroon/5 to-gold/5 rounded-2xl p-8 sm:p-12 hover-glow transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            The World Championship of Legends makes its triumphant return in 2025! From July 18 to August 2, cricket's
            greatest legends will once again grace the fields of England. This isn't just cricket – it's a celebration
            of the sport's most iconic moments and the players who created them.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover transition-all duration-500 ease-out delay-300">
              <div className="text-3xl font-bold text-maroon mb-2">July 18</div>
              <div className="text-gold font-semibold">Tournament Begins</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover transition-all duration-500 ease-out delay-400">
              <div className="text-3xl font-bold text-maroon mb-2">16 Days</div>
              <div className="text-gold font-semibold">Of Pure Cricket</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover transition-all duration-500 ease-out delay-500">
              <div className="text-3xl font-bold text-maroon mb-2">Aug 2</div>
              <div className="text-gold font-semibold">Grand Finale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
