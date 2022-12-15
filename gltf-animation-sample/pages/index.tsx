import * as React from 'react'
import {Canvas} from '@react-three/fiber'
import Style from 'styles/Home.module.css'
import {Suspense} from "react";

import Astronaut from '../mesh/astronaut'
import {Float} from "@react-three/drei";

export default function Home() {
    return (
        <div className={Style.scene}>
            <Canvas camera={{position: [0, 0, 5]}}>
                <directionalLight position={[0, 0, 3000]}/>
                <Suspense fallback={null}>
                    <Float position={[0, 0, 0]} speed={2} rotationIntensity={2} floatIntensity={2}>
                        <Astronaut/>
                    </Float>
                </Suspense>
            </Canvas>
        </div>
    )
}