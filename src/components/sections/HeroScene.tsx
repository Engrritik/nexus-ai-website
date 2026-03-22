"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function WaveParticles() {
  const ref = useRef<THREE.Points>(null);

  const count = 3000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 5;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const x = positionsArray[i * 3];
      const z = positionsArray[i * 3 + 2];
      // Create a wave effect
      positionsArray[i * 3 + 1] = Math.sin(time + x + z) * 0.5;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Ambient breathing scale
    const scale = 1 + Math.sin(time * 0.5) * 0.05;
    ref.current.scale.set(scale, scale, scale);

    // Smooth response to mouse + slow ambient rotation
    const targetRotationX = mouse.y * 0.1;
    const targetRotationY = time * 0.05 + mouse.x * 0.1;

    ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 2 * delta;
    ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 2 * delta;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4aa"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <fog attach="fog" args={["#050505", 5, 15]} />
        <ambientLight intensity={0.5} />
        <WaveParticles />
      </Canvas>
    </div>
  );
}
