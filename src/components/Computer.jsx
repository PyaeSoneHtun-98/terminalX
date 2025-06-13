import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

export function Computer({ onLoad }) {
  const computer = useGLTF('/assets/terminalx-optimized.glb')
  const { scene, animations } = computer
  const [scale, setScale] = useState(1.5)
  const [positionX, setPositionX] = useState(1.2)
  const [positionY, setPositionY] = useState(0.5)

  // Spring animation for vertical float
  const spring = useSpring({
    from: { y: 4 },
    to: { y: positionY },
    config: {
      mass: 2,
      tension: 200,
      friction: 15,
    }
  })

  // Responsive handling for scale and position
  useEffect(() => {
    const updateView = () => {
      const isMobile = window.innerWidth < 768

      setScale(isMobile ? 4 : 5.5)
      setPositionX(isMobile ? 0 : 1.2)
      setPositionY(isMobile ? 2.5 : 0.5)
    }

    updateView()
    window.addEventListener('resize', updateView)
    return () => window.removeEventListener('resize', updateView)
  }, [])

  // Handle model animations
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

  useEffect(() => {
    if (scene) {
      onLoad?.()
    }
  }, [scene, onLoad])

  return (
    <animated.primitive 
      object={scene}
      scale={scale}
      position-x={positionX}
      position-y={spring.y}
      position-z={0}
      rotation={[0, -Math.PI / 2 - 0.05, 0]}
    />
  )
}
