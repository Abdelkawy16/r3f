import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text3D,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const cubeRef = useRef<any>();
  const sphereRef = useRef<any>();

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />

      <ambientLight intensity={1.5} />

      <group>
        <mesh position-x={2} scale={1.5} castShadow ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls
          object={cubeRef}
          mode="translate" // scale, rotate
        />

        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          // axisColors={[xColor, yColor, zColor]}
          scale={100}
          fixed={true}
        >
          <mesh position-x={-2} castShadow ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
              position={[1, 1, 0]}
              wrapperClass="label"
              center
              distanceFactor={6}
              occlude={[sphereRef, cubeRef]}
            >
              that is a shere
            </Html>
          </mesh>
        </PivotControls>
      </group>

      <mesh rotation-x={-Math.PI / 2} position-y={-1} castShadow receiveShadow>
        <planeGeometry args={[20, 20, 8, 8]} />
        {/* <meshStandardMaterial args={[{ color: "greenyellow", side: THREE.DoubleSide }]} /> */}
        <MeshReflectorMaterial blur={[1000, 1000]} mixBlur={1} resolution={512} color={'greenyellow'} mirror={0.6} />
      </mesh>
      <Float speed={5} floatIntensity={2}>
        <Text3D
          letterSpacing={-0.006}
          size={0.5}
          font="/Inter_Bold.json"
          position-y={2}
          position-x={-2}
        >
          Hello, my dear friend
          <meshStandardMaterial color="salmon" />
        </Text3D>
      </Float>
    </>
  );
}
