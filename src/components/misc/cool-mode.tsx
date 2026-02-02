"use client"

import { motion } from "framer-motion"
import * as React from "react"

export interface CoolModeProps {
  children: React.ReactElement
}

export const CoolMode: React.FC<CoolModeProps> = ({ children }) => {
  const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number }>>([])

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setParticles((prev) => [...prev, { id, x, y }])

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id))
    }, 1000)
  }

  return (
    <div className="relative inline-block" onClick={handleClick}>
      {children}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none absolute text-2xl"
          style={{ left: particle.x, top: particle.y }}
          initial={{ opacity: 1, scale: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 1.5,
            y: -50,
            x: (Math.random() - 0.5) * 100,
          }}
          transition={{ duration: 1 }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}
