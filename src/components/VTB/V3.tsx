import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import V_3 from './../../assets/3D/v_3.glb';
import { useState, useEffect } from "react";
const V3 = ({...props}) => {
  const { nodes, materials } = useGLTF(V_3)
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
      <mesh {...props} geometry={nodes.Cube005.geometry} material={materials.VTB_Dark} position={[-16.567, 1.547, -51.284]} rotation={[0, Math.PI / 4, 0]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text001.geometry} material={materials.VTB_Light} position={[-16.532, hovered ? .5 + 3.203 : 3.203, -51.276]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} />
    </group>
  );
};

export default V3;

useGLTF.preload(V_3)