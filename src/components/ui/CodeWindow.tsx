"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { RotateCcw } from "lucide-react"

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
    const [restartKey, setRestartKey] = useState(0)

    const startAnimation = () => {
        setDisplayedCode("")
        setIsTyping(true)
        setRestartKey(prev => prev + 1)
    }

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
    }, [restartKey])

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
        <div className={cn("rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl font-mono text-xs sm:text-sm", className)}>
            {/* Window Header */}
            <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#252526] border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-gray-400 truncate">developer.ts</div>
                </div>
                <button
                    onClick={startAnimation}
                    className="flex items-center gap-1.5 px-2 py-1 text-[10px] sm:text-xs text-gray-400 hover:text-gray-200 hover:bg-white/5 rounded transition-colors"
                    title="Restart animation"
                >
                    <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">Restart</span>
                </button>
            </div>

            {/* Code Content */}
            <div className="p-3 sm:p-4 overflow-x-auto">
                <pre className="leading-relaxed whitespace-pre-wrap break-words">
                    <code>
                        {highlightCode(displayedCode)}
                        {isTyping && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-1.5 sm:w-2 h-3 sm:h-4 ml-1 align-middle bg-blue-400"
                            />
                        )}
                    </code>
                </pre>
            </div>
        </div>
    )
}
