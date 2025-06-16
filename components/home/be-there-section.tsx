"use client"

import { useEffect, useRef, useState } from "react"
import { Shirt, Gift, Camera } from "lucide-react"

export default function BeThereSection() {
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
    <section ref={sectionRef} className="section-padding bg-maroon text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">Be There. Feel It. Live It.</h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            This is more than cricket – it's a celebration of legends, a festival of sport, and a carnival of
            Caribbean culture. Don't just watch history, be part of it!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className={`text-center group transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-gold/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 transform group-hover:scale-110">
              <Shirt className="h-12 w-12 text-gold mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Official Merchandise</h3>
            <p className="text-white/80">Exclusive WI Champions gear and collectibles</p>
          </div>

          <div
            className={`text-center group transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-gold/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 transform group-hover:scale-110">
              <Gift className="h-12 w-12 text-gold mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">VIP Experiences</h3>
            <p className="text-white/80">Meet & greet with cricket legends</p>
          </div>

          <div
            className={`text-center group transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-gold/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 transform group-hover:scale-110">
              <Camera className="h-12 w-12 text-gold mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Exclusive Content</h3>
            <p className="text-white/80">Behind-the-scenes access and highlights</p>
          </div>
        </div>

        <div
          className={`text-center transition-all duration-1000 ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 hover-glow">
            <h3 className="text-2xl font-bold mb-4">🎉 Coming Soon: Official Merchandise Store</h3>
            <p className="text-lg text-white/90 mb-6">
              Get ready for exclusive West Indies Champions merchandise! From jerseys to collectibles, show your
              support for the legends in style.
            </p>
            <button className="btn-secondary text-lg px-8 py-4">Notify Me When Available</button>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="bg-gold hover:bg-gold/90 text-maroon px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Join the Champions Army
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <a href="https://x.com/westindieschamp" className="block w-full h-full">Follow Our Journey</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
