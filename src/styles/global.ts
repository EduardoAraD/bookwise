import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':focus': {
    outline: 0,
    boxShadow: '0 0 0 2x $colors$green100',
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray200',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$md',
  },

  '@media(max-width: 1080px)': {
    fontSize: '93.75%', // 15px
  },

  '@media(max-width: 720px)': {
    fontSize: '87.5%', // 14px
  },
})
