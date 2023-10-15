import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import V_2 from './../../assets/3D/v_2.glb';
import { useState, useEffect } from "react";
const V2 = ({...props}) => {
  const { nodes, materials } = useGLTF(V_2)
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
      <mesh {...props} geometry={nodes.Cube006.geometry} material={materials.VTB_Dark} position={[11.594, 1.547, -41.418]} rotation={[0, -Math.PI / 2, 0]} scale={hovered ? 1.3 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}/>
      <mesh geometry={nodes.Text002.geometry} material={materials.VTB_Light} position={[11.563, hovered ? .5 + 3.534 : 3.534, -41.399]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
    </group>
  );
};

export default V2;

useGLTF.preload(V_2)