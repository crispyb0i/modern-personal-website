"use client"

import { Section } from "@/components/ui/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
    {
        title: "NEOSOCIAL",
        description: "A neobrutalist social media platform where bold design meets powerful features.",
        tags: ["React", "TypeScript", "Vite", "Zustand", "Supabase"],
        demoUrl: "https://neosocial-j4q9.vercel.app/", // or your actual demo URL
        repoUrl: "#",
        image: "https://res.cloudinary.com/dorue74c9/image/upload/v1763698495/fcb5ab2d-1c93-49c3-833d-e9100882b748_roqsbd.png", // we could create a screenshot
    },
    {
        title: "WebOS",
        description: "A browser-based desktop operating system with a full window management system, file explorer, and built-in apps.",
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
        demoUrl: "https://web-os-one-rust.vercel.app/", // or your actual demo URL
        repoUrl: "#",
        image: "https://res.cloudinary.com/dorue74c9/image/upload/v1763587897/5efe389b-9b37-477e-a6e7-f57e3ba8cca2_bnigxt.png", // we could create a screenshot
    },
    {
        title: "Dream Mappr",
        description: "The ultimate AI-powered dream journaling app that helps you track your dreams and gain insights into your subconscious mind.",
        tags: ["Next.js", "Tailwind", "Gemini API", "Replicate API", "Supabase"],
        demoUrl: "https://dreammappr.com/",
        repoUrl: "#",
        image: "https://res.cloudinary.com/dorue74c9/image/upload/v1745272664/upscaledDreamMapprLogo_yb0iva.png",
    },
    // {
    //     title: "Shinflix",
    //     description: "A sleek media discovery platform for finding your next favorite movie or TV show. Search thousands of titles, explore detailed pages, and more!",
    //     tags: ["Next.js", "Tailwind", "TMDB API"],
    //     demoUrl: "https://shinflix.vercel.app",
    //     repoUrl: "#",
    //     image: "https://res.cloudinary.com/dorue74c9/image/upload/v1745272557/Untitled_design_a54ke0.png",
    // },
]

export function Projects() {
    return (
        <Section id="projects">
            <div className="flex flex-col gap-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                    <p className="text-muted-foreground">
                        Here are some of the projects I&apos;ve worked on recently.
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
                                <div className="w-full h-72 bg-muted/30 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
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
                                <CardContent className="flex-1 relative z-10 px-6 pb-6 pt-4">
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
