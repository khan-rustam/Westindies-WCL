"use client"

import { useEffect, useState } from "react"
import { Trophy, TrendingUp, Award } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"

const teams = [
  {
    team: "West Indies Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "🏏",
  },
  {
    team: "England Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  },
  {
    team: "Australia Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "🇦🇺",
  },
  {
    team: "India Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "🇮🇳",
  },
  {
    team: "Pakistan Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "🇵🇰",
  },
  {
    team: "South Africa Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "🇿🇦",
  },
]

export default function PointsTablePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Points Table"
        description="Track the journey of cricket legends as they battle for supremacy in the World Championship of Legends 2025!"
        icon={Trophy}
      />

      {/* Points Table */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-glow">
              <div className="bg-gradient-to-r from-maroon to-gold p-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  World Championship of Legends 2025 - Standings
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pos</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Team</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Matches</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Wins</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Losses</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Points</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">NRR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {teams.map((team, index) => (
                      <tr
                        key={team.team}
                        className={`hover:bg-gray-50 transition-colors duration-200 ${team.team === "West Indies Champions" ? "bg-maroon/5 border-l-4 border-maroon" : ""
                          }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{index + 1}</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{team.logo}</span>
                            <div>
                              <div
                                className={`font-medium ${team.team === "West Indies Champions" ? "text-maroon font-bold" : "text-gray-900"
                                  }`}
                              >
                                {team.team}
                              </div>
                              {team.team === "West Indies Champions" && (
                                <div className="text-xs text-gold font-semibold">Our Champions</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 text-center font-medium">{team.matches}</td>
                        <td className="px-6 py-4 text-sm text-green-600 text-center font-medium">{team.wins}</td>
                        <td className="px-6 py-4 text-sm text-red-600 text-center font-medium">{team.losses}</td>
                        <td className="px-6 py-4 text-sm text-center">
                          <span className="bg-maroon text-white px-3 py-1 rounded-full font-bold">{team.points}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 text-center font-medium">{team.nrr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 px-6 py-4">
                <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>Qualified for Playoffs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span>In Contention</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 sm:mt-0">Last updated: Tournament not started</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow">
              <Trophy className="h-12 w-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Tournament Format</h3>
              <p className="text-gray-700">
                Round-robin format followed by knockout stages. Every match counts towards the final standings!
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-gold/10 to-maroon/10 rounded-2xl p-8 hover-glow">
              <TrendingUp className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Points System</h3>
              <p className="text-gray-700">
                2 points for a win, 1 point for a tie/no result, 0 points for a loss. Net Run Rate decides ties.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow">
              <Award className="h-12 w-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Championship Glory</h3>
              <p className="text-gray-700">
                The top teams advance to the playoffs, with the ultimate prize being the WCL 2025 championship!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-maroon to-gold rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tournament Starts July 18, 2025!</h3>
              <p className="text-lg mb-6">
                Follow every match, every run, and every wicket as our champions battle for cricket supremacy!
              </p>
              <button className="bg-white text-maroon px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Set Match Reminders
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
