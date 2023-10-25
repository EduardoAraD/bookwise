import { styled } from '../../styles/theme'

export const LoginContainer = styled('div', {
  width: '100%',
  height: '100vh',

  display: 'flex',
})

export const ImageBackground = styled('div', {
  flex: 2,
  height: '100%',
  overflow: 'hidden',

  'div.opacity': {
    position: 'absolute',
    width: '40%',
    height: '100%',
    top: 0,

    backgroundColor: '$purple200',
    opacity: 0.6,
  },

  'img.background': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  'div.logo': {
    position: 'absolute',
    height: '100%',
    width: '40%',
    zIndex: 9,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Content = styled('div', {
  flex: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    p: {
      marginTop: '-$4',
    },
  },
})
