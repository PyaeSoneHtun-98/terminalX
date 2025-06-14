import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export function Room() {
  const roomRef = useRef()
  const { scene } = useGLTF('/assets/room2.glb')

  return (
    <primitive 
      ref={roomRef}
      object={scene} 
      scale={8}
      position={[0, -2, -10]}
    />
  )
}

useGLTF.preload('/assets/room2.glb') 