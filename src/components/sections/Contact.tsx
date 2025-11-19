"use client"

import { Section } from "@/components/ui/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Mail, MapPin, Phone } from "lucide-react"

// I need to create Input and Textarea components first, or just inline them for now.
// I'll create simple versions here to avoid more files for now, or I can create them properly.
// Let's create them properly in the next step. For now I will comment them out or use standard HTML.
// Actually, I'll just use standard HTML inputs with tailwind classes for simplicity in this file, 
// or I can create the components. Let's create the components in a separate tool call to be clean.
// But to save steps, I will implement the form using standard HTML elements styled with Tailwind.

export function Contact() {
    return (
        <Section id="contact" className="relative">
            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-t from-blue-500/5 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="flex flex-col gap-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>
                                    Feel free to reach out through any of these channels.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">dvdshn@proton.me</span>
                                </div>
                                {/* <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">+1 (555) 123-4567</span>
                                </div> */}
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-full bg-purple-500/10 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">Redwood City, CA</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="bg-background/60 backdrop-blur-sm border-border/50">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                    <input
                                        id="name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 transition-colors"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 transition-colors"
                                        placeholder="Your message"
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    )
}
