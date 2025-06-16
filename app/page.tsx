import Hero from "@/components/home/hero"
import WCLSection from "@/components/home/wcl-section"
import Season2Section from "@/components/home/season2-section"
import BackWithBang from "@/components/home/back-with-bang"
import WhyNotMiss from "@/components/home/why-not-miss"
import BeThereSection from "@/components/home/be-there-section"

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "West Indies Champions",
    "url": "https://www.westindieschampions.com", // TODO: Replace with your actual website URL
    "logo": "https://www.westindieschampions.com/images/west-indies-champions-logo.png", // TODO: Replace with your actual logo URL
    "sameAs": [
      "https://www.facebook.com/westindieschampions", // TODO: Replace with your actual Facebook URL
      "https://twitter.com/westindieschamp", // TODO: Replace with your actual Twitter URL
      "https://www.instagram.com/westindieschampions", // TODO: Replace with your actual Instagram URL
      "https://www.youtube.com/westindieschampions" // TODO: Replace with your actual YouTube URL
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-1212", // TODO: Replace with your actual contact number if applicable
      "contactType": "customer service"
    }
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <WCLSection />
      <Season2Section />
      <BackWithBang />
      <WhyNotMiss />
      <BeThereSection />
    </div>
  )
}
