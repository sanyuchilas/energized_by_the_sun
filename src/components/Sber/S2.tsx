import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import S_2 from './../../assets/3D/s_2.glb';
const S2 = () => {
  const { nodes, materials } = useGLTF(S_2)
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube016.geometry} material={materials.Sber_Dark} position={[-53.844, 1.547, 43.852]} rotation={[-Math.PI, 0.163, -Math.PI]} />
      <mesh geometry={nodes.Text007.geometry} material={materials.Sber_Light} position={[-53.858, 3.234, 43.818]} rotation={[Math.PI / 2, 0, -2.978]} />
    </group>
  );
};

export default S2;

useGLTF.preload(S_2)