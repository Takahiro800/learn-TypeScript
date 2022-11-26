import 'tailwindcss/tailwind.css'
import Image, { ImageProps } from 'next/image'

type ImageShape = 'circle' | 'square'
type ImageSize = '140' | '280' | '70'

type ShapeImageProps = {
  src: string
  shape: ImageShape
  size: string
}

export const ShapeImage = (props: ShapeImageProps) => {
  const { shape, src, size = '140' } = props

  if (shape == 'circle') {
    return <img className="rounded-half" src={src} width={size} height={size} />
  }
  return <img src={src} width={size} height={size} />
}
