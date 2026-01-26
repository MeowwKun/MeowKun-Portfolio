"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const footerLinks = {
  column1: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
  ],
  column2: [
    { name: "Work", href: "#works" },
    { name: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const copyrightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 90%",
        end: "top 50%",
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(contentRef.current, { opacity: 0, y: 20, duration: 0.3 })
        }
      })

      // Copyright animation
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 80%",
        end: "top 50%",
        onEnter: () => {
          gsap.fromTo(
            copyrightRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" }
          )
        },
        onLeaveBack: () => {
          gsap.to(copyrightRef.current, { opacity: 0, duration: 0.3 })
        }
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer className="py-12 px-6 border-t border-border" ref={footerRef}>
      <div className="max-w-7xl mx-auto">
        <div
          ref={contentRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start"
          style={{ opacity: 0 }}
        >
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold tracking-wider">MEOW</h3>
            <h3 className="text-2xl font-bold tracking-[0.3em] text-primary">K U N</h3>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-2">
            {footerLinks.column1.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Links Column 2 */}
          <div className="space-y-2">
            {footerLinks.column2.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-right md:text-left">
            <p className="text-sm text-muted-foreground">+975-17313524</p>
            <a 
              href="mailto:sujal75.n@gmail.com"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              sujal75.n@gmail.com
            </a>
          </div>
        </div>

        <div
          ref={copyrightRef}
          className="mt-12 pt-8 border-t border-border/50 text-center"
          style={{ opacity: 0 }}
        >
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} MeowKun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
