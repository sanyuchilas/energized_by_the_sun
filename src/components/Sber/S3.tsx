import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import S_3 from './../../assets/3D/s_3.glb';
import { useState, useEffect } from "react";
const S3 = ({...props}) => {
  const { nodes, materials } = useGLTF(S_3)
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
      <mesh {...props} geometry={nodes.Cube017.geometry} material={materials.Sber_Dark} position={[-81.2, 1.547, 19.74]} rotation={[0, 1.286, 0]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text008.geometry} material={materials.Sber_Light} position={[-81.164, hovered ? .5 + 3.234 : 3.234, 19.73]} rotation={[Math.PI / 2, 0, -1.286]} />
    </group>
  );
};

export default S3;

useGLTF.preload(S_3)