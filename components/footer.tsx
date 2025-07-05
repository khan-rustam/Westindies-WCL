import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Trophy } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-gold" />
              <span className="font-bold text-xl">West Indies Champions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Official home of the West Indies Champions for World Championship of Legends 2025. Where cricket legends
              return and the Caribbean spirit takes over England!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1CSvupSds9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/wclwestindieschampions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/westindieschamp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/points-table" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  Points Table
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  News
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-gold transition-colors duration-300">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Media: media@wclcricket.com</li>
              <li>Partners: partners@wclcricket.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 West Indies Champions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
