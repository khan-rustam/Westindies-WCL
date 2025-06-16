import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-maroon to-gold text-white p-4">
      <div className="text-center space-y-6">
        <h1 className="text-7xl sm:text-9xl font-bold text-white drop-shadow-lg animate-bounce-in">
          404
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-lg sm:text-xl text-white/90 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center bg-gold hover:bg-gold/90 text-maroon px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Go to Homepage
        </Link>
      </div>
    </section>
  )
} 