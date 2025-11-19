"use client"

import { Section } from "@/components/ui/Section"
import { Card, CardContent } from "@/components/ui/Card"
import { CodeWindow } from "@/components/ui/CodeWindow"

export function About() {
    return (
        <Section id="about" className="relative overflow-hidden bg-secondary/20">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="flex flex-col gap-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div className="relative group w-full">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                        <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
                            <img
                                src="https://res.cloudinary.com/dorue74c9/image/upload/v1745268882/IMG_20180811_111853_stgnop.jpg"
                                alt="Portrait of me"
                                className="object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Right Column: Bio & Details */}
                    <div className="space-y-8 w-full">
                        <div className="w-full overflow-hidden">
                            <CodeWindow className="w-full min-h-[300px] md:min-h-[400px]" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
