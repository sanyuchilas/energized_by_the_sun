import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import S_1 from './../../assets/3D/s_1.glb';
import { useState, useEffect } from "react";
const S1 = ({...props}) => {
  const { nodes, materials } = useGLTF(S_1)
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
      <mesh {...props} geometry={nodes.Cube014.geometry} material={materials.Sber_Dark} position={[-21.383, 1.547, 12.335]} rotation={[-Math.PI, 1.035, -Math.PI]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text006.geometry} material={materials.Sber_Light} position={[-21.366, hovered ? .5 + 3.234 : 3.234, 12.303]} rotation={[Math.PI / 2, 0, -2.106]} />
    </group>
  );
};

export default S1;

useGLTF.preload(S_1)