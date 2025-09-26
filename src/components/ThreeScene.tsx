import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

/**
 * A simple 3D scene rendered with @react-three/fiber.  This component
 * displays a rotating cube inside a canvas with basic lighting.  The
 * OrbitControls allow users to click and drag the scene (zoom is
 * disabled for a cleaner appearance).  You can replace the cube
 * geometry with more complex shapes or imported models if you wish.
 */
function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });
  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96">
      <Canvas camera={{ position: [3, 3, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RotatingBox />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}