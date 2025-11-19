"use client"

export function NoiseOverlay() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[9998] opacity-[0.03] mix-blend-overlay">
            <svg className="w-full h-full">
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    )
}
