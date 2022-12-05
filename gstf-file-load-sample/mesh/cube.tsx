import * as React from 'react'
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const cube = useGLTF("/cube.gltf")

    useFrame((state, delta) => {
        ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 5, 5, delta)
        ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 5, 5, delta)
    })

    return ( <primitive object={ cube.scene } scale={ 0.2 } ref={ ref } /> )
}