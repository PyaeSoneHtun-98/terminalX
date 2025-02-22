import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
import { Computer } from '../components/Computer'

export function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#111827', 
      position: 'relative',
      backgroundImage: 'url(./src/assets/cloud.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Computer />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
      <button
        onClick={() => navigate('/me')}
        className="absolute bottom-30 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white rounded-lg attractive-button"
      >
        View More
      </button>
    </div>
  )
}