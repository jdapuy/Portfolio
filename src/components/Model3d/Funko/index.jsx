import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/funkoTest.gltf')
  const myFunko = useRef()
  const [x,y,z] = props.newPos
  const vectorFK = new THREE.Vector3(x,y,z)

  useFrame(() => {
    myFunko.current.position.lerp(vectorFK, 0.07)
  })

  return (
    <group {...props} dispose={null} ref={myFunko}>
      {/* <group position={[0.01, 2.59, 0.02]}>
        <primitive object={nodes.centro} />
        <primitive object={nodes.Bone005} />
        <primitive object={nodes.Bone008} />
        <primitive object={nodes.Bone010} />
      </group> */}
      <mesh geometry={nodes.BASE_FUNKO_ORLANDO_3D.geometry} material={materials.initialShadingGroup} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.cuerpo.geometry} material={materials['Material.001']} position={[0.03, 3.33, 0.08]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.BASE_FUNKO_ORLANDO_3D002.geometry} material={materials['Material.001']} position={[0, 8.46, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.BASE_FUNKO_ORLANDO_3D003.geometry} material={materials['Material.004']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.BASE_FUNKO_ORLANDO_3D004.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.BASE_FUNKO_ORLANDO_3D005.geometry} material={materials.initialShadingGroup} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.camisa.geometry} material={materials.Material} position={[0, 4.45, 0]} scale={[1.19, 1.39, 1.19]} />
      <mesh geometry={nodes.pantaloneta.geometry} material={materials['Material.005']} position={[0.01, 2.77, 1.23]} scale={[1.28, 0.68, 1.2]} />
      {/* <mesh geometry={nodes.NurbsPath.geometry} material={nodes.NurbsPath.material} position={[27.76, 2.94, 1.48]} /> */}
      <mesh geometry={nodes.Cabello.geometry} material={materials['Material.002']} position={[2.45, 12.5, 0.46]} rotation={[2.98, 0.05, -0.28]} scale={[-1.85, -1.1, -1]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} position={[-0.05, 8.27, 2.44]} scale={[0.49, 0.16, 0.07]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.005']} position={[1.14, 0.44, 0.64]} rotation={[0, 0.48, -0.02]} scale={[0.76, 0.4, 1.05]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.005']} position={[-1.04, 0.44, 0.64]} rotation={[-3.14, 0.48, 0.02]} scale={[-0.76, -0.4, -1.05]} />
    </group>
  )
}

useGLTF.preload('/funkoTest.gltf')
