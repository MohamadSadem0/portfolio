import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

/**
 * ModelsShowcase displays a collection of abstract 3D primitives to demonstrate
 * creative exploration with built‑in geometries.  Multiple shapes are arranged
 * within a rotating group to provide visual interest without relying on
 * external model files.  The colours complement the site palette.
 */
function Models() {
  const group = useRef<any>(null!);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
    }
  });
  return (
    <group ref={group}>
      {/* Cube representing structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      {/* Sphere symbolising adaptability */}
      <mesh position={[2.5, 0.6, -1.5]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>
      {/* Cone expressing direction */}
      <mesh position={[-2.5, -0.8, 1.2]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#fb923c" />
      </mesh>
      {/* Torus knot representing complexity */}
      <mesh position={[1.8, -1.2, 2.3]}> 
        <torusKnotGeometry args={[0.7, 0.2, 120, 16]} />
        <meshStandardMaterial color="#fef08a" />
      </mesh>
    </group>
  );
}

export default function ModelsShowcase() {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
      <Canvas camera={{ position: [5, 2.5, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 6, 6]} intensity={0.8} />
        <Models />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}