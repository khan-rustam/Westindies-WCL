"use client"

import { useEffect, useState } from "react"
import { Trophy, TrendingUp, Award, X, ChevronLeft, ChevronRight } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"
import Image from "next/image"

const teams = [
  {
    team: "West Indies Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "/WCL Teams/West Indies Champions LOGO.png",
  },
  {
    team: "England Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "/WCL Teams/ENG Champions.png",
  },
  {
    team: "Australia Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "/WCL Teams/AUS Champions.png",
  },
  {
    team: "India Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "/WCL Teams/IND Champions.png",
  },
  {
    team: "Pakistan Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "/WCL Teams/PAK Champions.png",
  },
  {
    team: "South Africa Champions",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nrr: "0.00",
    logo: "/WCL Teams/SA Champions.png",
  },
]

export default function PointsTablePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openTeamIdx, setOpenTeamIdx] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Keyboard navigation for modal
  useEffect(() => {
    if (openTeamIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenTeamIdx(null)
      if (e.key === "ArrowLeft" && openTeamIdx > 0) setOpenTeamIdx(openTeamIdx - 1)
      if (e.key === "ArrowRight" && openTeamIdx < teams.length - 1) setOpenTeamIdx(openTeamIdx + 1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [openTeamIdx])

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
                            <span className="mr-3">
                              <Image
                                src={team.logo}
                                alt={team.team + " logo"}
                                width={40}
                                height={40}
                                className="rounded-full bg-white border border-gray-200 object-contain"
                                style={{ minWidth: 40, minHeight: 40 }}
                              />
                            </span>
                            <div>
                              <div
                                className={`font-medium ${team.team === "West Indies Champions" ? "text-maroon font-bold" : "text-gray-900 cursor-pointer underline underline-offset-2 hover:text-gold transition"}`}
                                onClick={() => setOpenTeamIdx(index)}
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

      {/* Team Modal */}
      {openTeamIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setOpenTeamIdx(null)}>
          <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center animate-fadeIn" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-maroon rounded-full p-3 text-2xl font-bold shadow-lg hover:bg-gold hover:text-maroon transition focus:outline-none focus:ring-4 focus:ring-gold"
              onClick={() => setOpenTeamIdx(null)}
              aria-label="Close"
              tabIndex={0}
            >
              <X className="w-7 h-7" />
            </button>
            {/* Prev Button */}
            <button
              className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-maroon rounded-full p-2 text-2xl font-bold shadow-lg hover:bg-gold hover:text-maroon transition ${openTeamIdx === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => openTeamIdx > 0 && setOpenTeamIdx(openTeamIdx - 1)}
              disabled={openTeamIdx === 0}
              aria-label="Previous team"
              tabIndex={0}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            {/* Next Button */}
            <button
              className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-maroon rounded-full p-2 text-2xl font-bold shadow-lg hover:bg-gold hover:text-maroon transition ${openTeamIdx === teams.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => openTeamIdx < teams.length - 1 && setOpenTeamIdx(openTeamIdx + 1)}
              disabled={openTeamIdx === teams.length - 1}
              aria-label="Next team"
              tabIndex={0}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
            <Image
              src={teams[openTeamIdx].logo}
              alt={teams[openTeamIdx].team + " logo"}
              width={120}
              height={120}
              className="rounded-full bg-white border-4 border-gold object-contain mb-6 shadow-xl"
              style={{ minWidth: 120, minHeight: 120 }}
            />
            <h2 className="text-2xl font-bold text-maroon mb-4 text-center">{teams[openTeamIdx].team}</h2>
            {/* Team Stats */}
            <div className="w-full grid grid-cols-2 gap-4 mb-2 text-center">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 font-semibold">Matches</div>
                <div className="text-lg font-bold text-maroon">{teams[openTeamIdx].matches}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 font-semibold">Wins</div>
                <div className="text-lg font-bold text-green-600">{teams[openTeamIdx].wins}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 font-semibold">Losses</div>
                <div className="text-lg font-bold text-red-600">{teams[openTeamIdx].losses}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 font-semibold">Points</div>
                <div className="text-lg font-bold text-maroon">{teams[openTeamIdx].points}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 col-span-2">
                <div className="text-xs text-gray-500 font-semibold">Net Run Rate</div>
                <div className="text-lg font-bold text-gold">{teams[openTeamIdx].nrr}</div>
              </div>
            </div>
          </div>
        </div>
      )}

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
