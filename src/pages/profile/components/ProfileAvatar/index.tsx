import {
  BookOpen,
  Books,
  UserList,
  BookmarkSimple,
} from '@phosphor-icons/react'

import { Avatar } from '../../../../components/Avatar'

import { Content, InfoContainer, Line, ProfileContent } from './styles'

export function ProfileAvatar() {
  return (
    <ProfileContent>
      <Avatar
        src="https://github.com/eduardoarad.png"
        alt=""
        width={72}
        height={72}
      />
      <h4>Nome do indivíduo</h4>
      <span>menbro desde 2019</span>

      <Line />
      <InfoContainer>
        <Content>
          <BookOpen size={32} />
          <div>
            <p>3853</p>
            <span>Páginas lidas</span>
          </div>
        </Content>
        <Content>
          <Books size={32} />
          <div>
            <p>10</p>
            <span>Livros avalidos</span>
          </div>
        </Content>
        <Content>
          <UserList size={32} />
          <div>
            <p>8</p>
            <span>Autores lidos</span>
          </div>
        </Content>
        <Content>
          <BookmarkSimple size={32} />
          <div>
            <p>Computação</p>
            <span>Categoria mais lida</span>
          </div>
        </Content>
      </InfoContainer>
    </ProfileContent>
  )
}
