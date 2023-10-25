import { styled } from '../../styles/theme'

export const HomeContainer = styled('main', {
  width: '100%',
  height: '100vh',

  display: 'flex',
})

export const Content = styled('div', {
  padding: '4.5rem 6rem',
  overflow: 'auto',

  span: {
    fontSize: '$sm',
    color: '$gray100',
    display: 'flex',
  },

  '::-webkit-scrollbar': {
    width: '2px',
  },
})

export const Title = styled('div', {
  display: 'flex',
  gap: '0.75rem',

  p: {
    fontSize: '$2xl',
    fontWeight: '$medium',
    color: '$gray100',
  },
  svg: {
    fill: '$green100',
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

export const TitleSugestion = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginButton: '$1',

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },
  button: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '$2',
    borderRadius: '$xs',
    gap: '$2',

    fontSize: '$sm',
    fontFamily: '$default',
    color: '$purple100',
    svg: {
      fill: '$purple100',
    },
    transition: '0.2s background',

    '&:hover': {
      backgroundColor: '$gray600',
    },
  },
})

export const DivLastBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$4',
  gap: '$3',
})
