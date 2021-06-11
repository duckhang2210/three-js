import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from 'three';

import Hiphop from "./Hiphop"

interface IProps {
  position: [x: number, y: number, z: number]
  color: string
}

const Box = ({ position, color }:IProps) => {
  const mesh = useRef<THREE.Mesh>();
  useFrame(() => {if (mesh.current !== undefined) {
    (mesh.current.rotation.x = mesh.current.rotation.y += 0.01)
  }}
  )
  return (
    <mesh castShadow position={position} ref={mesh}>
          <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
          <meshStandardMaterial attach='material' color={color}/>
        </mesh>
  )
}

export function LandingPage() {
  
  return (
    <>
      <Canvas shadows camera={{position: [-5,2,10], fov: 50}} >
        <ambientLight intensity={0.7} />
        <directionalLight
          intensity={1.5}
          castShadow
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10,0,-20]} intensity={0.6} />
        <pointLight position={[0,-4,0]} intensity={1} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2,0,0]} position = {[0,-3,0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3}/>
          </mesh>
        </group>

        <Box position={[0,1,-2]} color="lightpink" />
        <Box position={[5,1,0]} color="gold"/>
        <Suspense fallback={null}>
          <Hiphop position={[-3,0,1]} />
        </Suspense>
        
        <OrbitControls />
      </Canvas>
    </>
  );
}
