import ReactCompareImage from 'react-compare-image'

export function BeforeAfter({ beforeImage, afterImage }) {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-lg">
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        sliderPositionPercentage={0.5}
      />
    </div>
  )
}