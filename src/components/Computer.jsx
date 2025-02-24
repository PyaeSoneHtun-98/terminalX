import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

export function Computer() {
  const computer = useGLTF('./assets/computer.glb')
  const { scene, animations } = computer

  const spring = useSpring({
    from: { y: 4 },
    to: { y: -0.5 },
    config: {
      mass: 2,
      tension: 200,
      friction: 15,
    }
  })

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

  return (
    <animated.primitive 
      object={scene} 
      scale={1.5} 
      position-y={spring.y}
      position-x={0}
      position-z={0}
    />
  )
}