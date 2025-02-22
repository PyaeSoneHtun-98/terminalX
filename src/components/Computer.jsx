import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

export function Computer() {
  const computer = useGLTF('./src/assets/computer.glb')
  const { scene, animations } = computer

  useEffect(() => {
    const mixer = new THREE.AnimationMixer(scene)
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip)
      action.play()
    })

    const animate = () => {
      mixer.update(0.008) // Reduced from 0.016 to 0.008 for slower animation
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      mixer.stopAllAction()
    }
  }, [scene, animations])

  return <primitive object={scene} scale={1.5} position={[0, -0.5, 0]} />
}