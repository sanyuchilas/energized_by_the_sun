import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
//@ts-ignore
import S_3 from './../../assets/3D/s_3.glb';
const S3 = () => {
  const { nodes, materials } = useGLTF(S_3)
  
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube017.geometry} material={materials.Sber_Dark} position={[-81.2, 1.547, 19.74]} rotation={[0, 1.286, 0]} />
      <mesh geometry={nodes.Text008.geometry} material={materials.Sber_Light} position={[-81.164, 3.234, 19.73]} rotation={[Math.PI / 2, 0, -1.286]} />
    </group>
  );
};

export default S3;

useGLTF.preload(S_3)