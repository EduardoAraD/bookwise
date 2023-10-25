import { ChartLine, SignOut, Binoculars } from '@phosphor-icons/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { NavContent, ItemNav, ButtonSignOut, DrawerContainer } from './styles'
import logo from '../../assets/logo.png'

export function Drawer() {
  const router = useRouter()

  const user = {
    image: 'https://github.com/eduardoarad.png',
    name: 'Eduardo',
  }

  return (
    <DrawerContainer>
      <Image src={logo} alt="logo Bookwise" width={128} height={32} />
      <NavContent>
        <ul>
          <li>
            <ItemNav href="/home" selected={router.asPath === '/home'}>
              <div />
              <ChartLine size={24} />
              Início
            </ItemNav>
          </li>
          <li>
            <ItemNav href="/explorer" selected={router.asPath === '/explorer'}>
              <div />
              <Binoculars size={24} />
              Explorar
            </ItemNav>
          </li>
        </ul>
      </NavContent>
      <ButtonSignOut>
        {user ? (
          <>
            <Image src={user.image} alt={user.name} width={32} height={32} />
            {user.name}
            <SignOut weight="bold" size={20} />
          </>
        ) : (
          <>
            Fazer login <SignOut weight="bold" size={20} />
          </>
        )}
      </ButtonSignOut>
    </DrawerContainer>
  )
}
