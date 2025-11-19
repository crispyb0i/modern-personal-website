"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180])

    return (
        <div ref={ref} className="fixed inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
            {/* Large gradient blobs */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[100px]"
            />
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/5 blur-[100px]"
            />
            <motion.div
                style={{ y: y3 }}
                className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-purple-500/5 blur-[100px]"
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    )
}
