"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function SocialLinks() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)
  const githubRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)
  const linkedinRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video link
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            videoRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(videoRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })

      // Brand center
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            brandRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(brandRef.current, { opacity: 0, scale: 0.9, duration: 0.3 })
        }
      })

      // Photography link
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            photoRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(photoRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })

      // GitHub link
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            githubRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(githubRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })

      // Art link
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            artRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(artRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })

      // LinkedIn link
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            linkedinRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(linkedinRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Video */}
          <div ref={videoRef} style={{ opacity: 0 }}>
            <Link 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video rounded-lg bg-muted/30 overflow-hidden relative group-hover:bg-muted/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent" />
              </div>
              <p className="mt-2 text-sm tracking-wider">Video</p>
            </Link>
          </div>

          {/* Center Brand - spans 2 rows on desktop */}
          <div
            ref={brandRef}
            className="hidden md:flex items-center justify-center row-span-2"
            style={{ opacity: 0 }}
          >
            <div className="text-center">
              <h3 className="text-5xl font-bold tracking-wider text-muted/30">MEOW</h3>
              <h3 className="text-5xl font-bold tracking-[0.5em] text-primary/30">K U N</h3>
            </div>
          </div>

          {/* Photography */}
          <div ref={photoRef} style={{ opacity: 0 }}>
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video rounded-lg bg-muted/30 overflow-hidden relative group-hover:bg-muted/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
              </div>
              <p className="mt-2 text-sm tracking-wider text-right">Photography</p>
            </Link>
          </div>

          {/* GitHub */}
          <div ref={githubRef} style={{ opacity: 0 }}>
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video rounded-lg bg-muted/30 overflow-hidden relative group-hover:bg-muted/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-transparent" />
              </div>
              <p className="mt-2 text-sm tracking-wider">GitHub</p>
            </Link>
          </div>

          {/* Art */}
          <div ref={artRef} className="md:col-start-2" style={{ opacity: 0 }}>
            <Link 
              href="https://behance.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video rounded-lg bg-muted/30 overflow-hidden relative group-hover:bg-muted/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent" />
              </div>
              <p className="mt-2 text-sm tracking-wider text-center">Art</p>
            </Link>
          </div>

          {/* LinkedIn */}
          <div ref={linkedinRef} style={{ opacity: 0 }}>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video rounded-lg bg-muted/30 overflow-hidden relative group-hover:bg-muted/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
              </div>
              <p className="mt-2 text-sm tracking-wider text-right">LinkedIn</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
