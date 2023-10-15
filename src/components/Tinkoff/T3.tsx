import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import T_3 from './../../assets/3D/t_3.glb';
const T3 = () => {
  const { nodes, materials } = useGLTF(T_3)
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube012.geometry} material={materials.Tinkoff_Dark} position={[87.989, 1.547, 39.429]} rotation={[Math.PI, -1.311, Math.PI]} />
      <mesh geometry={nodes.Text005.geometry} material={materials.Tinkoff_light} position={[87.964, 3.166, 39.401]} rotation={[Math.PI / 2, 0, 1.831]} />
    </group>
  );
};

export default T3;

useGLTF.preload(T_3)