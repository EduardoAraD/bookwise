import { styled } from '../../../styles/theme'

export const CardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '$3',
  },

  time: {
    fontSize: '$sm',
    color: '$gray300',
  },
  h4: {
    all: 'unset',
    fontWeight: '$bold',
    color: '$gray100',
    lineHeight: '$short',
  },
  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
  p: {
    marginTop: '$6',
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '2.8rem',
  },
})
