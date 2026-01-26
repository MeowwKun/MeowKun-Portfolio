"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: "NamZoed",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
    href: "https://example.com/namzoed",
    color: "bg-amber-600",
  },
  {
    name: "EcoVision",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80",
    href: "https://example.com/ecovision",
    color: "bg-emerald-600",
    hasIcon: true,
  },
  {
    name: "AR-Image Tracking",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&q=80",
    href: "https://example.com/ar-tracking",
    color: "bg-slate-700",
    hasIcon: true,
  },
  {
    name: "HandSpeak",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
    href: "https://example.com/handspeak",
    color: "bg-rose-600",
  },
]

function ProjectCard({ 
  project, 
  index,
  cardRef
}: { 
  project: typeof projects[0]
  index: number
  cardRef: (el: HTMLDivElement | null) => void
}) {
  return (
    <div ref={cardRef} style={{ opacity: 0, transform: "translateY(50px)" }}>
      <Link 
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className={`relative aspect-square rounded-lg overflow-hidden ${project.color} transition-transform duration-300 group-hover:scale-105`}>
          {project.hasIcon ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 text-foreground/80">
                {project.name === "EcoVision" ? (
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="4"/>
                    <polygon points="50,30 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="4"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
                    <path d="M20,80 Q50,20 80,80" />
                    <circle cx="80" cy="20" r="8" fill="currentColor" />
                  </svg>
                )}
              </div>
            </div>
          ) : (
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
        <p className="mt-3 text-sm tracking-wider text-center">{project.name}</p>
      </Link>
    </div>
  )
}

export function Works() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const yearRef = useRef<HTMLSpanElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const placeholderRefs = useRef<(HTMLDivElement | null)[]>([])

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
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
          )
          gsap.fromTo(
            yearRef.current,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to([titleRef.current, yearRef.current], {
            opacity: 0,
            duration: 0.3
          })
        }
      })

      // Project cards animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            projectRefs.current.filter(Boolean),
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.6, 
              stagger: 0.1,
              ease: "power2.out" 
            }
          )
        },
        onLeaveBack: () => {
          gsap.to(projectRefs.current.filter(Boolean), {
            opacity: 0,
            y: 50,
            duration: 0.3
          })
        }
      })

      // Placeholder slots animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        end: "top 20%",
        onEnter: () => {
          gsap.fromTo(
            placeholderRefs.current.filter(Boolean),
            { opacity: 0 },
            { 
              opacity: 1, 
              duration: 0.6, 
              stagger: 0.1,
              delay: 0.5,
              ease: "power2.out" 
            }
          )
        },
        onLeaveBack: () => {
          gsap.to(placeholderRefs.current.filter(Boolean), {
            opacity: 0,
            duration: 0.3
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="works" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ opacity: 0 }}
          >
            WORK
          </h2>
          <span
            ref={yearRef}
            className="text-2xl md:text-4xl font-light tracking-wider text-muted-foreground"
            style={{ opacity: 0 }}
          >
            {"25' - 26'"}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.name} 
              project={project} 
              index={index}
              cardRef={(el) => { projectRefs.current[index] = el }}
            />
          ))}
        </div>

        {/* Empty placeholder slots */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="col-span-1" />
          {[1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => { placeholderRefs.current[i - 1] = el }}
              className="aspect-square rounded-lg bg-muted/30"
              style={{ opacity: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
