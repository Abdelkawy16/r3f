"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./experience";
import * as THREE from "three";
// import { OrbitControls } from "@react-three/drei";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function MeshComponent() {
  return (
    <>
      <Canvas
        // dpr={[1, 2]} default
        gl={{
          antialias: true,
          toneMapping: THREE.CineonToneMapping,
          // outputEncoding: THREE.LinearEncoding,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}
      >
        {/* <OrbitControls /> */}
        <Experience />
      </Canvas>
    </>
  );
}
