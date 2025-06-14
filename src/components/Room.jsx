import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'

export function Room({ onLoad }) {
  const roomRef = useRef()
  const { scene } = useGLTF('/assets/room2.glb')

  useEffect(() => {
    if (scene) {
      onLoad?.()
    }
  }, [scene, onLoad])

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