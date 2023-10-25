import Link from 'next/link'

import { styled } from '../../styles/theme'

export const DrawerContainer = styled('main', {
  width: 232,
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '3rem 2.5rem',
  backgroundColor: '$gray700',
})

export const NavContent = styled('nav', {
  display: 'flex',

  marginTop: '4rem',
  flex: 1,

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  },

  li: {
    all: 'unset',
  },
})

export const ButtonSignOut = styled('button', {
  all: 'unset',
  padding: '$1',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontWeight: '$medium',
  fontSize: '$md',
  color: '$gray300',

  cursor: 'pointer',
  transition: '0.4s',

  img: {
    border: '1px solid $green100',
    borderRadius: '$full',
    height: '$8',
    width: '$8',
    objectFit: 'cover',
  },

  svg: {
    transition: '0.4s',
    fill: '$green100',
  },

  '&:hover': {
    color: '$gray100',
    svg: {
      fill: '$gray100',
    },
  },
})

export const ItemNav = styled(Link, {
  all: 'unset',
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  cursor: 'pointer',
  transition: '0.2s',

  fontFamily: '$default',
  fontSize: '$md',

  div: {
    height: 24,
    width: 4,
    borderRadius: '$xs',
    transition: '0.2s',
  },

  '&:hover': {
    color: '$white',
    fill: '$white',
  },

  variants: {
    selected: {
      true: {
        color: '$gray100',
        fill: '$gray100',
        fontWeight: '$bold',
        div: {
          background: 'linear-gradient($green100, $purple100)',
        },
      },
      false: {
        color: '$gray400',
        fill: '$gray400',
        fontWeight: '$regular',
        div: {
          background: '$gray700',
        },
      },
    },
  },
})
