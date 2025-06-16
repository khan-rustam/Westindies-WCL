"use client"

import { useEffect, useState } from "react"
import { type LucideIcon } from "lucide-react"

interface HeroSectionProps {
  title: string
  description: string
  icon?: LucideIcon
}

export default function HeroSection({ title, description, icon: Icon }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-gradient-to-br from-maroon to-gold text-white section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} pt-10`}
        >
          {Icon && <Icon className="h-16 w-16 mx-auto mb-6 text-gold" />}
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto">{description}</p>
        </div>
      </div>
    </section>
  )
} 