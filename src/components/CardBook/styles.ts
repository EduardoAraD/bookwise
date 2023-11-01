import Image from 'next/image'

import { styled } from '../../styles/theme'

export const CardBookContainer = styled('button', {
  all: 'unset',
  backgroundColor: '$gray700',
  padding: '1rem 1.25rem',
  borderRadius: '$md',
  gap: '$4',
  display: 'flex',
})

export const ImageContent = styled(Image, {
  borderRadius: '$md',
})
