import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 300

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
        z: (Math.random() - 0.5) * 20,
        speedX: (Math.random() - 0.5) * 0.01,
        speedY: (Math.random() - 0.5) * 0.01,
        speedZ: (Math.random() - 0.5) * 0.01,
        scale: 0.02 + Math.random() * 0.04,
      })
    }
    return temp
  }, [])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(() => {
    if (!meshRef.current) return

    particles.forEach((particle, i) => {
      particle.x += particle.speedX
      particle.y += particle.speedY
      particle.z += particle.speedZ

      if (particle.x > 10) particle.x = -10
      if (particle.x < -10) particle.x = 10
      if (particle.y > 10) particle.y = -10
      if (particle.y < -10) particle.y = 10
      if (particle.z > 10) particle.z = -10
      if (particle.z < -10) particle.z = 10

      dummy.position.set(particle.x, particle.y, particle.z)
      dummy.scale.setScalar(particle.scale)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#b6c8e3" transparent opacity={0.6} />
    </instancedMesh>
  )
}

function ParticleCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 2]}
      frameloop="demand"
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Particles />
    </Canvas>
  )
}

function GradientFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(135deg, #0b1326 0%, #131b2e 50%, #171f33 100%)',
      }}
    />
  )
}

interface ParticleBackgroundProps {
  className?: string
}

export default function ParticleBackground({
  className = '',
}: ParticleBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <GradientFallback />
      <Suspense fallback={null}>
        <ParticleCanvas />
      </Suspense>
    </div>
  )
}
