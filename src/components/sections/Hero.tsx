"use client"

import { Button } from "@/components/ui/Button"
import { Magnetic } from "@/components/ui/Magnetic"
import { FloatingIcons } from "@/components/ui/FloatingIcons"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
            <div className="container relative z-10 grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6 text-center md:text-left"
                >
                    <div className="space-y-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-medium text-primary/80"
                        >
                            Hello, I'm David
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-bold tracking-tight sm:text-6xl"
                        >
                            Frontend Developer & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                UI/UX Enthusiast
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mx-auto max-w-[600px] text-muted-foreground md:mx-0 md:text-xl"
                        >
                            I build accessible, pixel-perfect, and performant web experiences.
                            Passionate about React, Next.js, and modern web technologies.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start"
                    >
                        <Magnetic>
                            <Button asChild size="lg" className="gap-2">
                                <Link href="#projects">
                                    View My Work <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </Magnetic>
                        <Magnetic>
                            <Button asChild variant="outline" size="lg" className="gap-2">
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                        </Magnetic>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4 justify-center md:justify-start pt-4"
                    >
                        <Magnetic strength={30}>
                            <Link href="https://github.com/crispyb0i" target="_blank" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors block">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Magnetic>
                        <Magnetic strength={30}>
                            <Link href="https://linkedin.com/in/david-shin" target="_blank" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors block">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Magnetic>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative mx-auto aspect-square w-full max-w-[400px] lg:max-w-[500px]"
                >
                    {/* Floating Icons Simulation */}
                    <div className="absolute z-20 pointer-events-none" style={{ top: '-25%', left: '-25%', width: '150%', height: '150%' }}>
                        <FloatingIcons />
                    </div>

                    {/* Abstract shape or placeholder for image */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl animate-pulse" />
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-muted/30 backdrop-blur-sm flex items-center justify-center z-10">
                        <Image
                            src="https://res.cloudinary.com/dorue74c9/image/upload/v1745253670/Friendly_Portrait_of_a_Young_Man_kvbj0u.png"
                            alt="David - Frontend Developer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-1/4 left-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-0 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        </section>
    )
}
