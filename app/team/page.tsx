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
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm off-break",
    profile:
      "Chris Gayle, nicknamed \"The Universe Boss,\" is a legendary Jamaican cricketer known for his explosive batting, especially in T20s. He's the only player with a triple century in Tests, a double in ODIs, and a hundred in T20Is. Gayle has over 14,000 T20 runs, 1000+ sixes, and major ICC titles, making him one of cricket's greatest entertainers.",
    image: "/Players Images/Chris Gayle.png",
    t20Stats: { matches: "463", runs: "14562", average: "36.22", strikeRate: "144.75" },
    t20iStats: { matches: "79", runs: "1899", wickets: "20", economyRate: "6.92", average: "27.92", strikeRate: "137.50" },
    wclStats: { matches: "5", runs: "109", average: "27.09", strikeRate: "118.47" },
  },
  {
    name: "Dwayne Bravo",
    role: "Batting Allrounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    profile:
      "Dwayne Bravo, a flamboyant West Indian all-rounder, rose to global fame through T20 leagues, especially the IPL with Chennai Super Kings. Known for his death bowling, explosive batting, electric fielding, and charisma, Bravo became a T20 icon. Despite international setbacks and disputes, he remained a fan favourite. His versatility and entertainment value made him one of the most sought-after cricketers, earning a memorable recall to the West Indies' T20I side in 2020.",
    image: "/Players Images/bravo.png",
    t20Stats: { matches: "582", runs: "6970", wickets: "631", average: "22.33", strikeRate: "125.44", economyRate: "8.26" },
    t20iStats: { matches: "91", runs: "1255", wickets: "78", economyRate: "8.11", average: "25.01", strikeRate: "103.03" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Kieron Pollard",
    role: "All-rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    profile:
      "Kieron Pollard, a dynamic Trinidadian all-rounder, captained West Indies in limited-overs formats and played over 500 T20 matches globally. Known for his explosive batting, he famously hit six sixes in an over against Sri Lanka. He was part of the 2012 T20 World Cup-winning squad and led several MI franchises. Pollard retired from international cricket in 2022 and now serves as Mumbai Indians' batting coach, continuing to impact the game beyond the field.",
    image: "/Players Images/Kieron Pollard copy.png",
    t20Stats: { matches: "660", runs: "12900", wickets: "316", average: "30.3", strikeRate: "151.4" },
    t20iStats: { matches: "101", runs: "1569", wickets: "42", economyRate: "8.33", average: "25.30", strikeRate: "135.14" },
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
    role: "Batting Allrounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    profile:
      "Dwayne Smith, a vintage Calypso-style batter with a powerful game and seam-up bowling, made a stunning Test debut with a century. Despite early promise, his international career lacked consistency. He found success in T20 leagues, especially the IPL, and became known for explosive starts. Though talented, he often failed to convert starts into big scores at the international level.",
    image: "/Players Images/DWAYNE SMITH.png",
    t20Stats: { matches: "337", runs: "7870", wickets: "110", average: "26.23", strikeRate: "127.42", economyRate: "8.07" },
    t20iStats: { matches: "33", runs: "582", wickets: "7", economyRate: "8.96", average: "18.19", strikeRate: "122.27" },
    wclStats: { matches: "6", runs: "202", average: "33.66", strikeRate: "127.84" },
  },
  {
    name: "Lendl Simmons",
    role: "Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    profile:
      "Lendl Simmons, a right-handed batsman from Trinidad, represented the West Indies from 2006 to 2022. Known for his T20 prowess, he was part of the 2012 and 2016 T20 World Cup-winning teams. Simmons played in the IPL for the Mumbai Indians, scoring a century in 2014 and helping them win titles in 2015 and 2017. Despite a short Test career, he made impactful ODI and T20I contributions and later featured in various global T20 leagues",
    image: "/Players Images/LENDL SIMMONS .png",
    t20Stats: { matches: "292", runs: "7756", average: "29.83", strikeRate: "119.19" },
    t20iStats: { matches: "68", runs: "1527", wickets: "0", economyRate: "-", average: "26.78", strikeRate: "120.80" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Fidel Edwards",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    profile:
      "Fidel Edwards, born on 6 February 1982 in Barbados, is a former West Indian pacer known for his slingy action and raw pace. Spotted by Brian Lara, he made a dream Test debut in 2003 with a five-wicket haul. Despite injuries hampering his progress, Edwards played key roles in Tests and T20Is, including the 2012 T20 World Cup win. He returned to international cricket in 2021 after an 8-year absence.",
    image: "/Players Images/Fidel Edwards.png",
    t20Stats: { matches: "119", runs: "-", wickets: "112", average: "27.67", strikeRate: "-", economyRate: "7.86" },
    t20iStats: { matches: "26", runs: "-", wickets: "20", economyRate: "8.24", average: "30.85", strikeRate: "-" },
    wclStats: { matches: "4", runs: "-", wickets: "6", average: "28.83", strikeRate: "-", economyRate: "11.53" },
  },
  {
    name: "Suleiman Benn",
    role: "Bowler",
    battingStyle: "Left-handed bat",
    bowlingStyle: "Left-arm orthodox",
    profile:
      "Sulieman Benn, a tall left-arm orthodox spinner from Barbados, played international cricket for the West Indies and was part of their 2016 T20 World Cup-winning squad. Debuting in 2008, he impressed with a five-wicket haul against Australia and set a record in the T20 World Cups with Nikita Miller. Known for his tight bowling, Benn also had controversies, including a ban for on-field altercations and a heated exchange with Dale Steyn during a 2010 Test series.",
    image: "/Players Images/SULEMAN BENN.png",
    t20Stats: { matches: "96", runs: "-", wickets: "88", average: "24.28", strikeRate: "-", economyRate: "6.57" },
    t20iStats: { matches: "24", runs: "-", wickets: "18", economyRate: "7.21", average: "33.66", strikeRate: "-" },
    wclStats: { matches: "5", runs: "-", wickets: "3", average: "48.00", strikeRate: "-", economyRate: "9.00" },
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
    battingStyle: "Right-hand bat",
    bowlingStyle: "Left-arm fast-medium",
    profile:
      "Sheldon Cottrell, a left-arm fast-medium bowler from Jamaica, is known for his trademark salute celebration, inspired by his time in the Jamaica Defence Force. He made his Test debut in 2013 and became a T20I and ODI regular thereafter. Cottrell was the West Indies' leading wicket-taker in the 2019 World Cup and has played in global T20 leagues, including the IPL, Global T20 Canada, CPL, and Lanka Premier League.",
    image: "/Players Images/sheldon Cotrell.png",
    t20Stats: { matches: "142", runs: "-", wickets: "167", average: "22.73", strikeRate: "-", economyRate: "7.85" },
    t20iStats: { matches: "45", runs: "-", wickets: "52", economyRate: "8.13", average: "23.92", strikeRate: "-" },
    wclStats: { matches: "0", runs: "0", average: "0", strikeRate: "0" },
  },
  {
    name: "Chadwick Walton",
    role: "WK-Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "-",
    profile:
      "Chadwick Walton, born on 3 July 1985 in Jamaica, is a wicketkeeper-batter known for his explosive T20 style. He made his Test debut in 2009 and later played ODIs and T20Is for the West Indies until 2018. Though inconsistent internationally, he became a prominent figure in T20 leagues worldwide, including CPL, PSL, and Global T20 Canada. Walton has over 3,000 T20 runs and was awarded Regional T20 Cricketer of the Year in 2018.",
    image: "/Players Images/Chadwik Walton.png",
    t20Stats: { matches: "188", runs: "3578", average: "22.78", strikeRate: "123.76" },
    t20iStats: { matches: "19", runs: "225", wickets: "0", economyRate: "-", average: "13.23", strikeRate: "110.83" },
    wclStats: { matches: "6", runs: "181", average: "45.25", strikeRate: "181.00" },
  },
  {
    name: "Shannon Gabriel",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast-medium",
    profile:
      "Shannon Gabriel, a Trinidadian fast bowler, made his Test debut in 2012 and ODI debut in 2016 for the West Indies. Known for his raw pace and aggression, Gabriel has been a key figure in the West Indies' red-ball setup. His career highlights include a 5-for against Pakistan in 2017 and 50 Test appearances. Despite injuries and a 2019 suspension, Gabriel remained a vital asset until retiring from international cricket in August 2024.",
    image: "/Players Images/SHANNON GABRIEL.png",
    t20Stats: { matches: "39", runs: "-", wickets: "32", average: "25.06", strikeRate: "-", economyRate: "7.49" },
    t20iStats: { matches: "2", runs: "-", wickets: "3", economyRate: "8.00", average: "18.67", strikeRate: "-" },
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
    role: "Bowling Allrounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm wrist-spin",
    profile:
      "Dave Mohammed, born on 8 October 1979 in Trinidad, is a former West Indian cricketer known for his slow left-arm wrist-spin and left-handed batting. He made his Test debut in 2004 and played 5 Tests and 7 ODIs. A standout performance came in the 2006 series vs India, where he scored a crucial Test fifty. In domestic cricket, he played 73 first-class matches, taking 233 wickets and scoring five fifties as a lower-order bat.",
    image: "/Players Images/Dave Mohammed .png",
    t20Stats: { matches: "27", runs: "-", wickets: "33", average: "13.84", strikeRate: "-", economyRate: "6.06" },
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

  // Categorize players as per the provided list
  const batsmen = players.filter(
    (p) =>
      p.name === "Chris Gayle" ||
      p.name === "Shivnarine Chanderpaul" ||
      p.name === "Lendl Simmons"
  )
  const wkBatsmen = players.filter((p) => p.name === "Chadwick Walton")
  const allRounders = players.filter(
    (p) =>
      p.name === "Kieron Pollard" ||
      p.name === "Dwayne Bravo" ||
      p.name === "Dwayne Smith" ||
      p.name === "Perkins Williams" ||
      p.name === "Ashley Nurse" ||
      p.name === "Dave Mohammed"
  )
  const bowlers = players.filter(
    (p) =>
      p.name === "Sheldon Cottrell" ||
      p.name === "Shannon Gabriel" ||
      p.name === "Nikita Miller" ||
      p.name === "Suleiman Benn" ||
      p.name === "Fidel Edwards"
  )

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Squad – West Indies Champions 2025"
        description="Meet the legends who will carry the Caribbean flag in the World Championship of Legends 2025. Each player brings their unique flair and championship experience to create cricket magic!"
        icon={Award}
      />

      {/* Players Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Batsman Section */}
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-2 text-center">Batsman</h2>
            <div className="flex justify-center mb-6">

              <div className="mx-auto w-32 border-b-2 border-maroon rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {batsmen.map((player, index) => (
                <div
                  key={player.name}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-500 transform hover:scale-103 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openPlayerModal(player)}
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={player.image}
                      alt={`${player.name} - ${player.role}`}
                      fill
                      className="object-cover object-top rounded-t-2xl"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-maroon">{player.name}
                      {player.name === "Shivnarine Chanderpaul" && (
                        <span className="block text-xs text-gold font-semibold">(player cum head coach)</span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm">{player.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* WK-Batsman Section */}
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-2 text-center">WK-Batsman</h2>
            <div className="flex justify-center mb-6">
              <div className="mx-auto w-32 border-b-2 border-maroon rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wkBatsmen.map((player, index) => (
                <div
                  key={player.name}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-500 transform hover:scale-103 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openPlayerModal(player)}
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={player.image}
                      alt={`${player.name} - ${player.role}`}
                      fill
                      className="object-cover object-top rounded-t-2xl"
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
          {/* All-rounder Section */}
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-2 text-center">All-rounder</h2>
            <div className="flex justify-center mb-6">
              <div className="mx-auto w-32 border-b-2 border-maroon rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allRounders.map((player, index) => (
                <div
                  key={player.name}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-500 transform hover:scale-103 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openPlayerModal(player)}
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={player.image}
                      alt={`${player.name} - ${player.role}`}
                      fill
                      className="object-cover object-top rounded-t-2xl"
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
          {/* Bowler Section */}
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-2 text-center">Bowler</h2>
            <div className="flex justify-center mb-6">
              <div className="mx-auto w-32 border-b-2 border-maroon rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {bowlers.map((player, index) => (
                <div
                  key={player.name}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-500 transform hover:scale-103 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openPlayerModal(player)}
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={player.image}
                      alt={`${player.name} - ${player.role}`}
                      fill
                      className="object-cover object-top rounded-t-2xl"
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
                className="rounded-xl shadow-lg object-contain"
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
