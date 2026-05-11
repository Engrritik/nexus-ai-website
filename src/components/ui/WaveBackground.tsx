"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0x00d4aa) },
  },
  vertexShader: `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      
      float elevation = sin(modelPosition.x * 2.0 + uTime) * 0.2 + 
                        sin(modelPosition.z * 1.5 + uTime * 0.8) * 0.2;
                        
      modelPosition.y += elevation;
      vElevation = elevation;
      
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vElevation;
    varying vec2 vUv;

    void main() {
      float intensity = (vElevation + 0.4) * 0.8;
      vec3 finalColor = mix(vec3(0.02, 0.02, 0.02), uColor, intensity * 0.5);
      
      // Add a subtle grid/wireframe effect manually via UVs or keep it smooth.
      // Let's make it a solid abstract wave that blends into dark
      gl_FragColor = vec4(finalColor, 0.8);
    }
  `
};

function Wave() {
  const mesh = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.5;
    }
    if (mesh.current) {
      mesh.current.rotation.x = -Math.PI * 0.4;
      mesh.current.position.y = -1;
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[WaveShaderMaterial]}
        transparent={true}
        wireframe={true}
      />
    </mesh>
  );
}

export function WaveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]">
      <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
        <fog attach="fog" args={['#050505', 2, 6]} />
        <Wave />
      </Canvas>
    </div>
  );
}
