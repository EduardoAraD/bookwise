import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

import { ContainerButton, TextButton } from './styles'
import googleSvg from '../../assets/googleIcon.svg'
import githubSvg from '../../assets/githubIcon.svg'
import rocketSvg from '../../assets/rocket.svg'

interface ButtonLoginProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeLogin: 'google' | 'github' | 'visitant'
  title: string
}

export function ButtonLogin({ title, typeLogin, ...rest }: ButtonLoginProps) {
  const imageSvg =
    typeLogin === 'github'
      ? githubSvg
      : typeLogin === 'google'
      ? googleSvg
      : rocketSvg

  return (
    <ContainerButton {...rest}>
      <Image src={imageSvg} alt="google" width={32} height={32} />
      <TextButton>{title}</TextButton>
    </ContainerButton>
  )
}
