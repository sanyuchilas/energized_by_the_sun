import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import T_2 from './../../assets/3D/t_2.glb';
import { useState, useEffect } from "react";
const T2 = ({...props}) => {
  const { nodes, materials } = useGLTF(T_2)
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
      <mesh {...props} geometry={nodes.Cube010.geometry} material={materials.Tinkoff_Dark} position={[26.857, 1.547, 50.137]} rotation={[-Math.PI, 1.097, -Math.PI]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text004.geometry} material={materials.Tinkoff_light} position={[26.893, hovered ? .5 + 3.452 : 3.452, 50.14]} rotation={[Math.PI / 2, 0, -2.044]} />
    </group>
  );
};

export default T2;

useGLTF.preload(T_2)