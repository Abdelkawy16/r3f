"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./experience";
import { OrbitControls } from "@react-three/drei";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function MeshComponent() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Experience />
      </Canvas>
    </>
  );
}
