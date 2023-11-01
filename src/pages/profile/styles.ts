import { styled } from '../../styles/theme'

export const ProfileContainer = styled('main', {
  width: '100vw',
  height: '100vh',

  display: 'flex',
})

export const Content = styled('div', {
  padding: '4.5rem 6rem',
  overflow: 'auto',
  width: '100%',

  span: {
    fontSize: '$sm',
    color: '$gray100',
    display: 'flex',
  },
})

export const DualList = styled('div', {
  display: 'flex',
  marginTop: '$10',
  gap: '4rem',
  alignItems: 'flex-start',

  'div.list': {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    gap: '$3',

    span: {
      marginButton: '$1',
    },
  },
  'div.list-sugest': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '$3',
  },
})

export const ItemCardBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$6',
  gap: '$2',

  '> time': {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',
  },
})
