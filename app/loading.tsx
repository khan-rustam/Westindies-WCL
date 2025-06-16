import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-maroon to-gold text-white p-4">
      <Loader2 className="h-16 w-16 text-white animate-spin mb-6" />
      <h1 className="text-4xl sm:text-5xl font-bold mb-3">Loading...</h1>
      <p className="text-lg sm:text-xl text-white/90">Please wait while we prepare the content.</p>
    </section>
  )
} 