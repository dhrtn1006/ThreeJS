import * as React from 'react'
import {Canvas} from '@react-three/fiber'
import Style from 'styles/Home.module.css'
import Mesh1 from '../mesh/SphereStandardMesh';
import Mesh2 from '../mesh/SphereWireframeMesh';


export default function Home() {
    return (
        <div className={Style.scene}>
            <Canvas camera={{position: [0, 0, 3]}}>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <Mesh1 position={[0, 0, 0]}/>
                <Mesh2 position={[0, 0, 0]}/>
            </Canvas>
        </div>
    )
}

