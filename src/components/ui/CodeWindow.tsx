"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const codeString = `const profile = {
  name: "David Shin",
  title: "Front-End Engineer",
  
  bio: \`
    Hey there! I'm a results-driven Front-End Engineer
    with over 4 years of experience crafting
    high-performing web apps.

    I love building user-centric experiences using
    React, Next.js, and TypeScript. Lately, I've been
    diving deep into AI-integrated applications
    (LLMs/RAG) and scalable cloud infrastructure.
    
    My goal is always to make things faster and
    more engaging for the user.
  \`,

  hobbies: [
    "🧙‍♂️ Writing code like a wizard casting spells", 
    "💪 Working Out", 
    "🔬 Playing mad scientist in the kitchen"
  ]
};`

export function CodeWindow({ className }: { className?: string }) {
    const [displayedCode, setDisplayedCode] = useState("")
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        let currentIndex = 0
        const intervalId = setInterval(() => {
            if (currentIndex <= codeString.length) {
                setDisplayedCode(codeString.slice(0, currentIndex))
                currentIndex++
            } else {
                setIsTyping(false)
                clearInterval(intervalId)
            }
        }, 30) // Typing speed

        return () => clearInterval(intervalId)
    }, [])

    // Simple syntax highlighting helper
    const highlightCode = (code: string) => {
        return code.split(/(\s+)/).map((part, index) => {
            if (part.match(/^(interface|const|string|number|boolean|true|false)$/)) {
                return <span key={index} className="text-purple-400">{part}</span>
            }
            if (part.match(/^(".*")$/)) {
                return <span key={index} className="text-green-400">{part}</span>
            }
            if (part.match(/^[A-Z][a-zA-Z]*$/)) {
                return <span key={index} className="text-yellow-400">{part}</span>
            }
            if (part.match(/^\d+$/)) {
                return <span key={index} className="text-orange-400">{part}</span>
            }
            if (part.match(/^(\/\/.*)$/)) {
                return <span key={index} className="text-gray-500">{part}</span>
            }
            return <span key={index} className="text-gray-200">{part}</span>
        })
    }

    return (
        <div className={cn("rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl font-mono text-sm", className)}>
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="ml-4 text-xs text-gray-400">developer.ts</div>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto">
                <pre className="leading-relaxed">
                    <code>
                        {highlightCode(displayedCode)}
                        {isTyping && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-4 ml-1 align-middle bg-blue-400"
                            />
                        )}
                    </code>
                </pre>
            </div>
        </div>
    )
}
