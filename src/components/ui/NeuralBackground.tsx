"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralGrid() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, scales } = useMemo(() => {
    const size = 30;
    const spacing = 1.8;
    const pos = [];
    const scl = [];
    
    for (let x = -size; x <= size; x += spacing) {
      for (let y = -size; y <= size; y += spacing) {
        pos.push(x, y, -5);
        scl.push(Math.random());
      }
    }
    return { 
      positions: new Float32Array(pos),
      scales: new Float32Array(scl)
    };
  }, []);

  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
        color: { value: new THREE.Color("#00d4aa") },
        time: { value: 0 }
    },
    vertexShader: `
      attribute float scale;
      varying float vAlpha;
      uniform float time;
      void main() {
        // Pulse at intersections mapped by spatial freq
        vAlpha = (sin(time * 0.5 + position.x * 0.2 + position.y * 0.2) + 1.0) * 0.5 * 0.7;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = (scale * 6.0 + 2.0) * (20.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying float vAlpha;
      void main() {
        vec2 xy = gl_PointCoord.xy - vec2(0.5);
        float ll = length(xy);
        if(ll > 0.5) discard;
        float intensity = pow(1.0 - (ll * 2.0), 2.0);
        gl_FragColor = vec4(color, vAlpha * intensity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }), []);

  useFrame((state) => {
    material.uniforms.time.value = state.clock.getElapsedTime();
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-scale" args={[scales, 1]} />
      </bufferGeometry>
      <primitive object={material} attach="material" />
    </points>
  );
}

function GridLines() {
  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({ 
    color: 0x00d4aa, 
    transparent: true, 
    opacity: 0.05 
  }), []);
  
  const geometry = useMemo(() => {
    const points = [];
    const size = 30;
    const spacing = 1.8;
    for (let x = -size; x <= size; x += spacing) {
      points.push(new THREE.Vector3(x, -size, -5.1));
      points.push(new THREE.Vector3(x, size, -5.1));
    }
    for (let y = -size; y <= size; y += spacing) {
      points.push(new THREE.Vector3(-size, y, -5.1));
      points.push(new THREE.Vector3(size, y, -5.1));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return <lineSegments geometry={geometry} material={lineMaterial} />;
}

export function NeuralBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none neural-bg">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]} className="hidden md:block">
        <fog attach="fog" args={["#000000", 5, 20]} />
        <NeuralGrid />
        <GridLines />
      </Canvas>
      {/* Mobile background fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001a14] to-[#000d1a] md:hidden"></div>
    </div>
  );
}
