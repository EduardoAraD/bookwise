import { styled } from '../../../../styles/theme'

export const ProfileContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderLeft: '1px solid $gray700',
  width: '100%',

  alignItems: 'center',

  h4: {
    all: 'unset',
    marginTop: '$5',

    fontWeight: '$bold',
    fontSize: '$xl',
    color: '$gray100',
    lineHeight: '$short',
    textAlign: 'center',
  },
  span: {
    fontSize: '$sm',
    color: '$gray400',
    lineHeight: '$base',
  },
})

export const Line = styled('div', {
  margin: '$8',
  height: 4,
  width: '2rem',
  background: 'linear-gradient(90deg,$green100, $purple100)',
  borderRadius: '$full',
})

export const InfoContainer = styled('div', {
  padding: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const Content = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 196,
  width: '100%',

  svg: {
    fill: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  p: {
    color: '$gray100',
    fontSize: '$md',
  },
  span: {
    color: '$gray300',
  },
})
