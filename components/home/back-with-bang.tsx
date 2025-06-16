"use client"

import { useEffect, useRef, useState } from "react"

export default function BackWithBang() {
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
          className={`text-4xl sm:text-5xl font-bold text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-gradient">West Indies Champions</span>
          <span className="block text-maroon mt-2">Back with a Bang!</span>
        </h2>

        <div
          className={`bg-gradient-to-br from-maroon/10 via-gold/5 to-maroon/10 rounded-3xl p-8 sm:p-12 hover-glow transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              The Caribbean cricket carnival is back! After the electrifying debut season, the West Indies Champions
              return to England with renewed vigor, legendary flair, and an unquenchable thirst for victory. This
              isn't just about cricket – it's about culture, passion, and the indomitable spirit that makes West
              Indies cricket truly special.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              From the explosive batting of Chris Gayle to the mesmerizing spin and pace combinations that have
              defined Caribbean cricket for decades, our champions are ready to light up every ground they step on.
              The 2025 season promises to be bigger, bolder, and more spectacular than ever before.
            </p>

            <p className="text-lg leading-relaxed">
              Get ready for a summer where every boundary is a celebration, every wicket is a festival, and every
              match is a testament to why West Indies cricket holds a special place in every fan's heart. The
              champions are back, and they're here to remind the world what pure cricketing entertainment looks like!
            </p>
          </div>

          <div
            className={`mt-8 text-center transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="btn-primary text-lg px-8 py-4">Experience the Magic</button>
          </div>
        </div>
      </div>
    </section>
  )
}
