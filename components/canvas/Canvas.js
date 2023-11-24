'use client'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, Html, Text, MeshReflectorMaterial, Lightformer, Sky, OrbitControls, Loader, PerformanceMonitor, AdaptiveDpr, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { RGBELoader } from 'three-stdlib'
import Scene from './SplinePHC'
import SceneTwo from './SceneTwo'

const Experience = () => {
    return (
        <Canvas
            frameloop='always'
            camera={{position: [0, 0, 0], fov:'80',  }}            
            eventPrefix="client"
            style={{opacity:1, zIndex:0, mixBlendMode:'difference', pointerEvents:'none'}}
            className='h-full w-full'
        >
            {/* <fog attach="fog" args={['orange', 2, 20]} /> 
            <fog attach="fog" args={['red', 1, 10]} />              */}
            <group position={[0,0,0]}  rotation={[0, 0, 0]}>
                <Scene />
            </group>
        </Canvas>
    )
}

export default Experience