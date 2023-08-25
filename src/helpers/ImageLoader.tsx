import { useState } from 'react'

type ImageLoaderProps = {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
}

export const ImageLoader = ({
  src,
  fallbackSrc,
  alt,
  className
}: ImageLoaderProps) => {
  const [imageSrc, setImageSrc] = useState(src)

  const handleImageError = () => {
    setImageSrc(fallbackSrc)
  }

  return (
    <img
      src={imageSrc}
      onError={handleImageError}
      alt={alt}
      className={className}
    />
  )
}
