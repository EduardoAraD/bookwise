import { User } from '@phosphor-icons/react'

import { CardBookExpansive } from '../../components/CardBook'
import { Drawer } from '../../components/Drawer'
import { Input } from '../../components/Input'
import { ProfileAvatar } from './components/ProfileAvatar'

import { Title } from '../home/styles'
import { Content, ProfileContainer, DualList, ItemCardBook } from './styles'

export default function Profile() {
  return (
    <ProfileContainer>
      <Drawer />
      <Content>
        <Title>
          <User size={32} />
          <p>Perfil</p>
        </Title>
        <DualList>
          <div className="list">
            <Input placeholder="Buscar livro avaliado" />

            <ItemCardBook>
              <time>Há 2 dias</time>
              <CardBookExpansive />
            </ItemCardBook>
            <ItemCardBook>
              <time>Há 5 dias</time>
              <CardBookExpansive />
            </ItemCardBook>
            <ItemCardBook>
              <time>Há 1 mês</time>
              <CardBookExpansive />
            </ItemCardBook>
          </div>
          <div className="list-sugest">
            <ProfileAvatar />
          </div>
        </DualList>
      </Content>
    </ProfileContainer>
  )
}
