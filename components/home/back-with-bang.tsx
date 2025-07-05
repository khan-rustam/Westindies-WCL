"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function BackWithBang() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          <span className="text-gradient">West Indies Champions</span>
          <span className="block text-maroon mt-2">Back with a Bang!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-to-br from-maroon/10 via-gold/5 to-maroon/10 rounded-3xl p-8 sm:p-12 hover-glow"
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

          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95, rotateX: 25 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <button className="btn-primary text-lg px-8 py-4">Experience the Magic</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
