import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import Model from "./model";
import { Suspense } from "react";
import Placeholder from "./placeholder";
import { Hamburger } from "./hamburger";
import Fox from "./fox";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.05}
      />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
      </mesh>

      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        {/* <Model path="./models/hamburger.glb" scale={0.35} /> */}
        <Hamburger scale={0.35} />
      </Suspense>
      <Fox scale={0.02} position={[-2.5, 0, 2.5]} />
    </>
  );
}
