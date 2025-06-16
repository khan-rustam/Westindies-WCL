"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"

const fixtures = [
  {
    match: 1,
    fixture: "West Indies Champions vs South Africa Champions",
    venue: "Edgbaston, Birmingham",
    date: "July 19 (Sat)",
    timeUK: "12:30 PM",
    timeIST: "06:00 PM IST",
  },
  {
    match: 2,
    fixture: "West Indies Champions vs England Champions",
    venue: "County Ground, Northampton",
    date: "July 22 (Tue)",
    timeUK: "04:30 PM",
    timeIST: "10:00 PM IST",
  },
  {
    match: 3,
    fixture: "West Indies Champions vs Australia Champions",
    venue: "County Ground, Northampton",
    date: "July 23 (Wed)",
    timeUK: "04:30 PM",
    timeIST: "10:00 PM IST",
  },
  {
    match: 4,
    fixture: "West Indies Champions vs Pakistan Champions",
    venue: "Headingley, Leeds",
    date: "July 26 (Sat)",
    timeUK: "04:30 PM",
    timeIST: "10:00 PM IST",
  },
  {
    match: 5,
    fixture: "West Indies Champions vs India Champions",
    venue: "Grace Road, Leicestershire",
    date: "July 29 (Tue)",
    timeUK: "04:30 PM",
    timeIST: "10:00 PM IST",
  },
]

export default function Season2Section() {
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
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            🔥 <span className="text-gradient">Season 2 – WCL 2025</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <strong>Chris Gayle</strong> leads our legendary squad into battle! The Universe Boss returns to show the
            world why West Indies cricket is pure entertainment.
          </p>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-glow transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-maroon to-gold p-6">
            <h3 className="text-2xl font-bold text-white text-center">Match Fixtures</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Match #</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fixture</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Venue</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time (UK)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time (IST)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fixtures.map((fixture, index) => (
                  <tr key={fixture.match} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm font-medium text-maroon">{fixture.match}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{fixture.fixture}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gold mr-1" />
                        {fixture.venue}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gold mr-1" />
                        {fixture.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gold mr-1" />
                        {fixture.timeUK}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gold mr-1" />
                        {fixture.timeIST}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
