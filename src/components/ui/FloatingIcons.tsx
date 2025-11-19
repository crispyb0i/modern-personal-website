"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { Code2, Palette, Zap, Terminal, Cpu, Globe } from "lucide-react"
import { motion } from "framer-motion"

interface Node extends d3.SimulationNodeDatum {
    id: string
    r: number
    icon: React.ElementType
    color: string
}

const icons = [
    { id: "code", icon: Code2, color: "text-blue-500" },
    { id: "design", icon: Palette, color: "text-cyan-500" },
    { id: "zap", icon: Zap, color: "text-yellow-500" },
    { id: "terminal", icon: Terminal, color: "text-green-500" },
    { id: "cpu", icon: Cpu, color: "text-purple-500" },
    { id: "globe", icon: Globe, color: "text-indigo-500" },
]

export function FloatingIcons() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [nodes, setNodes] = useState<Node[]>([])
    const mouseRef = useRef<{ x: number; y: number } | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        let simulation: d3.Simulation<Node, undefined> | null = null
        let currentNodes: Node[] = []

        const initSimulation = (width: number, height: number) => {
            if (simulation) simulation.stop()

            // If nodes don't exist yet, create them. Otherwise keep existing ones but bound them.
            if (currentNodes.length === 0) {
                currentNodes = icons.map((item) => ({
                    id: item.id,
                    r: 40,
                    // Spread them out more initially to prevent explosion
                    x: width / 2 + (Math.random() - 0.5) * width * 0.6,
                    y: height / 2 + (Math.random() - 0.5) * height * 0.6,
                    icon: item.icon,
                    color: item.color,
                }))
            }

            simulation = d3.forceSimulation(currentNodes)
                .alphaTarget(1) // Keep simulation running
                .velocityDecay(0.1) // Some friction to stabilize the orbit
                .force("collide", d3.forceCollide().radius((d: any) => d.r + 10).iterations(2))
                // Keep them at a specific radius (orbit distance) - increased spread
                .force("radial", d3.forceRadial(Math.min(width, height) * 0.45, width / 2, height / 2).strength(0.8)) // Increased strength to return to orbit faster
                // Add tangential force for rotation
                .force("orbit", () => {
                    currentNodes.forEach(node => {
                        const dx = node.x! - width / 2
                        const dy = node.y! - height / 2
                        const distance = Math.sqrt(dx * dx + dy * dy) || 1

                        // Calculate tangential vector (perpendicular to radius)
                        const tx = -dy / distance
                        const ty = dx / distance

                        // Apply force along tangent - significantly slowed down
                        const speed = 0.01
                        node.vx! += tx * speed
                        node.vy! += ty * speed
                    })
                })
                // Custom force to keep nodes within bounds
                .force("bounds", () => {
                    currentNodes.forEach(node => {
                        const r = node.r + 10
                        // Stronger bounding force to prevent flying off
                        if (node.x! < r) { node.vx! += 0.5; }
                        if (node.x! > width - r) { node.vx! -= 0.5; }
                        if (node.y! < r) { node.vy! += 0.5; }
                        if (node.y! > height - r) { node.vy! -= 0.5; }
                    })
                })
                // Mouse collision force
                .force("mouse-collision", () => {
                    if (!mouseRef.current) return
                    const mouseX = mouseRef.current.x
                    const mouseY = mouseRef.current.y

                    currentNodes.forEach(node => {
                        const dx = node.x! - mouseX
                        const dy = node.y! - mouseY
                        const distance = Math.sqrt(dx * dx + dy * dy)
                        const collisionRadius = node.r + 20 // Node radius + cursor buffer

                        if (distance < collisionRadius) {
                            // Calculate repulsion direction
                            const angle = Math.atan2(dy, dx)
                            const force = 2.0 // Strong impulse

                            // Apply immediate velocity change
                            node.vx! += Math.cos(angle) * force
                            node.vy! += Math.sin(angle) * force
                        }
                    })
                })
                .on("tick", () => {
                    setNodes([...currentNodes])
                })
        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect
                if (width > 0 && height > 0) {
                    initSimulation(width, height)
                }
            }
        })

        resizeObserver.observe(containerRef.current)

        // Add mouse interaction
        const handleMouseMove = (event: MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            mouseRef.current = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            }
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            if (simulation) simulation.stop()
            resizeObserver.disconnect()
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map((node) => {
                const Icon = node.icon
                return (
                    <motion.div
                        key={node.id}
                        className="absolute flex items-center justify-center bg-background/80 backdrop-blur-md rounded-full shadow-lg border border-border/50"
                        style={{
                            width: node.r * 2,
                            height: node.r * 2,
                            x: node.x! - node.r,
                            y: node.y! - node.r,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon className={`w-8 h-8 ${node.color}`} />
                    </motion.div>
                )
            })}
        </div>
    )
}
