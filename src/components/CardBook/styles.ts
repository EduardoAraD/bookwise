import { styled } from '@/src/styles/theme'
import Image from 'next/image'

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

export const CardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  p: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },
  span: {
    fontSize: '$xs',
    color: '$gray400',
  },

  svg: {
    fill: '$purple100',
  },

  'div.stars': {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    gap: '$1',
  },
})
