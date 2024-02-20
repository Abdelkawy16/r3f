import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
  Sparkles,
  shaderMaterial,
} from "@react-three/drei";

import * as THREE from "three";

import portalVertexShader from "@/shaders/portal/vertex.glsl";
import portalFragmentShader from "@/shaders/portal/fragment.glsl";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// const PortalMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uColorStart: new THREE.Color("#ffffff"),
//     uColorEnd: new THREE.Color("#000000"),
//   },
//   portalVertexShader,
//   portalFragmentShader
// );

// extend({ PortalMaterial });

export default function Experience() {
  const { nodes } = useGLTF("./model/portal.glb");
  console.log(nodes);
  const backedTexture = useTexture("./model/baked.jpg");
  backedTexture.flipY = false;

  // const portalMaterial = useRef<any>();

  // useFrame((state, delta) => {
  //   portalMaterial.current.uTime += delta;
  // });
  return (
    <>
      <OrbitControls makeDefault />
      <color attach="background" args={["#030202"]} />
      <Center>
        <mesh geometry={(nodes.baked as THREE.Mesh).geometry}>
          <meshBasicMaterial map={backedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={(nodes.poleLightA as THREE.Mesh).geometry}
          position={(nodes.poleLightA as THREE.Mesh).position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <mesh
          geometry={(nodes.poleLightB as THREE.Mesh).geometry}
          position={(nodes.poleLightB as THREE.Mesh).position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <mesh
          geometry={(nodes.portalLight as THREE.Mesh).geometry}
          position={(nodes.portalLight as THREE.Mesh).position}
          rotation={(nodes.portalLight as THREE.Mesh).rotation}
        >
          {/* <portalMaterial ref={ portalMaterial } /> */}
        </mesh>
        <Sparkles size={6} scale={[4, 2, 4]} position-y={1} speed={0.2} />
      </Center>
    </>
  );
}
