"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"

const IMAGES_PER_LOAD = 12 // Number of images to load at once

const images = [
  { id: 1, src: "/Gallery/1.JPG", alt: "Image 1", category: "Players" },
  { id: 2, src: "/Gallery/2.JPG", alt: "Image 2", category: "Players" },
  { id: 3, src: "/Gallery/3.JPG", alt: "Image 3", category: "Players" },
  { id: 4, src: "/Gallery/4.JPG", alt: "Image 4", category: "Players" },
  { id: 5, src: "/Gallery/5.JPG", alt: "Image 5", category: "Players" },
  { id: 6, src: "/Gallery/6.JPG", alt: "Image 6", category: "Players" },
  { id: 7, src: "/Gallery/7.JPG", alt: "Image 7", category: "Players" },
  { id: 8, src: "/Gallery/8.JPG", alt: "Image 8", category: "Players" },
  { id: 9, src: "/Gallery/9.JPG", alt: "Image 9", category: "Players" },
  { id: 10, src: "/Gallery/10.JPG", alt: "Image 10", category: "Players" },
  { id: 11, src: "/Gallery/11.png", alt: "Image 11", category: "Players" },
  { id: 12, src: "/Gallery/12.JPG", alt: "Image 12", category: "Players" },
  { id: 13, src: "/Gallery/13.JPG", alt: "Image 13", category: "Players" },
  { id: 14, src: "/Gallery/14.JPG", alt: "Image 14", category: "Players" },
  { id: 15, src: "/Gallery/15.JPG", alt: "Image 15", category: "Players" },
  { id: 16, src: "/Gallery/16.png", alt: "Image 16", category: "Players" },
  { id: 18, src: "/Gallery/18.JPG", alt: "Image 18", category: "Players" },
  { id: 19, src: "/Gallery/19.JPG", alt: "Image 19", category: "Players" },
  { id: 20, src: "/Gallery/20.JPG", alt: "Image 20", category: "Players" },
  { id: 21, src: "/Gallery/21.JPG", alt: "Image 21", category: "Players" },
  { id: 22, src: "/Gallery/22.JPG", alt: "Image 22", category: "Players" },
  { id: 23, src: "/Gallery/23.JPG", alt: "Image 23", category: "Players" },
  { id: 24, src: "/Gallery/24.JPG", alt: "Image 24", category: "Players" },
  { id: 25, src: "/Gallery/25.JPG", alt: "Image 25", category: "Players" },
  { id: 26, src: "/Gallery/26.JPG", alt: "Image 26", category: "Players" },
  { id: 27, src: "/Gallery/27.JPG", alt: "Image 27", category: "Players" },
  { id: 28, src: "/Gallery/28.JPG", alt: "Image 28", category: "Players" },
  { id: 29, src: "/Gallery/29.JPG", alt: "Image 29", category: "Players" },
  { id: 30, src: "/Gallery/30.JPG", alt: "Image 30", category: "Players" },
  { id: 31, src: "/Gallery/31.JPG", alt: "Image 31", category: "Players" },
  { id: 32, src: "/Gallery/32.JPG", alt: "Image 32", category: "Players" },
  { id: 33, src: "/Gallery/33.JPG", alt: "Image 33", category: "Players" },
  { id: 34, src: "/Gallery/34.JPG", alt: "Image 34", category: "Players" },
  { id: 35, src: "/Gallery/35.JPG", alt: "Image 35", category: "Players" },
  { id: 36, src: "/Gallery/36.JPG", alt: "Image 36", category: "Players" },
  { id: 37, src: "/Gallery/37.JPG", alt: "Image 37", category: "Players" },
  { id: 38, src: "/Gallery/38.JPG", alt: "Image 38", category: "Players" },
  { id: 39, src: "/Gallery/39.JPG", alt: "Image 39", category: "Players" },
  { id: 40, src: "/Gallery/40.jpeg", alt: "Image 40", category: "Players" },
  { id: 41, src: "/Gallery/41.jpeg", alt: "Image 41", category: "Players" },
  { id: 42, src: "/Gallery/42.jpeg", alt: "Image 42", category: "Players" },
  { id: 43, src: "/Gallery/43.jpeg", alt: "Image 43", category: "Players" },
  { id: 44, src: "/Gallery/44.jpeg", alt: "Image 44", category: "Players" },
  { id: 45, src: "/Gallery/45.jpeg", alt: "Image 45", category: "Players" },
  { id: 46, src: "/Gallery/46.jpeg", alt: "Image 46", category: "Players" },
  { id: 47, src: "/Gallery/47.jpeg", alt: "Image 47", category: "Players" },
  { id: 48, src: "/Gallery/48.jpeg", alt: "Image 48", category: "Players" },
  { id: 49, src: "/Gallery/49.jpeg", alt: "Image 49", category: "Players" },
  { id: 50, src: "/Gallery/50.jpeg", alt: "Image 50", category: "Players" },
  { id: 51, src: "/Gallery/51.jpeg", alt: "Image 51", category: "Players" },
  { id: 52, src: "/Gallery/52.jpeg", alt: "Image 52", category: "Players" },
  { id: 53, src: "/Gallery/53.jpeg", alt: "Image 53", category: "Players" },
  { id: 54, src: "/Gallery/54.jpeg", alt: "Image 54", category: "Players" },
]

const videos = [
  { id: 1, thumbnail: "/placeholder.svg?height=300&width=500", title: "Chris Gayle's Best Sixes", duration: "3:45" },
  { id: 2, thumbnail: "/placeholder.svg?height=300&width=500", title: "Team Training Highlights", duration: "5:20" },
  {
    id: 3,
    thumbnail: "/placeholder.svg?height=300&width=500",
    title: "Dwayne Bravo's Magic Moments",
    duration: "4:15",
  },
  { id: 4, thumbnail: "/placeholder.svg?height=300&width=500", title: "Behind the Scenes", duration: "6:30" },
  { id: 5, thumbnail: "/placeholder.svg?height=300&width=500", title: "Player Interviews", duration: "8:45" },
  { id: 6, thumbnail: "/placeholder.svg?height=300&width=500", title: "Championship Memories", duration: "7:20" },
]

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("images")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [displayedImagesCount, setDisplayedImagesCount] = useState(IMAGES_PER_LOAD)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = images.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(images[newIndex].id)
  }

  const handleLoadMore = () => {
    setDisplayedImagesCount((prevCount) => Math.min(prevCount + IMAGES_PER_LOAD, images.length))
  }

  const selectedImageData = images.find((img) => img.id === selectedImage)

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Gallery"
        description="Relive the magic, passion, and legendary moments of the West Indies Champions. From explosive batting to spectacular catches, witness cricket at its finest!"
      />

      {/* Tab Navigation */}
      <section className="bg-white py-8 sticky top-16 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("images")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === "images" ? "bg-maroon text-white shadow-lg" : "text-gray-700 hover:text-maroon"
                  }`}
              >
                Players – Images
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === "videos" ? "bg-maroon text-white shadow-lg" : "text-gray-700 hover:text-maroon"
                  }`}
              >
                Players – Videos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      {activeTab === "images" && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.slice(0, displayedImagesCount).map((image, index) => (
                <div
                  key={image.id}
                  className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-103 shadow-xl rounded-2xl overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(image.id)}
                >
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageObject",
                        "contentUrl": `https://www.westindieschampions.com${image.src}`, // TODO: Replace with actual image URL base
                        "name": image.alt, // Using alt text as name
                        "description": `A photo from the West Indies Champions gallery: ${image.alt}.`, // TODO: Make more descriptive if possible
                        "uploadDate": "2024-01-01T00:00:00Z", // TODO: Replace with actual upload date
                        "author": {
                          "@type": "Organization",
                          "name": "West Indies Champions",
                        },
                        "publisher": {
                          "@type": "Organization",
                          "name": "West Indies Champions",
                          "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.westindieschampions.com/images/west-indies-champions-logo.png", // TODO: Replace with your actual logo URL
                          },
                        },
                      }),
                    }}
                  />
                  <div className="relative overflow-hidden rounded-2xl shadow-lg card-hover">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 object-top"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/30 backdrop-blur-sm rounded-full p-3 transform group-hover:scale-110">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {displayedImagesCount < images.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="bg-maroon hover:bg-gold text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Load More Images
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Videos Gallery */}
      {activeTab === "videos" && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer transition-all duration-500 transform hover:scale-103  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": video.title,
                        "description": `Video highlights from the West Indies Champions: ${video.title}.`, // TODO: Make more descriptive if possible
                        "uploadDate": "2024-01-01T00:00:00Z", // TODO: Replace with actual upload date
                        "thumbnailUrl": `https://www.westindieschampions.com${video.thumbnail}`, // TODO: Replace with actual thumbnail URL base
                        "contentUrl": `https://www.westindieschampions.com/videos/${video.id}.mp4`, // TODO: Replace with actual video URL
                        "embedUrl": `https://www.youtube.com/embed/YOUR_VIDEO_ID`, // TODO: Replace with actual embed URL (e.g., YouTube embed)
                        "interactionCount": "0", // TODO: Replace with actual view count or remove if not applicable
                        "duration": `PT${video.duration.split(':')[0]}M${video.duration.split(':')[1]}S`, // Convert HH:MM to ISO 8601 duration format (e.g., PT3M45S)
                        "publisher": {
                          "@type": "Organization",
                          "name": "West Indies Champions",
                          "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.westindieschampions.com/images/west-indies-champions-logo.png", // TODO: Replace with your actual logo URL
                          },
                        },
                      }),
                    }}
                  />
                  <div className="relative group">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">Click to watch highlights and exclusive content</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors duration-300"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-300"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-300"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <Image
              src={selectedImageData.src || "/placeholder.svg"}
              alt={selectedImageData.alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-maroon text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want More Exclusive Content?</h2>
          <p className="text-xl text-white/90 mb-8">
            Follow us on social media for behind-the-scenes content, player interviews, and live updates from training
            sessions!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold hover:bg-gold/90 text-maroon px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <a href="https://www.instagram.com/wclwestindieschampions" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Follow on Instagram</a>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <a href="https://x.com/westindieschamp" target="_blank" rel="noopener noreferrer" className="block w-full h-full">Follow on X</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
