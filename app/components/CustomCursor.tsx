"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      ".interactive-button, .interactive-card, .hover-lift, a, button",
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-300 ${isHovering ? "w-8 h-8" : "w-4 h-4"}`}
        style={{
          left: mousePosition.x - (isHovering ? 16 : 8),
          top: mousePosition.y - (isHovering ? 16 : 8),
          background: isHovering
            ? "radial-gradient(circle, rgba(0, 194, 161, 0.3) 0%, rgba(0, 194, 161, 0.1) 70%, transparent 100%)"
            : "rgba(0, 194, 161, 0.8)",
          borderRadius: "50%",
          filter: isHovering ? "blur(2px)" : "none",
        }}
      />
      <div
        className="fixed pointer-events-none z-50 w-1 h-1 bg-accent rounded-full transition-all duration-100"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      />
    </>
  )
}
