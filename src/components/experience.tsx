import {
  OrbitControls,
  Sky,
  useHelper,
  BakeShadows,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Environment,
  Lightformer,
  Stage,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

export default function Experience() {
  // const {...softShadowsConfig } = useControls('soft-shadow',{
  //   size: { value: 25, min: 0, max: 100 },
  //   focus: { value: 0, min: 0, max: 2 },
  //   samples: { value: 10, min: 1, max: 20, step: 1 }
  // })
  const { ...contactShadowConfig } = useControls("contact-shadow", {
    color: "#000000",
    opacity: { value: 0.5, min: 0, max: 1 },
    blur: { value: 1, min: 0, max: 10 },
  });
  // const { ...skyConfig } = useControls("sky", {
  //   sunPosition:{value:[1,2,3]}
  // });
  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment map", {
      envMapIntensity: { value: 7, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  const cubeRef = useRef<any>();
  const directionalLightRef = useRef<any>(null);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "red");

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    cubeRef.current.position.x = 2 + Math.sin(time);
    cubeRef.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      {/* <Environment
        background
        // files={[
        //   "/environmentMaps/2/px.jpg",
        //   "/environmentMaps/2/nx.jpg",
        //   "/environmentMaps/2/py.jpg",
        //   "/environmentMaps/2/ny.jpg",
        //   "/environmentMaps/2/pz.jpg",
        //   "/environmentMaps/2/nz.jpg",
        // ]}
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      >
        <Lightformer
          position-z={-5}
          scale={5}
          color="red"
          intensity={10}
          form="ring"
        />
      </Environment> */}
      {/* <Sky
        // distance={4500}
        // sunPosition={skyConfig.sunPosition}
        // inclination={0}
        // azimuth={0.25}
      /> */}
      <OrbitControls makeDefault />
      //#region Shadows
      {/* <SoftShadows focus={softShadowsConfig.focus} size={softShadowsConfig.size} samples={softShadowsConfig.samples}/> */}
      {/* <BakeShadows /> */}
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={20}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          position={[1, 2, 3]}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      {/* <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={contactShadowConfig.color}
        opacity={contactShadowConfig.opacity}
        blur={contactShadowConfig.blur}
        // frames={Infinity}
      /> */}
      //#endregion
      {/* <color args={["ivory"]} attach="background" /> */}
      {/* <directionalLight
        ref={directionalLightRef}
        position={skyConfig.sunPosition}
        intensity={1.5}
        // castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-type={THREE.PCFSoftShadowMap}
      />
      <ambientLight intensity={1.5} /> */}
      <Stage
        shadows={{ type: "contact", opacity: 0.2, blur: 3 }}
        environment="sunset"
        preset="portrait"
        intensity={2}
      >
        <mesh
          ref={cubeRef}
          position-x={2}
          position-y={1}
          scale={1.5}
          castShadow
        >
          <boxGeometry />
          <meshStandardMaterial
            color="mediumpurple"
            envMapIntensity={envMapIntensity}
          />
        </mesh>

        <mesh position-x={-2} position-y={1} castShadow>
          <sphereGeometry />
          <meshStandardMaterial
            color="orange"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
      </Stage>
      {/* <mesh rotation-x={-Math.PI / 2} position-y={0} receiveShadow>
        <planeGeometry args={[20, 20, 8, 8]} />
        <meshStandardMaterial
          args={[{ color: "greenyellow", side: THREE.DoubleSide }]}
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}
    </>
  );
}
