import { useGLTF, Clone } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Model(props: props) {
  // const model = useLoader(GLTFLoader, props.path);
  const model = useGLTF(props.path);
  console.log(model);
  return (
    <>
      <Clone object={model.scene} scale={props.scale} position-y={-0.99} position-x={-4} />
      <Clone object={model.scene} scale={props.scale} position-y={-0.99} position-x={0} />
      <Clone object={model.scene} scale={props.scale} position-y={-0.99} position-x={4} />
      
    </>
  );
}

type props = {
  path: string;
  scale: number;
};
