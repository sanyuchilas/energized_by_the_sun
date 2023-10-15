import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import V_2 from './../../assets/3D/v_2.glb';
const V2 = () => {
  const { nodes, materials } = useGLTF(V_2)
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube006.geometry} material={materials.VTB_Dark} position={[11.594, 1.547, -41.418]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Text002.geometry} material={materials.VTB_Light} position={[11.563, 3.534, -41.399]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
    </group>
  );
};

export default V2;

useGLTF.preload(V_2)