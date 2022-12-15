import * as React from 'react'
import {Canvas} from '@react-three/fiber'
import Style from 'styles/Home.module.css'
import {Suspense} from "react";

import CubeA from '../mesh/cubeA'
import CubeB from '../mesh/cubeB'

export default function Home() {
  return (
      <div className={Style.scene}>
        <Canvas camera={{position: [0, 0, 5]}}>
          <directionalLight position={[0, 0, 10]}/>
          <Suspense fallback={null}>
              <CubeA />
              <CubeB />
          </Suspense>
        </Canvas>
      </div>
  )
}