import * as React from 'react'
import * as THREE from 'three';
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef, useState} from "react";

export default function Astronaut(props: JSX.IntrinsicElements['mesh']) {
    const {scene, animations} = useGLTF('/astronaut.glb')
    const {actions} = useAnimations(animations, scene)

    useEffect(() => {
        console.log(actions)
        actions.floating?.play()
    }, [actions, scene])

    return (<primitive object={scene} position={[0, -1, 0]}/>)
}