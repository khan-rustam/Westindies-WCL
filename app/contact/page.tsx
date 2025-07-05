"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react"
import HeroSection from "@/components/ui/hero-section"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contact Us"
        description="Get in touch with the West Indies Champions! Whether you're a fan, media representative, or potential partner, we'd love to hear from you."
      />

      {/* Contact Form and Details */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 hover-glow">
                <h2 className="text-3xl font-bold text-maroon mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Have a question, suggestion, or just want to say hello? Fill out the form below and we'll get back to
                  you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent transition-all duration-300 resize-vertical"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon hover:bg-maroon/90 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-xl p-8 hover-glow">
                  <h2 className="text-3xl font-bold text-maroon mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-maroon/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-maroon" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Media & Press</h3>
                        <p className="text-gray-600">For media inquiries and press releases</p>
                        <a
                          href="mailto:media@wclcricket.com" target="_blank"
                          className="text-maroon hover:text-gold font-medium transition-colors duration-300"
                        >
                          media@wclcricket.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gold/20 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-maroon" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Sponsorship & Brand Tie-Ups</h3>
                        <p className="text-gray-600">Partnership and sponsorship opportunities</p>
                        <a
                          href="mailto:partners@wclcricket.com" target="_blank"
                          className="text-maroon hover:text-gold font-medium transition-colors duration-300"
                        >
                          partners@wclcricket.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-maroon/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-maroon" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                        <p className="text-gray-600">
                          West Indies Cricket Board
                          <br />
                          Antigua Recreation Ground
                          <br />
                          St. John's, Antigua
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-maroon to-gold rounded-2xl shadow-xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                  <p className="text-white/90 mb-6">
                    Stay connected with the West Indies Champions on social media for the latest updates,
                    behind-the-scenes content, and exclusive player interactions!
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://www.facebook.com/share/1CSvupSds9/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="font-medium">Facebook</span>
                    </a>

                    <a
                      href="https://www.instagram.com/wclwestindieschampions" target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="font-medium">Instagram</span>
                    </a>

                    <a
                      href="https://x.com/westindieschamp" target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="font-medium">Twitter</span>
                    </a>

                    <a
                      href="#" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Youtube className="h-6 w-6" />
                      <span className="font-medium">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Find Us</span>
          </h2>

          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl hover-glow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-61.8456!3d17.1274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e6c8c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sAntigua%20Recreation%20Ground!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Visit us at the historic Antigua Recreation Ground, home of Caribbean cricket excellence.
            </p>
            <button className="btn-primary">Get Directions</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover-glow">
              <h3 className="text-xl font-bold text-maroon mb-3">How can I get tickets for WCL 2025 matches?</h3>
              <p className="text-gray-700">
                Ticket information will be announced soon. Follow our social media channels and subscribe to our
                newsletter to be the first to know when tickets go on sale.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover-glow">
              <h3 className="text-xl font-bold text-maroon mb-3">Can I meet the players?</h3>
              <p className="text-gray-700">
                We'll be organizing special fan meet-and-greet sessions during the tournament. Details will be shared
                closer to the tournament dates.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover-glow">
              <h3 className="text-xl font-bold text-maroon mb-3">How can I become a sponsor or partner?</h3>
              <p className="text-gray-700">
                For sponsorship and partnership opportunities, please contact us at partners@wclcricket.com with your
                proposal and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
