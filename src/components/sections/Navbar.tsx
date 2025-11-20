"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring } from "framer-motion"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                    <Code2 className="h-6 w-6" />
                    <span>David Shin</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                style={{ scaleX }}
            />

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background backdrop-blur-md border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5" style={{ backgroundColor: 'var(--background)' }}>
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
