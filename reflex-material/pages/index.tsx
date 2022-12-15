import * as React from 'react'
import {Canvas} from '@react-three/fiber'
import Style from 'styles/Home.module.css'
import {Suspense} from "react";
import {Environment, Float} from "@react-three/drei";

export default function Home() {
  return (
      <>
      <div className={Style.scene}>
        <Canvas camera={{position: [0, 0, 5]}}>
        <ambientLight color={"#7590C4"} intensity={2}/>
          <directionalLight position={[0, 0, 3000]}/>
          <Suspense fallback={null}>
              <group position={[0, -1.5, 0]}>
                  <Float position={[0, 2.15, 0]} speed={2} rotationIntensity={2} floatIntensity={2}>
                      <mesh castShadow receiveShadow>
                          <torusKnotGeometry args={[1, 0.25, 256, 24, 1, 3]} />
                          <meshStandardMaterial color="#7590C4" roughness={0.05} metalness={0.8} transparent opacity={0.4} />
                      </mesh>
                  </Float>
              </group>
              <Environment preset="warehouse" />
          </Suspense>
        </Canvas>
      </div>
      </>
  )
}
