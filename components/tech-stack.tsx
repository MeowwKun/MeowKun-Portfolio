"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  { name: "Python", icon: "python" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Supabase", icon: "supabase" },
  { name: "GSAP", icon: "gsap" },
  { name: "Vercel", icon: "vercel" },
  { name: "Figma", icon: "figma" },
]

function TechIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    python: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <linearGradient id="python-a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5A9FD4"/>
          <stop offset="1" stopColor="#306998"/>
        </linearGradient>
        <linearGradient id="python-b" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFD43B"/>
          <stop offset="1" stopColor="#FFE873"/>
        </linearGradient>
        <path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
        <path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
      </svg>
    ),
    nextjs: (
      <span className="text-2xl font-bold tracking-tight">NEXT<span className="text-xs">.JS</span></span>
    ),
    tailwind: (
      <svg viewBox="0 0 54 33" className="w-10 h-10" fill="currentColor">
        <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/>
      </svg>
    ),
    supabase: (
      <svg viewBox="0 0 109 113" className="w-10 h-10" fill="none">
        <path fill="#3ECF8E" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"/>
        <path fill="url(#supabase-grad)" fillOpacity=".2" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"/>
        <path fill="#3ECF8E" d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072z"/>
        <defs>
          <linearGradient id="supabase-grad" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361"/>
            <stop offset="1" stopColor="#3ECF8E"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    gsap: (
      <span className="text-xl font-bold tracking-tight text-emerald-400">GSAP</span>
    ),
    vercel: (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 76 65" className="w-5 h-5" fill="currentColor">
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
        </svg>
        <span className="text-lg font-semibold">Vercel</span>
      </div>
    ),
    figma: (
      <svg viewBox="0 0 38 57" className="w-8 h-8">
        <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
        <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
        <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
        <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
      </svg>
    ),
  }

  return icons[name] || <span className="text-lg">{name}</span>
}

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const techItemsRef = useRef<(HTMLDivElement | null)[]>([])

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

      // Container animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(containerRef.current, { opacity: 0, y: 30, duration: 0.3 })
        }
      })

      // Tech items animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            techItemsRef.current.filter(Boolean),
            { opacity: 0, scale: 0.8 },
            { 
              opacity: 1, 
              scale: 1, 
              duration: 0.4, 
              stagger: 0.1,
              delay: 0.3,
              ease: "back.out(1.7)" 
            }
          )
        },
        onLeaveBack: () => {
          gsap.to(techItemsRef.current.filter(Boolean), {
            opacity: 0,
            scale: 0.8,
            duration: 0.3
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{ opacity: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest mb-2">MODERN</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wider text-primary">TECH STACK</h3>
        </div>

        <div
          ref={containerRef}
          className="bg-card rounded-xl p-6 md:p-8"
          style={{ opacity: 0 }}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <div
                key={tech.name}
                ref={(el) => { techItemsRef.current[index] = el }}
                className="flex items-center justify-center p-6 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors"
                style={{ opacity: 0 }}
              >
                <TechIcon name={tech.icon} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {technologies.slice(3).map((tech, index) => (
              <div
                key={tech.name}
                ref={(el) => { techItemsRef.current[index + 3] = el }}
                className="flex items-center justify-center p-6 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors"
                style={{ opacity: 0 }}
              >
                <TechIcon name={tech.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
