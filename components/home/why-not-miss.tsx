"use client"

import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { useRef } from "react"
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
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-1, 1], [10, -10])
  const rotateY = useTransform(mx, [-1, 1], [-10, 10])

  function handleMouseMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - (left + width / 2)) / (width / 2));
    const y = ((e.clientY - (top + height / 2)) / (height / 2));
    mx.set(x);
    my.set(y);
  }

  return (
    <section ref={ref} className="section-padding bg-gray-50" onMouseMove={handleMouseMove}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient">Why You Can't Miss</span>
          <span className="block text-maroon mt-2">WCL 2025 with West Indies Champions</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {isInView && features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.04, rotateX: 8, rotateY: -8, boxShadow: "0 8px 32px rgba(148,26,66,0.12)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-2xl p-8 shadow-lg card-hover"
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-maroon to-gold p-3 rounded-full mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">✅</div>
                  </div>
                  <h3 className="text-xl font-bold text-maroon mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* <div
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
        </div> */}
      </div>
    </section>
  )
}
