"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"

const newsArticles = [
  {
    id: 1,
    title: "EaseMyTrip World Championship of Legends Takes the Next Step of Returning Kieron Pollard and Dwayne Bravo to West Indies Cricket",
    subtitle: "Former International Players Kieron Pollard and Dwayne Bravo to Be Part of West Indies Champions in The Rise of T20 Cricket Through EaseMyTrip WCL",
    image: "https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202504/67ee7aa8478dd-easemytrip-world-championship-of-legends-takes-the-next-step-of-returning-kieron-pollard-and-dwayne-031010630-16x9.jpg?size=1600:900",
    link: "https://thesportstak.com/cricket/story/easemytrip-world-championship-of-legends-takes-the-next-step-of-returning-kieron-pollard-and-dwayne-bravo-to-west-indies-cricket-3168983-2025-04-04",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Team News",
  },
  {
    id: 2,
    title: "Dwayne Bravo, Kieron Pollard join West Indies Champions in upcoming WCL",
    subtitle: "The World Championship of Legends Season 2 is on a marquee journey featuring former prominent international players in the era of Legends Cricket. Adding to the lineup, including cricketing greats who will take the field again, Dwayne Bravo and Kieron Pollard will now rejoin professional T20 Cricket through West Indies Champions.",
    image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250404083442.jpg",
    link: "https://www.aninews.in/news/sports/cricket/dwayne-bravo-kieron-pollard-join-west-indies-champions-in-upcoming-wcl20250404140534/",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Player News",
  },
  {
    id: 3,
    title: "World Championship Of Legends 2: Kieron Pollard, Dwayne Bravo To Play For West Indies Champions",
    subtitle: "The Season 2 (WCL) is on a marquee journey, featuring former international greats in the era of Legends Cricket. Adding to this star-studded lineup, Dwayne Bravo and Kieron Pollard are set to make a grand return to professional T20 cricket through West Indies Champions.",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1Ch8bC.img?w=640&h=400&m=6&x=66&y=187&s=108&d=108",
    link: "https://www.msn.com/en-in/sports/cricket/dwayne-bravo-kieron-pollard-return-to-professional-cricket-with-world-championship-of-legends/ar-AA1ChlcR?ocid=BingNewsSerp",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Player News",
  },
  {
    id: 4,
    title: "Kieron Pollard and Dwayne Bravo joined West Indies Champions in the WCL",
    subtitle: "The World Championship of Legends Season 2 is on the marquee journey of featuring former prominent international players in the era of Legends Cricket. Adding to the lineup including cricketing greats to take the field again, Dwayne Bravo and Kieron pollard now will rejoin professional T20 Cricket through West Indies Champions.",
    image: "https://gulftimesint.com/wp-content/uploads/2025/04/wcl.jpg",
    link: "https://gulftimesint.com/kieron-pollard-and-dwayne-bravo-joined-west-indies-champions-in-the-wcl/",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Player News",
  },
  {
    id: 5,
    title: "Dwayne Bravo And Kieron Pollard To Play For West Indies Champions In World Championship Of Legends Season 2",
    subtitle: "During his international career from 2004 to 2021, Dwayne Bravo, a legend of T20 cricket who is currently in his late forties, was a superb all-rounder with remarkable death bowling abilities.",
    image: "https://images.news18.com/ibnlive/uploads/2025/04/Kieron-Pollard-and-DJ-Bravo-to-play-for-West-Indies-Champions-2025-04-dfeb807e8f768bc4487d6f434722463a-16x9.jpg?impolicy=website&width=640&height=360",
    link: "https://www.news18.com/cricket/dwayne-bravo-and-kieron-pollard-to-play-for-west-indies-champions-in-world-championship-of-legends-season-2-9287079.html",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Player News",
  },
  {
    id: 6,
    title: "Chris Gayle to lead West Indies Champions in World Championship of Legends 2024",
    subtitle: "Chris Gayle recently made his appearance in New York during the T20 World Cup 2024 match between India and Pakistan. The former cricketer was seen wearing a white blazer having India's tri-colours and Pakistan's green colour on each sleeve. Later, Gayle also asked the legends from both teams to sign an autograph on his blazer",
    image: "https://images.mid-day.com/images/images/2024/jun/gayle-red_d_d.webp",
    link: "https://www.mid-day.com/sports/cricket/article/chris-gayle-to-lead-west-indies-champions-in-world-championship-of-legends-2024-23353715",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Team News",
  },
  {
    id: 7,
    title: "Gayle, Sammy to play for West Indies Champions in World Championship of Legends",
    subtitle: "Ajay Sethi, Chairman of Dubai-based Channel 2 Group Corporation has officially assumed ownership of the West Indies Champions",
    image: "https://imgengine.khaleejtimes.com/khaleejtimes/import/images/dV9svLkokY0zVz6hCjxyCRYE0MU.png?width=1200&format=auto",
    link: "https://www.khaleejtimes.com/sports/cricket/gayle-sammy-to-play-for-west-indies-champions-in-world-championship-of-legends",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Team News",
  },
  {
    id: 8,
    title: "Chris Gayle to lead West Indies Champions in World Championship of Legends 2024",
    subtitle: "The West Indies Squad Comprises Impressive Lineup of Dwayne Smith, Samuel Badree And Daren Sammy",
    image: "https://img.republicworld.com/rimages/754829cc-b749-41d5-8e84-7dee15e75e12-171636827813416_9.webp?w=1280&h=720&q=75&format=webp",
    link: "https://www.republicworld.com/sports/cricket/chris-gayle-to-lead-west-indies-champions-in-world-championship-of-legends-2024/",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Team News",
  },
  {
    id: 9,
    title: "Ajay Sethi Takes Charge Of West Indies Champions, Gayle To Lead The Team In World Championship Of Legends",
    subtitle: "The World Championship of Legends has officially announced the inclusion of a powerful roster from the West Indies, with the legendary Chris Gayle leading the team in the upcoming cricket league.",
    image: "https://images.onearabia.me/webp/img/2024/06/gayle-leads-west-indies-in-cricket-legends-1718192692244-600x338.jpg",
    link: "https://www.onearabia.me/cricket/ajay-sethi-takes-ownership-of-west-indies-champions-011-043101.html",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Team News",
  },
  {
    id: 10,
    title: "World Championship of Legends to Bring Back the 'Classic Bowl Out' Format In its Inaugural Season",
    subtitle: "The World Championship of Legends (WCL) is set to elevate its status in the cricketing world introducing a nostalgic twist.",
    image: "https://img.republicworld.com/all_images/team3-1719256521631-16_9.webp?w=1280&h=720&q=75&format=webp",
    link: "https://www.msn.com/en-in/sports/cricket/world-championship-of-legends-to-bring-back-the-classic-bowl-out-format-in-its-inaugural-season/ar-BB1oOhbE",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Tournament",
  },
  {
    id: 11,
    title: "World Championship of Legends to bring back 'Classic Bowl-Out' format in its inaugural season",
    subtitle: "The World Championship of Legends (WCL) is set to elevate its status in the cricketing world by introducing a nostalgic twist.",
    image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240625114839.jpg",
    link: "https://aninews.in/news/sports/cricket/world-championship-of-legends-to-bring-back-classic-bowl-out-format-in-its-inaugural-season20240625171910/",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Tournament",
  },
  {
    id: 12,
    title: "World Championship of Legends to bring back 'Classic Bowl-Out' format in its inaugural season",
    subtitle: "The decision to adopt the 'bowl-out' method for resolving tied matches harks back to the early days of T20 cricket, providing a nostalgic and thrilling element for both players and spectators.",
    image: "https://www.hindustantimes.com/ht-img/img/2024/04/16/550x309/Cricket_1713260878026_1713260990583.jpg",
    link: "https://www.hindustantimes.com/cricket/world-championship-of-legends-to-bring-back-classic-bowl-out-format-in-its-inaugural-season-101719316650893.html",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Tournament",
  },
  {
    id: 13,
    title: "Sports News | World Championship of Legends to Bring Back 'Classic Bowl-Out' Format in Its Inaugural Season",
    subtitle: "The decision to adopt the 'bowl-out' method for resolving tied matches harks back to the early days of T20 cricket, providing a nostalgic and thrilling element for both players and spectators.",
    image: "https://st1.latestly.com/wp-content/uploads/2024/06/ANI-20240625114839-380x214.jpg",
    link: "https://www.latestly.com/agency-news/sports-news-world-championship-of-legends-to-bring-back-classic-bowl-out-format-in-its-inaugural-season-6063939.html",
    date: "June 21, 2025",
    readTime: "3 min read",
    category: "Tournament",
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
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
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
                <Link
                  key={article.id}
                  href={article.link || `/news/${article.id}`}
                  target={article.link ? "_blank" : undefined}
                  rel={article.link ? "noopener noreferrer" : undefined}
                  className={`block bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <article>
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
                      </div>
                      <span className="inline-flex items-center text-maroon hover:text-gold font-semibold transition-colors duration-300 group cursor-pointer">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </article>
                </Link>
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
