import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import V_1 from './../../assets/3D/v_1.glb';
import { useState, useEffect } from "react";
const V1 = ({...props}) => {
  const { nodes, materials } = useGLTF(V_1)
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }, [hovered])
  
  return (
    <group dispose={null}>
      <mesh {...props} geometry={nodes.Cube.geometry} material={materials.VTB_Dark} position={[0, 1.547, -19.918]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text.geometry} material={materials.VTB_Light} position={[0.019, hovered ? .5 + 3.195 : 3.195, -19.887]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
};

export default V1;

useGLTF.preload(V_1)