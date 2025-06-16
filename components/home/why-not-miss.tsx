"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Zap, Trophy, Eye, Heart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "All-Star Squad",
    description: "Cricket legends reunited for the ultimate championship experience",
  },
  {
    icon: Trophy,
    title: "Five High-Stakes Battles",
    description: "Every match is a final, every moment counts in this elite tournament",
  },
  {
    icon: Zap,
    title: "Explosive Entertainment",
    description: "Caribbean flair meets English grounds for pure cricketing spectacle",
  },
  {
    icon: Eye,
    title: "Unfiltered Access",
    description: "Behind-the-scenes content and exclusive player interactions",
  },
  {
    icon: Heart,
    title: "Massive Fan Zone",
    description: "Join thousands of fans in celebrating cricket's greatest legends",
  },
]

export default function WhyNotMiss() {
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
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-gradient">Why You Can't Miss</span>
          <span className="block text-maroon mt-2">WCL 2025 with West Indies Champions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`bg-white rounded-2xl p-8 shadow-lg card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-maroon to-gold p-3 rounded-full mr-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">✅</div>
                </div>

                <h3 className="text-xl font-bold text-maroon mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-maroon to-gold rounded-2xl p-8 text-white hover-glow">
            <h3 className="text-2xl font-bold mb-4">Ready for the Ultimate Cricket Experience?</h3>
            <p className="text-lg mb-6">
              Join thousands of fans as we celebrate cricket's greatest legends in action!
            </p>
            <button className="bg-white text-maroon px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Your Tickets Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
