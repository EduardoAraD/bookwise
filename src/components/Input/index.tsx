import { InputHTMLAttributes } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { Container, InputContent } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ style, ...rest }: InputProps) {
  return (
    <Container style={style}>
      <InputContent {...rest} />
      <MagnifyingGlass weight="bold" size={20} />
    </Container>
  )
}
