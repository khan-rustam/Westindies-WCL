"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, Award, TrendingUp, X } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"

interface PlayerStats {
  matches: string
  runs?: string
  wickets?: string
  average?: string
  strikeRate?: string
  economyRate?: string
}

interface Player {
  name: string
  role: string
  battingStyle: string
  bowlingStyle: string
  profile: string
  image: string
  t20Stats: PlayerStats
  t20iStats: PlayerStats
  wclStats: PlayerStats
}

const players: Player[] = [
  {
    name: "Chris Gayle",
    role: "Batsman",
    battingStyle: "Left-handed",
    bowlingStyle: "Right-arm off-break",
    profile:
      "The 'Universe Boss' is known for his explosive batting and charismatic presence. A true legend of T20 cricket.",
    image: "/Players Images/Chris Gayle.png",
    t20Stats: { matches: "463", runs: "14562", average: "36.2", strikeRate: "144.7" },
    t20iStats: { matches: "79", runs: "1899", wickets: "21", economyRate: "7.7", average: "27.5", strikeRate: "137.3" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Dwayne Bravo",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium-fast",
    profile:
      "A dynamic all-rounder, 'DJ Bravo' is famous for his death bowling, powerful hitting, and energetic celebrations.",
    image: "/Players Images/bravo.png",
    t20Stats: { matches: "568", runs: "6862", wickets: "625", average: "24.0", strikeRate: "128.5" },
    t20iStats: { matches: "91", runs: "1255", wickets: "78", economyRate: "8.3", average: "22.4", strikeRate: "115.9" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Kieron Pollard",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium-fast",
    profile:
      "A destructive hitter and an athletic fielder, Pollard is a dominant force in limited-overs cricket.",
    image: "/Players Images/Kieron Pollard copy.png",
    t20Stats: { matches: "660", runs: "12900", wickets: "316", average: "30.3", strikeRate: "151.4" },
    t20iStats: { matches: "101", runs: "1569", wickets: "42", economyRate: "8.5", average: "25.3", strikeRate: "135.1" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },

  {
    name: "Shivnarine Chanderpaul",
    role: "Batsman",
    battingStyle: "Left-handed",
    bowlingStyle: "Leg-break",
    profile:
      "A tenacious and unconventional batsman, Chanderpaul is known for his unique stance and prolific run-scoring.",
    image: "/Players Images/Shivnarine Chanderpaul.png",
    t20Stats: { matches: "59", runs: "1332", average: "30.9", strikeRate: "120.7" },
    t20iStats: { matches: "22", runs: "343", wickets: "0", economyRate: "-", average: "18.1", strikeRate: "98.0" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Dwayne Smith",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium-fast",
    profile:
      "An explosive opening batsman and a handy medium-pacer, known for his aggressive approach.",
    image: "/Players Images/DWAYNE SMITH.png",
    t20Stats: { matches: "366", runs: "8405", wickets: "146", average: "25.0", strikeRate: "130.8" },
    t20iStats: { matches: "33", runs: "582", wickets: "10", economyRate: "7.8", average: "22.3", strikeRate: "122.5" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Lendl Simmons",
    role: "Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium-fast",
    profile:
      "A stylish opening batsman, Simmons is known for his elegant strokeplay and ability to anchor the innings.",
    image: "/Players Images/LENDL SIMMONS .png",
    t20Stats: { matches: "323", runs: "8548", average: "30.5", strikeRate: "119.8" },
    t20iStats: { matches: "68", runs: "1509", wickets: "0", economyRate: "-", average: "26.0", strikeRate: "120.8" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Fidel Edwards",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast",
    profile:
      "A fiery fast bowler known for his slingy action and ability to generate serious pace.",
    image: "/Players Images/Fidel Edwards.png",
    t20Stats: { matches: "164", runs: "326", wickets: "184", average: "24.0", strikeRate: "110.1" },
    t20iStats: { matches: "26", runs: "11", wickets: "18", economyRate: "8.3", average: "29.7", strikeRate: "11.1" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Suleiman Benn",
    role: "Bowler",
    battingStyle: "Left-handed",
    bowlingStyle: "Left-arm orthodox",
    profile:
      "A tall left-arm spinner known for his accuracy and ability to extract bounce.",
    image: "/Players Images/SULEMAN BENN.png",
    t20Stats: { matches: "109", runs: "377", wickets: "100", average: "17.1", strikeRate: "100.8" },
    t20iStats: { matches: "29", runs: "38", wickets: "28", economyRate: "6.8", average: "24.0", strikeRate: "76.0" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Nikita Miller",
    role: "Bowler",
    battingStyle: "Left-handed",
    bowlingStyle: "Left-arm orthodox",
    profile:
      "A consistent left-arm spinner known for his control and wicket-taking ability in domestic cricket.",
    image: "/Players Images/Nikita Miller.png",
    t20Stats: { matches: "60", runs: "130", wickets: "63", average: "15.5", strikeRate: "90.3" },
    t20iStats: { matches: "11", runs: "11", wickets: "14", economyRate: "6.9", average: "18.1", strikeRate: "64.7" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Ashley Nurse",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off-break",
    profile:
      "An attacking off-spinner and a powerful lower-order batsman, known for his all-round contributions.",
    image: "/Players Images/ASHLEY NURSE.png",
    t20Stats: { matches: "145", runs: "1010", wickets: "115", average: "16.0", strikeRate: "128.0" },
    t20iStats: { matches: "22", runs: "71", wickets: "14", economyRate: "7.7", average: "25.0", strikeRate: "106.0" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Sheldon Cottrell",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Left-arm fast-medium",
    profile:
      "A left-arm pacer known for his salute celebration and ability to pick up wickets with the new ball.",
    image: "/Players Images/sheldon Cotrell.png",
    t20Stats: { matches: "112", runs: "140", wickets: "147", average: "23.0", strikeRate: "98.0" },
    t20iStats: { matches: "38", runs: "32", wickets: "48", economyRate: "8.0", average: "23.0", strikeRate: "100.0" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Chadwick Walton",
    role: "Wicketkeeper Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "-",
    profile:
      "An aggressive wicketkeeper-batsman, known for his explosive hitting at the top of the order.",
    image: "/Players Images/Chadwik Walton.png",
    t20Stats: { matches: "177", runs: "3585", average: "23.6", strikeRate: "130.5" },
    t20iStats: { matches: "23", runs: "438", wickets: "0", economyRate: "-", average: "21.9", strikeRate: "124.8" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Shannon Gabriel",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast",
    profile:
      "A powerful fast bowler known for his raw pace and ability to trouble batsmen with bounce and aggression.",
    image: "/Players Images/SHANNON GABRIEL.png",
    t20Stats: { matches: "25", runs: "29", wickets: "25", average: "30.5", strikeRate: "100.0" },
    t20iStats: { matches: "-", runs: "-", wickets: "-", economyRate: "-", average: "-", strikeRate: "-" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Perkins Williams",
    role: "All-rounder",
    battingStyle: "Left-handed",
    bowlingStyle: "Left-arm orthodox",
    profile:
      "A promising all-rounder with strong batting and left-arm spin capabilities, looking to make a mark.",
    image: "/Players Images/Perkins Williams.png",
    t20Stats: { matches: "0", runs: "0", wickets: "0", average: "0", strikeRate: "0" },
    t20iStats: { matches: "0", runs: "0", wickets: "0", economyRate: "0", average: "0", strikeRate: "0" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Dave Mohammed",
    role: "Bowler",
    battingStyle: "Left-handed",
    bowlingStyle: "Left-arm unorthodox (Chinaman)",
    profile:
      "A unique left-arm wrist-spinner, known for his deceptive variations and ability to pick up crucial wickets.",
    image: "/Players Images/Dave Mohammed .png",
    t20Stats: { matches: "0", runs: "0", wickets: "0", average: "0", strikeRate: "0" },
    t20iStats: { matches: "0", runs: "0", wickets: "0", economyRate: "0", average: "0", strikeRate: "0" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
]

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openPlayerModal = (player: Player) => {
    setSelectedPlayer(player)
  }

  const closePlayerModal = () => {
    setSelectedPlayer(null)
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Squad – West Indies Champions 2025"
        description="Meet the legends who will carry the Caribbean flag in the World Championship of Legends 2025. Each player brings their unique flair and championship experience to create cricket magic!"
        icon={Award}
      />

      {/* Players Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {players.map((player, index) => (
              <div
                key={player.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-500 transform hover:scale-103 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openPlayerModal(player)}
              >
                <div className="relative">
                  <Image
                    src={player.image}
                    alt={`${player.name} - ${player.role}`}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded-t-2xl"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-maroon">{player.name}</h3>
                  <p className="text-gray-600 text-sm">{player.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Details Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-5xl w-full h-auto max-h-[90vh] p-6 lg:p-8 flex flex-col lg:flex-row gap-6 animate-slide-up-modal overflow-hidden">
            <button
              onClick={closePlayerModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-maroon transition-colors duration-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left Side: Image */}
            <div className="w-full lg:w-1/3 p-4 flex justify-center items-center">
              <Image
                src={selectedPlayer.image}
                alt={`${selectedPlayer.name} - ${selectedPlayer.role}`}
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Right Side: Details */}
            <div className="flex-grow text-gray-800 lg:w-2/3 pt-4 lg:pt-0 flex flex-col flex-1 min-h-0">
              <h2 className="text-4xl font-extrabold text-maroon mb-2 leading-tight">{selectedPlayer.name}</h2>
              <p className="text-xl text-gold font-semibold mb-4">{selectedPlayer.role}</p>

              <div className="flex-1 overflow-y-auto no-scrollbar pr-2">
                <div className="space-y-4 mb-6 text-base lg:text-lg">
                  <p className="flex items-center"><strong>Batting Style:</strong> <span className="ml-2">{selectedPlayer.battingStyle}</span></p>
                  <p className="flex items-center"><strong>Bowling Style:</strong> <span className="ml-2">{selectedPlayer.bowlingStyle}</span></p>
                  <p className="text-gray-700 leading-relaxed italic border-l-4 border-maroon pl-4 py-2 bg-gray-50 rounded-r-lg shadow-inner">{selectedPlayer.profile}</p>
                </div>

                <div className="space-y-6">
                  {/* T20 Stats */}
                  <div className="bg-maroon/5 p-4 rounded-lg shadow-sm border border-maroon/10 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md">
                    <h3 className="text-xl font-semibold text-maroon mb-3 flex items-center">
                      <Award className="h-6 w-6 text-maroon mr-2" /> T20 Career
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base">
                      <p className="flex items-center"><span className="mr-2 text-maroon">🏏</span><strong>Matches:</strong> {selectedPlayer.t20Stats.matches}</p>
                      {selectedPlayer.t20Stats.runs && <p className="flex items-center"><span className="mr-2 text-maroon"> batsmen:</span><strong>Runs:</strong> {selectedPlayer.t20Stats.runs}</p>}
                      {selectedPlayer.t20Stats.average && <p className="flex items-center"><span className="mr-2 text-maroon">📊</span><strong>Average:</strong> {selectedPlayer.t20Stats.average}</p>}
                      {selectedPlayer.t20Stats.strikeRate && <p className="flex items-center"><span className="mr-2 text-maroon">⚡</span><strong>Strike Rate:</strong> {selectedPlayer.t20Stats.strikeRate}</p>}
                      {selectedPlayer.t20Stats.wickets && <p className="flex items-center"><span className="mr-2 text-maroon"> 🥎</span><strong>Wickets:</strong> {selectedPlayer.t20Stats.wickets}</p>}
                      {selectedPlayer.t20Stats.economyRate && <p className="flex items-center"><span className="mr-2 text-maroon">💸</span><strong>Economy Rate:</strong> {selectedPlayer.t20Stats.economyRate}</p>}
                    </div>
                  </div>

                  {/* T20I Stats */}
                  <div className="bg-gold/5 p-4 rounded-lg shadow-sm border border-gold/10 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md">
                    <h3 className="text-xl font-semibold text-maroon mb-3 flex items-center">
                      <Star className="h-6 w-6 text-gold mr-2" /> T20I Career
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base">
                      <p className="flex items-center"><span className="mr-2 text-gold">🏏</span><strong>Matches:</strong> {selectedPlayer.t20iStats.matches}</p>
                      {selectedPlayer.t20iStats.runs && <p className="flex items-center"><span className="mr-2 text-gold"> 🏏</span><strong>Runs:</strong> {selectedPlayer.t20iStats.runs}</p>}
                      {selectedPlayer.t20iStats.wickets && <p className="flex items-center"><span className="mr-2 text-gold"> 🥎</span><strong>Wickets:</strong> {selectedPlayer.t20iStats.wickets}</p>}
                      {selectedPlayer.t20iStats.economyRate && <p className="flex items-center"><span className="mr-2 text-gold">💸</span><strong>Economy Rate:</strong> {selectedPlayer.t20iStats.economyRate}</p>}
                      {selectedPlayer.t20iStats.average && <p className="flex items-center"><span className="mr-2 text-gold">📊</span><strong>Average:</strong> {selectedPlayer.t20iStats.average}</p>}
                      {selectedPlayer.t20iStats.strikeRate && <p className="flex items-center"><span className="mr-2 text-gold">⚡</span><strong>Strike Rate:</strong> {selectedPlayer.t20iStats.strikeRate}</p>}
                    </div>
                  </div>

                  {/* WCL Stats */}
                  <div className="bg-maroon/5 p-4 rounded-lg shadow-sm border border-maroon/10 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-md">
                    <h3 className="text-xl font-semibold text-maroon mb-3 flex items-center">
                      <TrendingUp className="h-6 w-6 text-maroon mr-2" /> WCL 2025 Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base">
                      <p className="flex items-center"><span className="mr-2 text-maroon">🏏</span><strong>Matches:</strong> {selectedPlayer.wclStats.matches}</p>
                      {selectedPlayer.wclStats.runs && <p className="flex items-center"><span className="mr-2 text-maroon">🏏</span><strong>Runs:</strong> {selectedPlayer.wclStats.runs}</p>}
                      {selectedPlayer.wclStats.average && <p className="flex items-center"><span className="mr-2 text-maroon">📊</span><strong>Average:</strong> {selectedPlayer.wclStats.average}</p>}
                      {selectedPlayer.wclStats.strikeRate && <p className="flex items-center"><span className="mr-2 text-maroon">⚡</span><strong>Strike Rate:</strong> {selectedPlayer.wclStats.strikeRate}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Player Info Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-gradient">Player Info: Icons Reunited</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow">
              <Award className="h-12 w-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Championship Experience</h3>
              <p className="text-gray-700">
                Our squad boasts multiple World Cup winners, T20 champions, and IPL legends who know how to perform on
                the biggest stages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-maroon/10 rounded-2xl p-8 hover-glow">
              <TrendingUp className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Proven Track Record</h3>
              <p className="text-gray-700">
                Combined, our players have scored over 50,000 international runs and taken 1,000+ wickets across all
                formats.
              </p>
            </div>

            <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow">
              <Star className="h-12 w-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Entertainment Value</h3>
              <p className="text-gray-700">
                Each player brings their unique style and flair, ensuring every match is a spectacle of skill and
                entertainment.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-maroon to-gold rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to See Legends in Action?</h3>
            <p className="text-lg mb-6">
              Follow our champions as they prepare for the ultimate cricket showdown in England!
            </p>
            <button className="bg-white text-maroon px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Match Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
