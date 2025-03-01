"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

export const Particles = ({
  className = "",
  quantity = 50,
  staticity = 50,
  ease = 50,
}: { className?: string; quantity?: number; staticity?: number; ease?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const displayWidth = canvas.clientWidth * dpr
    const displayHeight = canvas.clientHeight * dpr
    canvas.width = displayWidth
    canvas.height = displayHeight

    const particlesArray: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []

    const createParticles = () => {
      for (let i = 0; i < quantity; i++) {
        particlesArray.push({
          x: Math.random() * displayWidth,
          y: Math.random() * displayHeight,
          size: Math.random() * 2 + 1,
          speedX: ((Math.random() - 0.5) * ease) / 10,
          speedY: ((Math.random() - 0.5) * ease) / 10,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight)

      const particleColor = theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"

      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x > displayWidth) p.x = 0
        if (p.x < 0) p.x = displayWidth
        if (p.y > displayHeight) p.y = 0
        if (p.y < 0) p.y = displayHeight

        for (let j = i; j < particlesArray.length; j++) {
          const p2 = particlesArray[j]
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)
          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = particleColor
            ctx.lineWidth = 0.2
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        if (Math.random() < staticity / 1000) {
          p.speedX = ((Math.random() - 0.5) * ease) / 10
          p.speedY = ((Math.random() - 0.5) * ease) / 10
        }
      }
      requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    const handleResize = () => {
      const displayWidth = canvas.clientWidth * dpr
      const displayHeight = canvas.clientHeight * dpr
      canvas.width = displayWidth
      canvas.height = displayHeight
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [quantity, staticity, ease, theme])

  return <canvas ref={canvasRef} className={className} />
}

