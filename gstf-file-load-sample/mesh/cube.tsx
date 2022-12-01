import * as React from 'react'
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const cube = useGLTF("/cube.gltf")

    useFrame((state, delta) => {
        ref.current.rotation.x += 0.01
        ref.current.rotation.y += 0.01
    })

    return ( <primitive object={ cube.scene } scale={ 0.004 } ref={ ref } /> )
}