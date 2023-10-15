import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import S_2 from './../../assets/3D/s_2.glb';
import { useState, useEffect } from "react";
const S2 = ({...props}) => {
  const { nodes, materials } = useGLTF(S_2)
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
      <mesh {...props} geometry={nodes.Cube016.geometry} material={materials.Sber_Dark} position={[-53.844, 1.547, 43.852]} rotation={[-Math.PI, 0.163, -Math.PI]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text007.geometry} material={materials.Sber_Light} position={[-53.858, hovered ? .5 + 3.234 : 3.234, 43.818]} rotation={[Math.PI / 2, 0, -2.978]} />
    </group>
  );
};

export default S2;

useGLTF.preload(S_2)