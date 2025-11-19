import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-border/40 py-12">
            <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} david-sh.in. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    <Link href="https://github.com/crispyb0i" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/david-shin" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
