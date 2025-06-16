"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Award, TrendingUp, Heart, Star, Quote } from "lucide-react"

const milestones = [
  {
    year: "1995",
    title: "Media Pioneer",
    description: "Founded revolutionary cricket broadcasting company",
  },
  {
    year: "2008",
    title: "Global Expansion",
    description: "Expanded cricket media presence across 15 countries",
  },
  {
    year: "2015",
    title: "Digital Innovation",
    description: "Launched first interactive cricket streaming platform",
  },
  {
    year: "2020",
    title: "Championship Vision",
    description: "Conceptualized the World Championship of Legends",
  },
  {
    year: "2025",
    title: "West Indies Champions",
    description: "Acquired and leads the legendary Caribbean team",
  },
]

export default function OwnerLoungePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-maroon to-gold text-white section-padding">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
              <div>
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 pt-10">Owner – West Indies Champions</h1>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-4">Ajay Sethi</h2>
                  <p className="text-xl sm:text-2xl text-white/90 font-semibold">
                    CRICKET VISIONARY. MEDIA PIONEER. GLOBAL ENTREPRENEUR.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-glow">
                  <Image
                    src="/Players Images/Ajay Sethi.png"
                    alt="Ajay Sethi"
                    width={350}
                    height={400}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                In the world of cricket, where legends are born and dreams take flight, few individuals have managed to
                bridge the gap between passion and business as seamlessly as <strong>Ajay Sethi</strong>. As the
                visionary owner of the West Indies Champions, Sethi represents more than just ownership – he embodies
                the spirit of innovation, the pursuit of excellence, and an unwavering commitment to bringing cricket's
                greatest stories to life.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                From humble beginnings to becoming one of the most influential figures in cricket media and
                entertainment, Ajay Sethi's journey is a testament to what happens when entrepreneurial vision meets
                genuine love for the game. His story is not just about building businesses; it's about creating
                platforms where cricket legends can continue to inspire, entertain, and connect with fans across
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Milestones That Define a Legacy</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-maroon to-gold"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                      <div className="text-2xl font-bold text-maroon mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-maroon text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-16 w-16 text-gold mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-8">Changing The Way The World Listens to Cricket</h2>
          <blockquote className="text-xl sm:text-2xl leading-relaxed italic mb-8">
            "Cricket is not just a sport; it's an emotion, a culture, a way of life. My mission has always been to
            ensure that this beautiful game reaches every corner of the world, told through the voices of those who
            lived it, breathed it, and made it legendary. The West Indies Champions represent everything I believe in –
            passion, excellence, and the power of cricket to unite people across boundaries."
          </blockquote>
          <div className="text-gold font-semibold text-lg">— Ajay Sethi</div>
        </div>
      </section>

      {/* The Entrepreneur's Instinct */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">The Entrepreneur's Instinct</span>
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              What sets Ajay Sethi apart in the crowded world of sports entrepreneurship is his ability to see
              opportunities where others see challenges. When traditional cricket broadcasting was becoming predictable,
              he envisioned interactive platforms. When retired cricketers were fading from public memory, he created
              stages for them to shine again. When cricket needed fresh narratives, he crafted tournaments that
              celebrated both legacy and innovation.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              His approach to business is deeply rooted in understanding the emotional connection between cricket and
              its fans. Rather than simply creating products or services, Sethi builds experiences. The West Indies
              Champions is not just a cricket team; it's a celebration of Caribbean cricket culture, a platform for
              legends to reconnect with their fans, and a bridge between cricket's glorious past and its exciting
              future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow text-center">
              <TrendingUp className="h-12 w-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Innovation Leader</h3>
              <p className="text-gray-700">
                Pioneered multiple breakthrough technologies in cricket broadcasting and fan engagement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-maroon/10 rounded-2xl p-8 hover-glow text-center">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Global Vision</h3>
              <p className="text-gray-700">
                Expanded cricket's reach across continents, making the sport accessible to millions of new fans.
              </p>
            </div>

            <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow text-center">
              <Heart className="h-12 w-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-maroon mb-4">Passion-Driven</h3>
              <p className="text-gray-700">
                Every venture stems from genuine love for cricket and commitment to honoring the game's legends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business With Purpose */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Business With Purpose</span>
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              For Ajay Sethi, success in business is measured not just by financial returns, but by the impact created
              and the lives touched. His acquisition of the West Indies Champions was driven by a desire to give
              cricket's most charismatic legends a platform to continue inspiring fans worldwide. He recognized that
              players like Chris Gayle, Dwayne Bravo, and Kieron Pollard had more to offer than just memories – they had
              ongoing stories to tell and magic to create.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Under his leadership, the West Indies Champions have become more than a cricket team. They represent a
              movement that celebrates the joy, flair, and cultural richness that Caribbean cricket brings to the world
              stage. Sethi's vision extends beyond winning matches; it's about winning hearts, creating moments of pure
              joy, and ensuring that the spirit of West Indies cricket continues to inspire future generations.
            </p>

            <p className="text-lg leading-relaxed">
              His business philosophy is simple yet profound: create value for everyone involved – players get to extend
              their careers meaningfully, fans get to witness their heroes in action again, and the sport gets fresh
              energy and narratives. This approach has made him not just a successful entrepreneur, but a respected
              figure in the cricket community.
            </p>
          </div>
        </div>
      </section>

      {/* His Mantra */}
      <section className="section-padding bg-gold text-maroon">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="h-16 w-16 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-8">His Mantra</h2>
          <blockquote className="text-xl sm:text-2xl leading-relaxed font-bold mb-8">
            "In cricket, as in business, it's not just about the runs you score or the wickets you take. It's about the
            memories you create, the inspiration you provide, and the legacy you leave behind. The West Indies Champions
            embody this philosophy – we're not just playing cricket, we're creating moments that will be remembered
            forever."
          </blockquote>
          <div className="text-maroon/80 font-semibold text-lg">— Ajay Sethi's Philosophy</div>
        </div>
      </section>

      {/* The Face Behind the Champions */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-gradient">The Face Behind the Champions</span>
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              As the West Indies Champions prepare for the World Championship of Legends 2025, Ajay Sethi stands as the
              driving force behind their ambitions. His vision, leadership, and unwavering commitment to excellence have
              created an environment where legends can thrive, fans can dream, and cricket can continue to evolve.
            </p>

            <p className="text-lg leading-relaxed">
              The journey ahead is filled with promise, excitement, and the potential for creating cricket history. With
              Ajay Sethi at the helm, the West Indies Champions are not just participants in a tournament – they are
              ambassadors of a cricketing philosophy that celebrates skill, entertainment, and the pure joy of the game.
            </p>
          </div>

          <div className="bg-gradient-to-r from-maroon to-gold rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join the Champions Journey</h3>
            <p className="text-lg mb-6">
              Follow Ajay Sethi and the West Indies Champions as they embark on their quest for WCL 2025 glory!
            </p>
            <button className="bg-white text-maroon px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <a href="https://www.instagram.com/wclwestindieschampions" className="block w-full h-full">Connect with Our Owner</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
