import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import V_3 from './../../assets/3D/v_3.glb';
const V3 = () => {
  const { nodes, materials } = useGLTF(V_3)
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube005.geometry} material={materials.VTB_Dark} position={[-16.567, 1.547, -51.284]} rotation={[0, Math.PI / 4, 0]} />
      <mesh geometry={nodes.Text001.geometry} material={materials.VTB_Light} position={[-16.532, 3.203, -51.276]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} />
    </group>
  );
};

export default V3;

useGLTF.preload(V_3)