"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface IonCloudProps extends React.HTMLAttributes<HTMLDivElement> {
  icons: React.ReactNode[]
  radius?: number
  speed?: number
}

/**
 * Ion Cloud - 3D rotating sphere with icons
 */
export const IonCloud = React.forwardRef<HTMLDivElement, IonCloudProps>(
  ({ icons, radius = 200, speed = 20, className, ...props }, ref) => {
    const [[mouseX, mouseY], setMouse] = React.useState([0, 0])

    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      setMouse([x * 30, y * 30])
    }

    // Calculate 3D positions on sphere
    const positions = React.useMemo(() => {
      return icons.map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / icons.length)
        const theta = Math.sqrt(icons.length * Math.PI) * phi

        return {
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi),
        }
      })
    }, [icons.length, radius])

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center justify-center perspective-1000", className)}
        style={{
          width: radius * 2.5,
          height: radius * 2.5,
          perspective: "1000px",
        }}
        onMouseMove={handleMouseMove}
        {...props}
      >
        <motion.div
          className="relative preserve-3d"
          style={{
            width: radius * 2,
            height: radius * 2,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: mouseY,
            rotateZ: mouseX / 2,
          }}
          transition={{
            rotateY: {
              duration: speed,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            rotateX: {
              duration: 0.3,
            },
            rotateZ: {
              duration: 0.3,
            },
          }}
        >
          {positions.map((pos, i) => {
            const scale = (pos.z + radius) / (radius * 2)
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 flex items-center justify-center"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
                  opacity: 0.5 + scale * 0.5,
                  fontSize: `${16 + scale * 8}px`,
                }}
              >
                {icons[i]}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    )
  }
)

IonCloud.displayName = "IonCloud"
