import ReactCompareImage from 'react-compare-image'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function BeforeAfter({ beforeImage, afterImage }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({ before: false, after: false });

  useEffect(() => {
    const beforeImg = new Image();
    const afterImg = new Image();

    beforeImg.onload = () => setImagesLoaded(prev => ({ ...prev, before: true }));
    afterImg.onload = () => setImagesLoaded(prev => ({ ...prev, after: true }));

    beforeImg.src = beforeImage;
    afterImg.src = afterImage;

    return () => {
      beforeImg.onload = null;
      afterImg.onload = null;
    };
  }, [beforeImage, afterImage]);

  useEffect(() => {
    if (imagesLoaded.before && imagesLoaded.after) {
      setIsLoading(false);
    }
  }, [imagesLoaded]);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
      {isLoading ? (
        <motion.div
          className="absolute inset-0 bg-gray-800"
          animate={{
            background: ['#1F2937', '#374151', '#1F2937'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ) : (
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          aspectRatio="auto"
          handleSize={40}
          sliderLineWidth={2}
          sliderLineColor="white"
        />
      )}
    </div>
  );
}