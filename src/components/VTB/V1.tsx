import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import V_1 from './../../assets/3D/v_1.glb';
const V1 = () => {
  const { nodes, materials } = useGLTF(V_1)
  
  return (
    <group  dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.VTB_Dark} position={[0, 1.547, -19.918]} />
      <mesh geometry={nodes.Text.geometry} material={materials.VTB_Light} position={[0.019, 3.195, -19.887]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
};

export default V1;

useGLTF.preload(V_1)