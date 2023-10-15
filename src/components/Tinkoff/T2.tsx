import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import T_2 from './../../assets/3D/t_2.glb';
const T2 = () => {
  const { nodes, materials } = useGLTF(T_2)
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube010.geometry} material={materials.Tinkoff_Dark} position={[26.857, 1.547, 50.137]} rotation={[-Math.PI, 1.097, -Math.PI]} />
      <mesh geometry={nodes.Text004.geometry} material={materials.Tinkoff_light} position={[26.893, 3.452, 50.14]} rotation={[Math.PI / 2, 0, -2.044]} />
    </group>
  );
};

export default T2;

useGLTF.preload(T_2)