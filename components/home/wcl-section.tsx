"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function WCLSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
        >
          <span className="text-gradient">The World Championship of Legends</span>
          <span className="block text-maroon mt-2">Season 2</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-to-r from-maroon/5 to-gold/5 rounded-2xl p-8 sm:p-12 hover-glow"
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
        </motion.div>
      </div>
    </section>
  )
}
