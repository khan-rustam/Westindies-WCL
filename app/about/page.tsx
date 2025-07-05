"use client"

import { useEffect, useState } from "react"
import { Zap, Globe, Heart, Award, Quote } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"

const features = [
  {
    icon: Zap,
    title: "Flair",
    description:
      "The unmistakable Caribbean style that makes every shot, every celebration, and every moment pure entertainment",
  },
  {
    icon: Globe,
    title: "Culture",
    description:
      "Rich cricket heritage that spans generations, bringing together diverse islands under one passionate banner",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Unbridled love for the game that transcends boundaries and connects hearts across the cricket world",
  },
  {
    icon: Award,
    title: "Legacy",
    description:
      "Decades of cricket excellence, world championships, and legendary moments that inspire future generations",
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen ">
      <HeroSection
        title="About Us – West Indies Champions"
        description="We are more than a cricket team. We are the embodiment of Caribbean spirit, the celebration of cricket legends, and the bridge between cricket's glorious past and exciting future."
      />

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0 is-visible" : "opacity-0 translate-y-10"}`}
          >
            <div className="prose prose-lg max-w-none text-gray-900 bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl leading-relaxed mb-8 border-l-4 border-maroon/20 pl-4 py-1 text-gray-900">
                The <strong>West Indies Champions</strong> represent everything that makes Caribbean cricket special – the explosive
                batting, the rhythmic bowling, the athletic fielding, and most importantly, the pure joy of playing the
                game. We are a team built on the foundation of cricket legends who have entertained millions and
                inspired generations of cricketers around the world.
              </p>

              <p className="text-lg leading-relaxed mb-8 border-l-4 border-gold/20 pl-4 py-1 text-gray-900">
                Our journey in the World Championship of Legends is not just about competing; it's about celebrating the
                rich heritage of West Indies cricket. From the calypso cricket of the 1970s and 80s to the T20 dominance
                of the 2010s, we carry forward a legacy that spans decades of cricket excellence. Every player in our
                squad has contributed to this legacy, and together, we continue to write new chapters.
              </p>

              <p className="text-lg leading-relaxed mb-8 border-l-4 border-maroon/20 pl-4 py-1 text-gray-900">
                What sets us apart is our approach to the game. Cricket, for us, is not just about runs and wickets –
                it's about entertainment, culture, and bringing people together. When we step onto the field, we bring
                the carnival atmosphere of the Caribbean, the infectious energy of our islands, and the unwavering
                belief that cricket should be fun, exciting, and memorable.
              </p>

              <p className="text-lg leading-relaxed mb-8 border-l-4 border-gold/20 pl-4 py-1 text-gray-900">
                The West Indies Champions are proud ambassadors of a cricketing philosophy that values skill,
                entertainment, and sportsmanship in equal measure. We play with passion, compete with honor, and
                celebrate with the entire cricket community. Our success is measured not just by trophies won, but by
                the smiles we bring to faces, the memories we create, and the inspiration we provide to young cricketers
                dreaming of their own legendary moments.
              </p>

              <p className="text-lg leading-relaxed border-l-4 border-maroon/20 pl-4 py-1 text-gray-900">
                As we prepare for the World Championship of Legends 2025, we carry with us the hopes and dreams of
                cricket fans across the Caribbean and around the world. We are ready to show that legends never fade –
                they simply find new stages to shine on. The West Indies Champions are here to remind the world why
                Caribbean cricket holds such a special place in the hearts of cricket lovers everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">What Defines Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`bg-white rounded-2xl p-8 shadow-lg card-hover text-center transition-all duration-500 transform hover:scale-103 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className="bg-gradient-to-r from-maroon to-gold p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <Icon className="h-10 w-10 text-white transition-colors duration-300 group-hover:text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-maroon mb-4 transition-colors duration-300 group-hover:text-gold">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-maroon text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-8">Mission WCL 2025</h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <Quote className="h-12 w-12 text-gold mx-auto mb-6" />
              <blockquote className="text-xl sm:text-2xl leading-relaxed italic">
                "We're not here just to compete — we're here to entertain, inspire, and win. Because when West Indies
                legends come together, it's more than a match — It's a cultural cricket carnival!"
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-gold mb-3">Entertain</h3>
                <p className="text-white/90">
                  Bring the joy and excitement of Caribbean cricket to every match, ensuring fans experience pure
                  entertainment.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-gold mb-3">Inspire</h3>
                <p className="text-white/90">
                  Show young cricketers that legends are made through passion, dedication, and never giving up on your
                  dreams.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-gold mb-3">Win</h3>
                <p className="text-white/90">
                  Compete at the highest level and bring home the championship that our fans and cricket heritage
                  deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Our Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow transition-all duration-300 transform hover:scale-103 group">
                <h3 className="text-2xl font-bold text-maroon mb-4 transition-colors duration-300 group-hover:text-gold">Excellence in Entertainment</h3>
                <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  We believe cricket should be a spectacle that captivates audiences. Every shot we play, every
                  celebration we make, and every moment we create is designed to entertain and inspire.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-maroon/10 rounded-2xl p-8 hover-glow transition-all duration-300 transform hover:scale-103 group">
                <h3 className="text-2xl font-bold text-maroon mb-4 transition-colors duration-300 group-hover:text-gold">Respect for the Game</h3>
                <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  Cricket has given us everything, and we honor the game by playing with integrity, respecting our
                  opponents, and upholding the spirit of cricket in everything we do.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-2xl p-8 hover-glow transition-all duration-300 transform hover:scale-103 group">
                <h3 className="text-2xl font-bold text-maroon mb-4 transition-colors duration-300 group-hover:text-gold">Unity in Diversity</h3>
                <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  The Caribbean is made up of many islands, cultures, and backgrounds, but cricket unites us all. We
                  celebrate this diversity as our greatest strength.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-maroon/10 rounded-2xl p-8 hover-glow transition-all duration-300 transform hover:scale-103 group">
                <h3 className="text-2xl font-bold text-maroon mb-4 transition-colors duration-300 group-hover:text-gold">Inspiring Future Generations</h3>
                <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  Every young cricketer watching us play is a potential future legend. We carry the responsibility of
                  showing them that dreams can come true with passion and perseverance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gold text-maroon">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Champions Journey</h2>
          <p className="text-xl mb-8">
            Be part of cricket history as we embark on our quest for WCL 2025 glory. Follow our journey, support our
            legends, and experience the magic of Caribbean cricket!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-maroon hover:bg-maroon/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <a href="https://x.com/westindieschamp" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Follow Our Journey</a>
            </button>
            <button className="border-2 border-maroon text-maroon hover:bg-maroon hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Get Match Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
