import { useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useRef } from "react";
import * as THREE from "three";
import CustomObject from "./custom-object";

extend({ OrbitControls });

export default function Experience() {
  //   const [cubeRotation, setCubeRotation] = useState(Math.PI / 4);
  const cubeRef = useRef<any>();
  const groupRef = useRef<any>();
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime;

    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(new THREE.Vector3());
    // setCubeRotation(cubeRotation + 0.01);
    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />

      <ambientLight intensity={1.5} />

      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI / 4}
          position-x={2}
          scale={1.5}
          castShadow
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-x={-2} castShadow>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>

      <mesh rotation-x={-Math.PI / 2} position-y={-1} castShadow receiveShadow>
        <planeGeometry args={[20, 20, 8, 8]} />
        <meshStandardMaterial
          args={[{ color: "greenyellow", side: THREE.DoubleSide }]}
        />
      </mesh>

      <CustomObject />
    </>
  );
}
