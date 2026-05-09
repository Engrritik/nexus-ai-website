"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function DataGridParticles({ isIntersecting }: { isIntersecting: boolean }) {
  const ref = useRef<THREE.Points>(null);
  
  // Define grid size based on screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const gridSize = isMobile ? 40 : 70;
  const spacing = 0.6;
  const count = gridSize * gridSize;

  const initialPositions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        pos[i * 3] = (x - gridSize / 2) * spacing;
        pos[i * 3 + 1] = 0; // Y will be animated
        pos[i * 3 + 2] = (z - gridSize / 2) * spacing;
        i++;
      }
    }
    return pos;
  }, [gridSize, spacing, count]);

  const positions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse to -1 to +1
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

    // Target mouse position in world space
    const targetMouseX = mouse.x * 10;
    const targetMouseZ = -mouse.y * 10;

    for (let i = 0; i < count; i++) {
      const x = initialPositions[i * 3];
      const z = initialPositions[i * 3 + 2];
      
      // Clean, deterministic mathematical topology
      // Combination of slow sine waves creates a smooth, breathing data landscape
      const wave1 = Math.sin(x * 0.2 + time * 0.4) * Math.cos(z * 0.2 + time * 0.4) * 1.5;
      const wave2 = Math.sin(x * 0.1 - time * 0.2) * 0.5;
      
      let y = wave1 + wave2;

      // Mouse repulsion physics (Data flows away from cursor)
      const dx = x - targetMouseX;
      const dz = z - targetMouseZ;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < 4) {
        const repulsion = Math.max(0, 4 - dist);
        y -= repulsion * 0.8;
      }
      
      positionsArray[i * 3 + 1] = y;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Very subtle pan
    ref.current.rotation.y = Math.sin(time * 0.05) * 0.1;
    ref.current.rotation.x = Math.PI / 8; // Tilt grid towards camera
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.06}
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
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [0, 5, 12], fov: 60 }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          gl.setClearColor(0x000000, 0);
        }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={["#000000", 5, 20]} />
        <ambientLight intensity={0.5} />
        <DataGridParticles isIntersecting={isIntersecting} />
      </Canvas>
    </div>
  );
}
