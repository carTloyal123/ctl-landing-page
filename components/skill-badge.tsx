"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { useState } from "react"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Badge
        variant="outline"
        className="px-3 py-1 cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        {name}
      </Badge>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 top-full left-0 mt-1 bg-popover text-popover-foreground p-2 rounded-md shadow-md w-32"
        >
          <div className="text-xs mb-1 flex justify-between">
            <span>Proficiency</span>
            <span>{level}%</span>
          </div>
          <Progress value={level} className="h-1.5" />
        </motion.div>
      )}
    </motion.div>
  )
}

