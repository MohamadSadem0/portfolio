import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

/**
 * DeskLaptopScene renders an interactive composition of a desk and laptop 3D models.
 * Both models are loaded via useGLTF from the public/models folder and placed within
 * a group that slowly rotates to showcase the assets.  Users can click and drag to
 * rotate the scene thanks to OrbitControls.  Lighting includes an ambient light,
 * directional light and an optional HDR environment for subtle reflections.
 */
function DeskLaptop() {
  // Load the GLB models.  The files live in public/models so they can be fetched
  // relative to the site root.  useGLTF caches requests so repeated renders are cheap.
  // When deploying to GitHub Pages the site is served from a subpath (e.g. /portfolio/).
  // Vite exposes import.meta.env.BASE_URL to generate the correct absolute URL
  // based on the configured `base` option.  Concatenate the model paths to avoid
  // 404 errors on GitHub Pages (see README for details).
  const desk = useGLTF(`${import.meta.env.BASE_URL}models/Desk.glb`);
  const laptop = useGLTF(`${import.meta.env.BASE_URL}models/laptop.glb`);
  const groupRef = useRef<any>(null!);
  useFrame(() => {
    // Apply a slow rotation to the entire group for a dynamic display.
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });
  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Desk model at the origin.  Scale down slightly if needed to fit within the viewport. */}
      <primitive object={desk.scene} scale={[1, 1, 1]} />
      {/* Place the laptop on top of the desk with a slight upward offset.  Adjust scale for proportion. */}
      <primitive object={laptop.scene} position={[0, 0.6, 0]} scale={[0.8, 0.8, 0.8]} />
    </group>
  );
}

// Preload the models ahead of time to avoid a flash of untextured geometry during the first render.
// Use the same BASE_URL-aware paths here as above.
useGLTF.preload(`${import.meta.env.BASE_URL}models/Desk.glb`);
useGLTF.preload(`${import.meta.env.BASE_URL}models/laptop.glb`);

export default function DeskLaptopScene() {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
      <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          {/* Optional environment map for subtle reflections. You can drop a .hdr file in public/hdr and load it here. */}
          {/* <Environment files="/hdr/studio_small_03_1k.hdr" background={false} /> */}
          <DeskLaptop />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}