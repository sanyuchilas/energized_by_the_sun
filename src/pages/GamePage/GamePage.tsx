import { AccumulativeShadows, Grid, RandomizedLight } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import cn from 'classnames';
import { memo, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { PerspectiveCamera, Vector3 } from 'three';
import styles from './GamePage.module.css';

const camera = new PerspectiveCamera(
  60,  // fov
  2,   // aspect
  0.1, // near
  1000, // far
);

const keyPressed: Set<string> = new Set()

function FinanceScene() {
  camera.position.set(0, 1, -2);
  camera.lookAt(0, 1, 0);

  useFrame((_, delta) => {
    for (const key of keyPressed) {
      switch (key) {
        case 'w':
          camera.translateZ(-delta / 0.1);
          break;
        case 's':
          camera.translateZ(delta / 0.1);
          break;
        case 'd':
          camera.translateX(delta / 0.1);
          break;
        case 'a':
          camera.translateX(-delta / 0.1);
          break;
        default:
      }

      camera.position.set(camera.position.x, 1, camera.position.z);
    }
  })
  
  return (
    <>
      <Ground/>
      <Shadows/>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]}/>
      </mesh>
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
  const params = useParams();
  const ref = useRef<HTMLCanvasElement>(null);

  console.log(params);

  useEffect(() => {
    ref.current?.parentElement?.parentElement?.focus();
    console.log(ref.current?.parentElement?.parentElement);
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

  return (
    <>
     <Canvas
        tabIndex={-1}
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseMove={handleMouseMove}
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