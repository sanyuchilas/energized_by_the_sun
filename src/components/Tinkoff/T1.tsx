import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import T_1 from './../../assets/3D/t_1.glb';
import { useEffect, useState } from "react";

const T1 = ({...props}) => {
  const { nodes, materials } = useGLTF(T_1);
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
      <mesh {...props} geometry={nodes.Cube008.geometry} material={materials.Tinkoff_Dark} position={[28.765, 1.547, 15.373]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text003.geometry} material={materials.Tinkoff_light} position={[28.728, hovered ? .5 + 3.234 : 3.234, 15.375]}/>
    </group>
  );
};

export default T1;

useGLTF.preload(T_1)