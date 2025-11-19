"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseDown = () => setIsHovering(true)
        const handleMouseUp = () => setIsHovering(false)

        // Add hover listeners to interactive elements
        const handleLinkHover = () => setIsHovering(true)
        const handleLinkLeave = () => setIsHovering(false)

        const addListeners = () => {
            const elements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
            elements.forEach(el => {
                el.addEventListener('mouseenter', handleLinkHover)
                el.addEventListener('mouseleave', handleLinkLeave)
            })
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)

        // Initial check
        addListeners()

        // Re-check on mutation (simplified)
        const observer = new MutationObserver(addListeners)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
            observer.disconnect()
        }
    }, [cursorX, cursorY, isVisible])

    // Hide on touch devices
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return null

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference",
                !isVisible && "opacity-0"
            )}
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? "var(--primary)" : "transparent",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-sm" />
        </motion.div>
    )
}
