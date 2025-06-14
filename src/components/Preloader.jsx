import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import preloaderData from '../../public/assets/preloader.json'

export function Preloader({ isLoading }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => prev < 100 ? prev + 1 : 100)
    }, 30)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111827]">
      <div className="w-32 h-32">
        <Lottie
          animationData={preloaderData}
          loop={true}
          autoplay={true}
        />
      </div>
      <div className="mt-4 text-white text-2xl font-bold">
        {percentage}%
      </div>
    </div>
  )
}

export default Preloader