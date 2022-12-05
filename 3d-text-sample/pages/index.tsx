import * as React from 'react'
import {Canvas} from '@react-three/fiber'
import Style from 'styles/Home.module.css'

import Text3D from '../mesh/text'

export default function Home() {
    return (
        <div className={Style.scene}>
            <Canvas camera={{position: [0, 0, 5]}}>
                <directionalLight position={[0, 0, 1000]}/>
                <Text3D />
            </Canvas>
        </div>
    )
}