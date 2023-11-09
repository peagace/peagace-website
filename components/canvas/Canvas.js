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
            camera={{position: [0, 0, -260], fov:'90',  }}            
            eventPrefix="client"
            shadows={'basic'}
            style={{opacity:0.3}}
            className='h-full w-full'
        >
             {/* <fog attach="fog" args={['#CCCCCC', 0.1, 10]} /> 
             <fog attach="fog" args={['#CCCCCC', 13, 3]} />  */}
            {/* <PresentationControls
                global={true} // Spin globally or by dragging the model
                cursor={true} // Whether to toggle cursor style on drag
                snap={true} // Snap-back to center (can also be a spring config)
                speed={3} // Speed factor
                zoom={1} // Zoom factor when half the polar-max is reached
                rotation={[0, 0, 0]} // Default rotation
                polar={[0, -Math.PI / 2]} // Vertical limits
                azimuth={[-Infinity, Infinity]} // Horizontal limits
                config={{ mass: 0.5, tension: 200, friction: 23 }} // Spring config
            > */}
            <group position={[-100,350,0]}  rotation={[0, 0, -5]}>
                <Scene />
            </group>
            {/* </PresentationControls> */}
        </Canvas>
    )
}

export default Experience