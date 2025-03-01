import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Github, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceCard from "@/components/experience-card"
import ContactForm from "@/components/contact-form"
import SectionHeading from "@/components/section-heading"
import { projects } from "./projects-data"
import { skillsData } from "./skills-data"
import { ThemeToggle } from "@/components/theme-toggle"
import { Meteors } from "@/components/ui/meteors"
import { Particles } from "@/components/ui/particles"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="font-bold">Carson Loyal</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80 z-10" />
          <div className="absolute inset-0">
            <Particles className="absolute inset-0" />
          </div>
          <div className="container relative z-20">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <Badge className="px-3 py-1 text-sm" variant="secondary">
                  Software Engineer
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Hi, I'm <span className="text-primary">Carson Loyal</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Software Engineer specializing in autonomous systems, GNSS technology, and simulation platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <Link href="#projects">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20 p-2">
                  <Avatar className="h-full w-full">
                    <AvatarImage src="/main_profile.png?height=300&width=300" alt="Carson Loyal" />
                    <AvatarFallback>@CL</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-16 md:py-24 bg-muted/50 overflow-hidden">
          <Meteors />
          <div className="container relative z-10">
            <SectionHeading title="About Me" subtitle="Get to know me better" />
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center mt-12">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/main_cropped_summary.png?height=600&width=600"
                  alt="About Me"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Software Engineer & Autonomy Specialist</h3>
                <p className="text-muted-foreground">
                  Driven by a desire to make a positive impact on the world, I am a software engineer seeking
                  opportunities to advance new technologies that benefit humanity. Open to exploring various software
                  engineering fields, I am committed to continuous learning and pushing myself to contribute
                  meaningfully to teams.
                </p>
                <p className="text-muted-foreground">
                  I am particularly interested in roles as an Autonomy Engineer, building modern simulation platforms
                  and working with cutting-edge technology to exceed customer expectations. My background combines
                  mechanical engineering with software development for autonomous systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="px-3 py-1">
                    C++
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Python
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    ROS/ROS2
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    GNSS
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Simulation
                  </Badge>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <User className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
          <div className="container">
            <SectionHeading title="Featured Projects" subtitle="Check out some of my recent work" />
            <Tabs defaultValue="all" className="mt-12">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="embedded">Embedded</TabsTrigger>
                <TabsTrigger value="robotics">Robotics</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    demoUrl={project.demoUrl}
                    repoUrl={project.repoUrl}
                  />
                ))}
              </TabsContent>
              <TabsContent value="embedded" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter(project => project.category === "Embedded")
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      demoUrl={project.demoUrl}
                      repoUrl={project.repoUrl}
                    />
                  ))}
              </TabsContent>
              <TabsContent value="robotics" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter(project => project.category === "Robotics")
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      demoUrl={project.demoUrl}
                      repoUrl={project.repoUrl}
                    />
                  ))}
              </TabsContent>
            </Tabs>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="relative py-16 md:py-24 bg-muted/50 overflow-hidden">
          <Meteors />
          <div className="container relative z-10">
            <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.technical.map((skill, index) => (
                      <SkillBadge key={index} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Software</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.software.map((skill, index) => (
                      <SkillBadge key={index} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.other.map((skill, index) => (
                      <SkillBadge key={index} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16 md:py-24">
          <div className="container">
            <SectionHeading title="Work Experience" subtitle="My professional journey" />
            <div className="mt-12 space-y-8">
              <ExperienceCard
                title="Software Engineer"
                company="Trimble Inc."
                period="May 2024 - Present"
                description="Embedded software engineer working on custom Linux based systems for next generation GNSS receivers. Developed custom software for GNSS receivers in C++ and Python using Yocto build system. Designed and maintained manufacturing API for programming boards and testing."
                skills={["C++", "Python", "Linux", "Yocto", "GNSS", "API Development"]}
                websiteUrl="https://www.trimble.com/"
              />
              <ExperienceCard
                title="Simulation Engineer"
                company="Trimble Autonomy"
                period="Sep 2022 - May 2024"
                description="Simulation engineer working with multi robot coordination and ROS2. Developed and integrated new robotic platforms into the simulation including skid steer and articulated vehicles. Collaborated with cross-functional teams to enhance simulation accuracy."
                skills={["ROS2", "Simulation", "Multi-Robot Systems", "Python", "C++"]}
                websiteUrl="https://autonomy.trimble.com/"
              />
              <ExperienceCard
                title="Simulation Engineer"
                company="Autonoma Inc."
                period="Jan 2022 - Sep 2022"
                description="Lead simulation engineer working on autonomous vehicle simulation. Developed a realistic vehicle simulation environment in Unity 3D for testing autonomous algorithms, integrating sensor models and environmental factors."
                skills={["Unity 3D", "C#", "Simulation", "Autonomous Systems", "Sensor Models"]}
                websiteUrl="https://www.autonoma.ai/"
              />
              <ExperienceCard
                title="Graduate Research Assistant"
                company="Auburn University"
                period="Aug 2021 - Sep 2022"
                description="Full time research engineer at the Auburn University GPS and Vehicle Dynamics Laboratory. Fields of study include GPS measurement level data manipulation and algorithm development. Custom vehicle simulation development for autonomous vehicles with full sensor suite integration."
                skills={["GNSS", "Algorithm Development", "Simulation", "Data Analysis", "Autonomous Systems"]}
                websiteUrl="https://www.auburn.edu/"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <User className="mr-2 h-4 w-4" />
                  View Full Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24 bg-muted/50 overflow-hidden">
          <Meteors />
          <div className="container relative z-10">
            <SectionHeading title="Education" subtitle="Academic background" />
            <div className="mt-12 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Master of Science, Mechanical Engineering</h3>
                      <p className="text-primary font-medium">Auburn University</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      Aug 2021 - Dec 2023
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Completed Master of Science in Mechanical engineering with a focus on autonomous systems and GNSS
                    technology. Research focused on GNSS data and RTK algorithms. GPA: 4.0
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge key="autonomous-systems" variant="secondary" className="text-xs">
                      Autonomous Systems
                    </Badge>
                    <Badge key="gnss" variant="secondary" className="text-xs">
                      GNSS Technology
                    </Badge>
                    <Badge key="research" variant="secondary" className="text-xs">
                      Research
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Bachelor's of Mechanical Engineering</h3>
                      <p className="text-primary font-medium">Auburn University</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      2017 - 2021
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Completed Bachelor's degree in Mechanical Engineering with a perfect GPA of 4.0.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <SectionHeading title="Get In Touch" subtitle="Let's work together" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <a href="mailto:carsontloyal@gmail.com" className="hover:text-primary transition-colors">
                        carsontloyal@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 mr-3 text-primary" />
                      <a
                        href="https://linkedin.com/in/carson-loyal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        linkedin.com/in/carson-loyal
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Github className="h-5 w-5 mr-3 text-primary" />
                      <a
                        href="https://github.com/carTloyal123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        github.com/carTloyal123
                      </a>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-medium mb-2">Follow Me</h4>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                          </svg>
                          <span className="sr-only">Instagram</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                          </svg>
                          <span className="sr-only">Dribbble</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()}</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Carson Loyal. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

