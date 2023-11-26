'use client'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, Html, Text, MeshReflectorMaterial, Lightformer, Sky, OrbitControls, Loader, PerformanceMonitor, AdaptiveDpr, useTexture, AsciiRenderer } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { RGBELoader } from 'three-stdlib'
import Scene from './SplinePHC'
import SceneTwo from './SceneTwo'
import { a, useSpring, animated, config } from '@react-spring/three'
import { easing } from 'maath'


// function CameraRig() {
//     useFrame((state, delta) => {
//       easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
//       state.camera.lookAt(0, 0, 0)
//     })
//   }

const Experience = () => {

 
    return (
        <Canvas
            frameloop='always'
            camera={{ position: [0, 0, 0], fov: '125', far:10000, near:-50000}}
            shadows
            orthographic
            eventPrefix="client"
            style={{ opacity: 1, zIndex: 0, mixBlendMode: 'difference', pointerEvents: 'none' }}
            className='h-full w-full'
        >
            <Scene />
            <fog attach="fog" args={['#000000', 0.1, 170]} />
            
        </Canvas>  
    )
}

export default Experience