"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"


interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  websiteUrl: string
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
  websiteUrl,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="flex flex-col h-full">
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-primary font-medium">{company}</p>
            </div>
            <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
              {period}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
            <Button variant="outline" size="sm" asChild className="border border-primary">
              <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Company Website
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

