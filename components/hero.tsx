"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const rolesRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const imageTextRef = useRef<HTMLParagraphElement>(null)
  const imageSubtextRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations on load
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
      )

      gsap.fromTo(
        rightContentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
      )

      gsap.fromTo(
        rolesRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: "power2.out" }
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.8, ease: "power2.out" }
      )

      gsap.fromTo(
        imageTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.2, ease: "power2.out" }
      )

      gsap.fromTo(
        imageSubtextRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 1.4, ease: "power2.out" }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={sectionRef} className="min-h-screen pt-20 px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div ref={leftContentRef} style={{ opacity: 0 }}>
            <p className="text-lg mb-1">
              a <span className="text-accent line-through decoration-accent">seriously</span> good
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Creative Technologist
            </h2>
          </div>

          <div ref={rightContentRef} className="text-right" style={{ opacity: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider">MEOW</h1>
            <h1 className="text-4xl md:text-6xl font-bold tracking-[0.5em] text-primary">K U N</h1>
          </div>
        </div>

        {/* Roles */}
        <div
          ref={rolesRef}
          className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-base tracking-widest mb-12"
          style={{ opacity: 0 }}
        >
          <span>Artist</span>
          <span className="text-primary">*</span>
          <span>Cinematographer</span>
          <span className="text-primary">*</span>
          <span>Designer</span>
        </div>

        {/* Hero Image */}
        <div
          ref={imageRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden bg-muted"
          style={{ opacity: 0 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          <div className="absolute top-8 left-8 max-w-xs">
            <p
              ref={imageTextRef}
              className="text-xl md:text-2xl font-medium leading-relaxed"
              style={{ opacity: 0 }}
            >
              Experiments in art,<br />
              film and AI
            </p>
          </div>

          <p
            ref={imageSubtextRef}
            className="absolute bottom-8 right-8 text-sm tracking-widest text-muted-foreground"
            style={{ opacity: 0 }}
          >
            from pixels to stories.
          </p>
        </div>
      </div>
    </section>
  )
}
