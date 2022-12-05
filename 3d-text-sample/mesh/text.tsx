import * as THREE from 'three'
import * as React from 'react'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {Text3D} from "@react-three/drei";

export default function Model(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => {
        ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 15, 10, delta)
        ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 15, 10, delta)
    })

    return (
        <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={1.5}
            font="/Prompt_Bold.json"
            ref={ref}>
            {`hello\nworld`}
            <meshNormalMaterial />
        </Text3D>
    )
}