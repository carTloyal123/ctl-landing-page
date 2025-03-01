"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const Meteor = () => {
  const [meteors, setMeteors] = useState<
    Array<{ id: number; left: number; top: number; size: number; opacity: number }>
  >([])

  useEffect(() => {
    const interval = setInterval(() => {
      setMeteors((prev) => {
        const newMeteors = [...prev]
        if (newMeteors.length < 10) {
          newMeteors.push({
            id: Date.now(),
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.8 + 0.2,
          })
        }
        return newMeteors.slice(-10)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "absolute rounded-full bg-slate-500 rotate-[215deg] animate-meteor",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
          )}
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            width: `${meteor.size}px`,
            height: `${meteor.size * 10}px`,
            opacity: meteor.opacity,
          }}
        />
      ))}
    </>
  )
}

