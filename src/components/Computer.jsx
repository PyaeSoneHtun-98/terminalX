import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

export function Computer() {
  const computer = useGLTF('/assets/terminalx.glb')
  const { scene, animations } = computer

  const [scale, setScale] = useState(1.5) // Default scale

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 768) {
        setScale(4) // Reduce size on mobile (screen width < 768px)
      } else {
        setScale(5.5) // Default size for larger screens
      }
    }

    updateScale() // Initial check
    window.addEventListener('resize', updateScale) // Listen for window resize

    return () => window.removeEventListener('resize', updateScale)
  }, [])

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
      mixer.update(0.008) // Slower animation speed
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
      scale={scale}  // Dynamic scale based on screen width
      position-y={spring.y}
      position-x={0}
      position-z={0}
    />
  )
}
