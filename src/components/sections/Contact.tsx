"use client"

import * as React from "react"
import { Section } from "@/components/ui/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export function Contact() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [submitStatus, setSubmitStatus] = React.useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: "" })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                // Show more detailed error message
                const errorMsg = data.details || data.error || "Failed to send message"
                throw new Error(errorMsg)
            }

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon."
            })
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: error instanceof Error ? error.message : "Something went wrong. Please try again."
            })
        } finally {
            setIsSubmitting(false)
        }
    }
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
                                {/* <CardDescription>
                                    Feel free to reach out through any of these channels.
                                </CardDescription> */}
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
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                    <input
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 transition-colors"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 transition-colors"
                                        placeholder="Your message"
                                    />
                                </div>
                                
                                {submitStatus.type && (
                                    <div
                                        className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                                            submitStatus.type === "success"
                                                ? "bg-green-500/10 text-green-600 border border-green-500/20"
                                                : "bg-red-500/10 text-red-600 border border-red-500/20"
                                        }`}
                                    >
                                        {submitStatus.type === "success" ? (
                                            <CheckCircle2 className="h-4 w-4" />
                                        ) : (
                                            <AlertCircle className="h-4 w-4" />
                                        )}
                                        <span>{submitStatus.message}</span>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    )
}
