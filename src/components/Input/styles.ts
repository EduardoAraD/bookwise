import { styled } from '../../styles/theme'

export const Container = styled('div', {
  display: 'flex',
  padding: '0.875rem 1.25rem',
  gap: '$2',
  width: '100%',

  border: '1px solid $gray500',
  borderRadius: '$sm',
  alignItems: 'center',

  svg: {
    fill: '$gray500',
  },
})

export const InputContent = styled('input', {
  display: 'flex',
  background: 'none',
  border: 'none',
  flex: 1,

  fontSize: '$sm',
  fontFamily: '$default',
  color: '$gray100',

  '&::placeholder': {
    color: '$gray400',
  },
})
