import { OrbitControls, Sky, useHelper, BakeShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const cubeRef = useRef<any>();
  const directionalLightRef = useRef<any>(null);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'red');

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Sky
        distance={4500}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <BakeShadows/>
      <color args={["ivory"]} attach="background" />

      <OrbitControls makeDefault />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        ref={directionalLightRef}
      />

      <ambientLight intensity={1.5} />

      <group>
        <mesh ref={cubeRef} position-x={2} scale={1.5} castShadow>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-x={-2} castShadow>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>

      <mesh rotation-x={-Math.PI / 2} position-y={-1} receiveShadow>
        <planeGeometry args={[20, 20, 8, 8]} />
        <meshStandardMaterial
          args={[{ color: "greenyellow", side: THREE.DoubleSide }]}
        />
      </mesh>
    </>
  );
}
