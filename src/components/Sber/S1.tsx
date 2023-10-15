import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import S_1 from './../../assets/3D/s_1.glb';
const S1 = () => {
  const { nodes, materials } = useGLTF(S_1)
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube014.geometry} material={materials.Sber_Dark} position={[-21.383, 1.547, 12.335]} rotation={[-Math.PI, 1.035, -Math.PI]} />
      <mesh geometry={nodes.Text006.geometry} material={materials.Sber_Light} position={[-21.366, 3.234, 12.303]} rotation={[Math.PI / 2, 0, -2.106]} />
    </group>
  );
};

export default S1;

useGLTF.preload(S_1)