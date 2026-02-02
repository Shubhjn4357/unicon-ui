"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Center } from "@react-three/drei"
import * as React from "react"
import { cn } from "../../lib/utils"
// @ts-ignore
import * as THREE from "three"

interface Scene3DProps {
  children?: React.ReactNode
  className?: string
  intensity?: number
}

function FloatingShape() {
  const meshRef = React.useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(t / 4) / 4
    meshRef.current.rotation.y = Math.sin(t / 4) / 4
    meshRef.current.position.y = Math.sin(t / 1.5) / 10
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial 
        color="#fff" 
        roughness={0.1} 
        metalness={0.8}
      />
    </mesh>
  )
}

export function Scene3D({ 
  children, 
  className 
}: Scene3DProps) {
  return (
    <div className={cn("relative h-[400px] w-full", className)}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Center>
          <Float 
            speed={4} 
            rotationIntensity={1} 
            floatIntensity={2}
          >
             {children || <FloatingShape />}
          </Float>
        </Center>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
