"use client"

import { Section } from "@/components/ui/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
    {
        title: "Social Game",
        description: "The ultimate low poly social game that allows you to connect with friends and explore the world.",
        tags: ["Vite", "Tailwind", "Three.js", "Socket.io", "Firebase"],
        demoUrl: "#",
        repoUrl: "#",
        image: "https://res.cloudinary.com/dorue74c9/image/upload/v1745272664/upscaledDreamMapprLogo_yb0iva.png",
    },
    {
        title: "Dream Mappr",
        description: "The ultimate AI-powered dream journaling app that helps you track your dreams and gain insights into your subconscious mind.",
        tags: ["Next.js", "Tailwind", "Gemini API", "Replicate API", "Supabase"],
        demoUrl: "https://dreammappr.com/",
        repoUrl: "#",
        image: "https://res.cloudinary.com/dorue74c9/image/upload/v1745272664/upscaledDreamMapprLogo_yb0iva.png",
    },
    {
        title: "Shinflix",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        tags: ["Next.js", "Tailwind", "TMDB API"],
        demoUrl: "https://shinflix.vercel.app",
        repoUrl: "https://github.com/crispyb0i/shinflix",
        image: "https://res.cloudinary.com/dorue74c9/image/upload/v1745272557/Untitled_design_a54ke0.png",
    },
]

export function Projects() {
    return (
        <Section id="projects">
            <div className="flex flex-col gap-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                    <p className="text-muted-foreground">
                        Here are some of the projects I've worked on recently.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="group flex flex-col h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Project Image */}
                                <div className="w-full h-48 bg-muted/30 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <CardHeader className="relative z-10">
                                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary/50 border border-border/50 text-secondary-foreground group-hover:bg-blue-500/10 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors duration-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2 relative z-10">
                                    <Button asChild variant="outline" size="sm" className="w-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-950/30 dark:hover:text-blue-400 dark:hover:border-blue-800 transition-all duration-300">
                                        <Link href={project.demoUrl} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
