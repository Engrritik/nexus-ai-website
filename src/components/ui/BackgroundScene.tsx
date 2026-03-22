"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export type ParticleVariant = "wave" | "rise" | "fall" | "swirl";

interface BackgroundParticlesProps {
  color: string;
  variant: ParticleVariant;
  count: number;
}

function Particles({ color, variant, count }: BackgroundParticlesProps) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  const initialPositions = useMemo(() => new Float32Array(positions), [positions]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const startX = initialPositions[i * 3];
      const startY = initialPositions[i * 3 + 1];
      const startZ = initialPositions[i * 3 + 2];
      
      let nextY = positionsArray[i * 3 + 1];
      let nextX = positionsArray[i * 3];
      let nextZ = positionsArray[i * 3 + 2];

      switch (variant) {
        case "wave":
          nextY = Math.sin(time + startX + startZ) * 0.5;
          break;
        case "rise":
          nextY = nextY + delta * 1.5;
          if (nextY > 5) nextY = -5;
          break;
        case "fall":
          nextY = nextY - delta * 1.5;
          if (nextY < -5) nextY = 5;
          break;
        case "swirl":
          const speedFactor = (i % 2 === 0 ? 1 : -1) * 0.2;
          const angle = time * speedFactor + (startY * 0.5);
          const radius = Math.sqrt(startX * startX + startZ * startZ);
          if (radius > 0) {
            nextX = Math.cos(angle) * (radius * 0.8);
            nextZ = Math.sin(angle) * (radius * 0.8);
          }
          break;
      }

      positionsArray[i * 3] = nextX;
      positionsArray[i * 3 + 1] = nextY;
      positionsArray[i * 3 + 2] = nextZ;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    if (variant === "wave") ref.current.rotation.y = time * 0.05;
    if (variant === "swirl") ref.current.rotation.y = time * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function BackgroundScene({ 
  color = "#00d4aa", 
  variant = "wave",
  count = 1000
}: { 
  color?: string; 
  variant?: ParticleVariant;
  count?: number;
}) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} frameloop="always">
        <fog attach="fog" args={["#050505", 5, 20]} />
        <ambientLight intensity={0.5} />
        <Particles color={color} variant={variant} count={count} />
      </Canvas>
    </div>
  );
}
