import * as THREE from 'three'
import * as React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function SphereWireframeMesh(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => {
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x / 5, 0.1)
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y / 5, 0.1)

        ref.current.rotation.x = 0.01
        ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 5, 10, delta)
        ref.current.rotation.y += 0.005
    })

    return (
        <mesh
            {...props}
            ref={ref}
            scale={0.95}>
            <sphereGeometry args={[1, 20, 15]}/>
            <meshStandardMaterial
                color={'gray'}
                wireframe/>
        </mesh>
    )
}