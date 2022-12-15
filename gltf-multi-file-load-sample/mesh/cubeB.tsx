import * as React from 'react'
import {useGLTF} from "@react-three/drei";
import {Mesh} from "three";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {useRef} from "react";

export default function CubeB(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const { nodes, materials } = useGLTF("/cube.gltf")

    useFrame((state, delta) => {
        ref.current.rotation.x -= 0.01
        ref.current.rotation.y -= 0.01
    })

    return (
        <group position={[-2, 0, 0]} scale={0.004}>
            <mesh material={materials.material} geometry={(nodes.Cube as Mesh).geometry} ref={ref} />
        </group>
    )
}