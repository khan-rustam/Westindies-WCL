"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shirt, Gift, Camera } from "lucide-react"

export default function BeThereSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-maroon text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">Be There. Feel It. Live It.</h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            This is more than cricket – it's a celebration of legends, a festival of sport, and a carnival of
            Caribbean culture. Don't just watch history, be part of it!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[0,1,2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="bg-gold/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 transform group-hover:scale-110">
                {i === 0 && <Shirt className="h-12 w-12 text-gold mx-auto" />}
                {i === 1 && <Gift className="h-12 w-12 text-gold mx-auto" />}
                {i === 2 && <Camera className="h-12 w-12 text-gold mx-auto" />}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {i === 0 && "Official Merchandise"}
                {i === 1 && "VIP Experiences"}
                {i === 2 && "Exclusive Content"}
              </h3>
              <p className="text-white/80">
                {i === 0 && "Exclusive WI Champions gear and collectibles"}
                {i === 1 && "Meet & greet with cricket legends"}
                {i === 2 && "Behind-the-scenes access and highlights"}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-center"
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
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-600"
          >
            <button className="bg-gold hover:bg-gold/90 text-maroon px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Join the Champions Army
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <a href="https://x.com/westindieschamp" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Follow Our Journey</a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
