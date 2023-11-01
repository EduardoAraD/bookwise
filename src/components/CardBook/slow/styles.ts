import { styled } from '../../../styles/theme'

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

  'div.stars': {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
  },
})
