import { styled } from '../../styles/theme'
import Image from 'next/image'

export const AvatarContainer = styled('div', {
  background: 'linear-gradient($green100, $purple100)',
  padding: '1px',
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  borderRadius: '$full',
})

export const ImageContent = styled(Image, {
  objectFit: 'cover',
  borderRadius: '$full',
})
