import { styled } from '../../../styles/theme'

export const CardBookContainer = styled('button', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  padding: '1rem 1.25rem',
  borderRadius: '$md',

  '> div': {
    display: 'flex',
    gap: '$6',
  },

  p: {
    marginTop: '$6',
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
  },
})

export const CardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
  padding: '$1 0',

  h4: {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: '$short',
    color: '$gray100',
  },
  span: {
    fontSize: '$sm',
    color: '$gray400',
    lineHeight: '$base',
  },

  'div.star': {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
  },
})
