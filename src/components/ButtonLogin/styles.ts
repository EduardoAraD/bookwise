import { styled } from '../../styles/theme'

export const ContainerButton = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  padding: '20px 24px',

  backgroundColor: '$gray600',
  borderRadius: '$xs',

  maxWidth: 382,
  width: '100%',
  gap: '$6',

  cursor: 'pointer',
  transition: '0.2s',

  '&:hover': {
    background: '$gray500',
  },
})

export const TextButton = styled('span', {
  textAlign: 'left',

  color: '$gray200',
  fontSize: '$lg',
  fontFamily: '$default',
  fontWeight: '$bold',
})
