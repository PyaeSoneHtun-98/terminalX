import { motion } from 'framer-motion';

export function LoadingBeforeAfter() {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
      <div className="absolute inset-0 flex">
        {/* Left side skeleton */}
        <motion.div
          className="w-1/2 h-full bg-gray-800"
          animate={{
            background: ['#1F2937', '#374151', '#1F2937'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        {/* Right side skeleton */}
        <motion.div
          className="w-1/2 h-full bg-gray-800"
          animate={{
            background: ['#1F2937', '#374151', '#1F2937'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        {/* Mock slider handle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white bg-gray-900/50" />
        </div>
      </div>
    </div>
  );
}