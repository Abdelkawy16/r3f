"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./experience";

export default function MeshComponent() {
  return (
    <>
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [4, 2, 8], fov: 35 }}
      >
        <Experience />
      </Canvas>
    </>
  );
}
