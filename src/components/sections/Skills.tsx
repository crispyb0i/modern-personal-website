"use client"

import { Section } from "@/components/ui/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { motion } from "framer-motion"

const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "HTML5/CSS3"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Supabase", "Firebase", "MongoDB", "REST APIs"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD", "Figma"],
    },
]

export function Skills() {
    return (
        <Section id="skills" className="bg-secondary/30">
            <div className="flex flex-col gap-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Technologies</h2>
                    <p className="text-muted-foreground">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow bg-background/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-center text-lg">{skillGroup.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {skillGroup.items.map((item) => (
                                            <motion.span
                                                key={item}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-3 py-1 text-sm font-medium rounded-full bg-secondary/50 border border-border/50 cursor-default hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
