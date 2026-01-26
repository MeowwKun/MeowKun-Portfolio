"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(titleRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })

      // Form animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(formRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-2xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{ opacity: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">{"Have a project in mind? Let's create something amazing together."}</p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          style={{ opacity: 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={6}
              required
              className="bg-card border-border focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || isSubmitted}
            className="w-full md:w-auto px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : isSubmitted ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
