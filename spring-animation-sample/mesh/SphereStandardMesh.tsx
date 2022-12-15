import * as THREE from 'three'
import * as React from 'react'
import {useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'
import {a, useSpring} from "@react-spring/three"

export default function SphereStandardMesh(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const {scale, opacity} = useSpring({scale: hovered ? 1.2 : 1, opacity: hovered ? 0.0 : 1.0})

    useFrame((state, delta) => {
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x / 5, 0.1)
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y / 5, 0.1)

        ref.current.rotation.x = 0.01
        ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 5, 10, delta)
        ref.current.rotation.y += 0.005
    })

    return (
        // @ts-ignore
        <a.mesh
            {...props}
            ref={ref}
            scale={scale}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <sphereGeometry args={[1, 20, 15]}/>
            <a.meshStandardMaterial
                color={'gray'}
                opacity={opacity}
                flatShading
                transparent/>
        </a.mesh>
    )
}