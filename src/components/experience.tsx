import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function Experience() {
  //   const [cubeRotation, setCubeRotation] = useState(Math.PI / 4);
  const cubeRef = useRef<any>();
  const groupRef = useRef<any>();
  useFrame((state, delta) => {
    console.log("tick");
    // setCubeRotation(cubeRotation + 0.01);
    cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
  });

  return (
    <>
    <group ref={groupRef}>
      <mesh ref={cubeRef} rotation-y={Math.PI / 4} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </group>

      <mesh rotation-x={-Math.PI / 2} position-y={-1}>
        <planeGeometry args={[20, 20, 8, 8]} />
        <meshBasicMaterial
          args={[{ color: "greenyellow", side: THREE.DoubleSide }]}
        />
      </mesh>
    </>
  );
}
