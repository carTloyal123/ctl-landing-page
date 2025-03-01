"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
}

export default function ProjectCard({ title, description, image, tags, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        <div className="relative overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" asChild>
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="flex-1 p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" />
              Source Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

