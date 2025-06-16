"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"

const newsArticles = [
  {
    id: 1,
    title: "Chris Gayle Confirmed as Captain for WCL 2025",
    subtitle: "Universe Boss ready to lead West Indies Champions to glory in England",
    image: "/placeholder.svg?height=250&width=400",
    date: "March 15, 2025",
    readTime: "3 min read",
    category: "Team News",
  },
  {
    id: 2,
    title: "WCL 2025 Fixtures Announced: Five Epic Battles Await",
    subtitle: "West Indies Champions to face cricket's biggest legends across iconic English venues",
    image: "/placeholder.svg?height=250&width=400",
    date: "March 12, 2025",
    readTime: "5 min read",
    category: "Tournament",
  },
  {
    id: 3,
    title: "Dwayne Bravo Joins Champions Squad",
    subtitle: "DJ Bravo brings his all-round expertise and championship experience to the team",
    image: "/placeholder.svg?height=250&width=400",
    date: "March 10, 2025",
    readTime: "4 min read",
    category: "Player News",
  },
  {
    id: 4,
    title: "Training Camp Begins: Champions Gear Up for England",
    subtitle: "Intensive preparation underway as legends fine-tune their skills for WCL 2025",
    image: "/placeholder.svg?height=250&width=400",
    date: "March 8, 2025",
    readTime: "6 min read",
    category: "Training",
  },
  {
    id: 5,
    title: "Ajay Sethi's Vision: Bringing Caribbean Cricket to the World",
    subtitle: "Owner discusses his passion for cricket and plans for the West Indies Champions",
    image: "/placeholder.svg?height=250&width=400",
    date: "March 5, 2025",
    readTime: "8 min read",
    category: "Interview",
  },
  {
    id: 6,
    title: "Kieron Pollard: Ready for One More Championship",
    subtitle: "The explosive all-rounder shares his excitement about returning to competitive cricket",
    image: "/placeholder.svg?height=250&width=400",
    date: "March 3, 2025",
    readTime: "5 min read",
    category: "Player Feature",
  },
  {
    id: 7,
    title: "Fan Zone Experience: What to Expect at WCL 2025",
    subtitle: "Exclusive behind-the-scenes access and interactive experiences planned for supporters",
    image: "/placeholder.svg?height=250&width=400",
    date: "March 1, 2025",
    readTime: "4 min read",
    category: "Fan Experience",
  },
  {
    id: 8,
    title: "Caribbean Cricket Culture: The Champions' Secret Weapon",
    subtitle: "How West Indies' unique approach to cricket gives them an edge in tournaments",
    image: "/placeholder.svg?height=250&width=400",
    date: "February 28, 2025",
    readTime: "7 min read",
    category: "Culture",
  },
  {
    id: 9,
    title: "Sunil Narine's Mystery Spin: Still Bamboozling Batsmen",
    subtitle: "The enigmatic spinner discusses his preparation and role in the Champions squad",
    image: "/placeholder.svg?height=250&width=400",
    date: "February 25, 2025",
    readTime: "6 min read",
    category: "Player Feature",
  },
]

const categories = [
  "All",
  "Team News",
  "Tournament",
  "Player News",
  "Training",
  "Interview",
  "Player Feature",
  "Fan Experience",
  "Culture",
]

export default function NewsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredArticles, setFilteredArticles] = useState(newsArticles)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(newsArticles)
    } else {
      setFilteredArticles(newsArticles.filter((article) => article.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen">
      <HeroSection
        title="News & Articles"
        description="Stay updated with the latest news, player features, and exclusive insights from the West Indies Champions as they prepare for WCL 2025!"
      />

      {/* Category Filter */}
      <section className="bg-white py-8 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-maroon text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => {
              const articleSchema = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": article.title,
                "image": article.image ? `https://www.westindieschampions.com${article.image}` : "https://www.westindieschampions.com/placeholder.svg", // TODO: Adjust base URL and placeholder if needed
                "datePublished": new Date(article.date).toISOString(),
                "dateModified": new Date(article.date).toISOString(), // Assuming dateModified is same as datePublished for now
                "author": {
                  "@type": "Organization", // Or Person if an individual writes the news
                  "name": "West Indies Champions", // TODO: Adjust author name as needed
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "West Indies Champions",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.westindieschampions.com/images/west-indies-champions-logo.png", // TODO: Replace with your actual logo URL
                  },
                },
                "description": article.subtitle,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://www.westindieschampions.com/news/${article.id}`, // TODO: Adjust base URL
                },
              };

              return (
                <article
                  key={article.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                  />
                  <div className="relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-maroon text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.subtitle}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-maroon hover:text-gold font-semibold transition-colors duration-300 group"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found in this category.</p>
              <button onClick={() => setSelectedCategory("All")} className="mt-4 btn-primary">
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-maroon text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest news, exclusive interviews, and behind-the-scenes content delivered straight to your inbox!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold hover:bg-gold/90 text-maroon px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-white/70 mt-4">No spam, just cricket news and updates. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
