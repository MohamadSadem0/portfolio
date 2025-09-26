import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

/**
 * CreativeScene renders an abstract 3D composition using built‑in geometries
 * from three.js.  The group of shapes slowly rotates to provide a dynamic
 * focal point without relying on external 3D assets.  Shapes are coloured
 * to complement the site’s palette and convey a sense of creativity and
 * technical depth.
 */
function FloatingShapes() {
  // Ref to the group of shapes.  We use `any` type here to avoid
  // importing Three.js types when compiling with TypeScript.
  const group = useRef<any>(null!);
  // Animate the group rotation on every frame for continuous motion
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.4;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });
  return (
    <group ref={group}>
      {/* Main torus knot representing complex problem solving */}
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.35, 128, 16]} />
        <meshStandardMaterial color="#6366f1" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Secondary sphere emphasising clarity and focus */}
      <mesh position={[2.2, 1.5, -2]}> 
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#a855f7" />
      </mesh>
      {/* Box to symbolise structure and architecture */}
      <mesh position={[-2.2, -1.3, 1.5]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color="#f472b6" />
      </mesh>
    </group>
  );
}

export default function CreativeScene() {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
      <Canvas camera={{ position: [4, 2.5, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <FloatingShapes />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}