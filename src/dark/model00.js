/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, Sphere } from "@react-three/drei";

export default function Model00(props) {

  const ref = useRef()

  useFrame((state, delta) => (ref.current.rotation.x += 0.007))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={4}
      >
      <sphereGeometry  args={[1, 64, 64]}/>
      <MeshWobbleMaterial factor={18} speed={1} roughness={0.5} metalness={0.7} envMapIntensity={1} color={'#2e2e2e'}/>
    </mesh>
  )
}