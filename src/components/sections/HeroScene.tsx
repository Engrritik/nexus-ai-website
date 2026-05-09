"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function WaveParticles({ isIntersecting }: { isIntersecting: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const count = typeof window !== "undefined" && window.innerWidth < 768 ? 1000 : 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Golden ratio spiral / galaxy formation
      const r = Math.pow(Math.random(), 1.5) * 20;
      const theta = 2.39996 * i; // Golden angle
      const spiral = theta + r * 0.2;
      const x = Math.cos(spiral) * r + (Math.random() - 0.5) * 1.5;
      const y = (Math.random() - 0.5) * 2 * Math.exp(-r * 0.1); // Flatten out at edges
      const z = Math.sin(spiral) * r + (Math.random() - 0.5) * 1.5;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
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

  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.geometry.dispose();
        Array.isArray(ref.current.material) 
          ? ref.current.material.forEach(m => m.dispose()) 
          : ref.current.material.dispose();
      }
    };
  }, []);

  useFrame((state, delta) => {
    if (!ref.current || !isIntersecting) return;
    const time = state.clock.getElapsedTime();
    const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const x = positionsArray[i * 3];
      const z = positionsArray[i * 3 + 2];
      
      // Complex interactive wave
      const dist = Math.sqrt(x * x + z * z);
      const wave = Math.sin(time * 0.5 + dist * 0.5) * 0.5;
      const mouseWave = Math.sin(time + x * 0.5 + z * 0.5) * mouse.x * 2;
      
      positionsArray[i * 3 + 1] = wave + mouseWave;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Smooth dynamic rotation and scale
    const targetRotationX = mouse.y * 0.3;
    const targetRotationY = time * 0.1 + mouse.x * 0.3;

    ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 2 * delta;
    ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 2 * delta;
    
    // Breathing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.03;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 60 }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          gl.setClearColor(0x000000, 0);
        }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={["#000000", 5, 15]} />
        <ambientLight intensity={0.5} />
        <WaveParticles isIntersecting={isIntersecting} />
      </Canvas>
    </div>
  );
}
