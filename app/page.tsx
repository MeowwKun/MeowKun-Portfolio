import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Works } from "@/components/works"
import { TechStack } from "@/components/tech-stack"
import { SocialLinks } from "@/components/social-links"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Works />
      <TechStack />
      <SocialLinks />
      <ContactForm />
      <Footer />
    </main>
  )
}
