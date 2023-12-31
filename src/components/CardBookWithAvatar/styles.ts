import { styled } from '../../styles/theme'

export const CardContainer = styled('button', {
  all: 'unset',

  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  padding: '$6',
  borderRadius: '$md',
  gap: '2rem',
})

export const ContentInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$4',
})

export const ContentAvatar = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  'div.avatar-info': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

    p: {
      fontSize: '$md',
      color: '$gray100',
    },
    span: {
      marginTop: 0,
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const ContentBook = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$4',
})

export const ContentBookInfo = styled('div', {
  flex: 1,

  h4: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },
  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
  p: {
    marginTop: '$5',
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '5.6rem',
  },
})

export const VerMais = styled('b', {
  fontSize: '$sm',
  color: '$purple100',
})
