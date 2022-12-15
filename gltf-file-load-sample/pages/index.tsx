import * as React from 'react'
import {Canvas} from '@react-three/fiber'
import Style from 'styles/Home.module.css'
import {Suspense} from "react";

import Cube from '../mesh/cube'

export default function Home() {
  return (
      <div className={Style.scene}>
        <Canvas camera={{position: [0, 0, 300]}}>
          <directionalLight position={[0, 0, 3000]}/>
          <Suspense fallback={null}>
            <Cube />
          </Suspense>
        </Canvas>
      </div>
  )
}