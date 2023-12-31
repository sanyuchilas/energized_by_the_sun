import { AccumulativeShadows, Grid, RandomizedLight, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import cn from 'classnames';
import { memo, useEffect, useRef } from 'react';
import { PerspectiveCamera, Vector3 } from 'three';
import styles from './GamePage.module.css';
// eslint-disable-next-line
//@ts-ignore
import all_static from './../../assets/3D/all_static.glb';
import T1 from '../../components/Tinkoff/T1';
import T2 from '../../components/Tinkoff/T2';
import T3 from '../../components/Tinkoff/T3';
import S1 from '../../components/Sber/S1';
import S2 from '../../components/Sber/S2';
import S3 from '../../components/Sber/S3';
import V1 from '../../components/VTB/V1';
import V2 from '../../components/VTB/V2';
import V3 from '../../components/VTB/V3';

let k = 1;
let previousTouch: React.Touch | null = null;
const camera = new PerspectiveCamera(
  60,  // fov
  2,   // aspect
  0.1, // near
  1000, // far
);

const keyPressed: Set<string> = new Set()

function FinanceScene() {
  camera.position.set(0, 1, 0);
  camera.lookAt(0, 1, -1);

  const {nodes, materials} = useGLTF(all_static);

  useFrame((_, delta) => {
    k = 1;

    if (keyPressed.has('Shift')) {
      k = 2;
    }

    for (const key of keyPressed) {
      switch (key) {
        case 'ц':
        case 'w':
          camera.translateZ(-delta / 0.1 * k);
          break;
        case 'ы':
        case 's':
          camera.translateZ(delta / 0.1 * k);
          break;
        case 'в':
        case 'd':
          camera.translateX(delta / 0.1 * k);
          break;
        case 'ф':
        case 'a':
          camera.translateX(-delta / 0.1 * k);
          break;
        default:
          break;
      }

      camera.position.set(camera.position.x, 1, camera.position.z);
    }
  })

  const onT1ClickHanlder = () => {
    window.open("https://journal.tinkoff.ru/pro/fingram/", "_blank");
  }

  const onT2ClickHanlder = () => {
    window.open("https://www.tinkoff.ru/finance/blog/money-management/", "_blank");
  }

  const onT3ClickHanlder = () => {
    window.open("https://www.tinkoff.ru/invest/education/", "_blank");
  }

  const onV1ClickHanlder = () => {
    window.open("https://www.vtb.ru/personal/drugie-uslugi/fin-gram-pens/", "_blank");
  }

  const onV2ClickHanlder = () => {
    window.open("https://learn.vtb.ru/fingram/", "_blank");
  }

  const onV3ClickHanlder = () => {
    window.open("https://edu.vtbreg.ru/?GO_S1=Y", "_blank");
  }

  const onS1ClickHanlder = () => {
    window.open("https://www.sberbank.com/ru/financialliteracy", "_blank");
  }

  const onS2ClickHanlder = () => {
    window.open("https://www.sberbank.ru/ru/person/investments/edu", "_blank");
  }

  const onS3ClickHanlder = () => {
    window.open("https://finance.sberuniversity.ru/", "_blank");
  }
  
  return (
    <>
      <Ground/>
      <Shadows/>
      <ambientLight intensity={2}/>
      <pointLight position={[0, 5, 0]} intensity={100} color="#fff" />
      <pointLight position={[8, 12, 8]} intensity={100} color="#fff" />
      <pointLight position={[0, 12, -8]} intensity={100} color="#fff" />
      <pointLight position={[-8, 12, 8]} intensity={100} color="#fff" />
      <group dispose={null} position={[0, -0.4, 0]}>
        <mesh geometry={nodes.Curve_1.geometry} material={materials.M_VTBLow} />
        <mesh geometry={nodes.Curve_2.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Curve_3.geometry} material={materials.PaletteMaterial002} />
      </group>
      <T1 onClick={onT1ClickHanlder}/>
      <T2 onClick={onT2ClickHanlder}/>
      <T3 onClick={onT3ClickHanlder}/>
      <S1 onClick={onS1ClickHanlder}/>
      <S2 onClick={onS2ClickHanlder}/>
      <S3 onClick={onS3ClickHanlder}/>
      <V1 onClick={onV1ClickHanlder}/>
      <V2 onClick={onV2ClickHanlder}/>
      <V3 onClick={onV3ClickHanlder}/>
    </>
  );
}

function Ground() {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: '#9d4b4b',
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }
  return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

const Shadows = memo(() => (
  <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
))

const GamePage = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    ref.current?.parentElement?.parentElement?.focus();
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    keyPressed.add(e.key);
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    keyPressed.delete(e.key);
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.buttons === 2) {
      camera.rotateOnWorldAxis(
        new Vector3(0, 1, 0), -e.movementX * 0.002
      );
      camera.rotateX(-e.movementY * 0.002);
    }
  }

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const touch = e.touches[0];
    if (!previousTouch) {
      previousTouch = touch;
    }
    camera.rotateOnWorldAxis(
      new Vector3(0, 1, 0), -(touch.pageX - previousTouch.pageX) * 0.002
    );
    camera.rotateX(-(touch.pageY - previousTouch.pageY) * 0.002);
    previousTouch = touch;
  }

  return (
    <>
     <Canvas
        tabIndex={-1}
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => previousTouch = null}
        onContextMenu={e => e.preventDefault()}
        className={cn(styles.canvas)}
        camera={camera}
        shadows
      >
        <FinanceScene/>
      </Canvas>
    </>
  );
};

export default GamePage;

useGLTF.preload(all_static);