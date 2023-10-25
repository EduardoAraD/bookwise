import { ImageProps } from 'next/image'
import { AvatarContainer, ImageContent } from './styles'

type AvatarProps = ImageProps

export function Avatar({ ...rest }: AvatarProps) {
  return (
    <AvatarContainer>
      <ImageContent {...rest} />
    </AvatarContainer>
  )
}
