import { CaretRight, ChartLine } from '@phosphor-icons/react'

import { CardBookSlow, CardBookBase } from '../../components/CardBook'
import { CardBookWithAvatar } from '../../components/CardBookWithAvatar'
import { Drawer } from '../../components/Drawer'

import {
  Content,
  DivLastBook,
  DualList,
  HomeContainer,
  Title,
  TitleSugestion,
} from './styles'

export default function Home() {
  const isLogged = true

  return (
    <HomeContainer>
      <Drawer />
      <Content>
        <Title>
          <ChartLine size={32} />
          <p>Início</p>
        </Title>
        <DualList>
          <div className="list">
            {isLogged && (
              <DivLastBook>
                <TitleSugestion>
                  <span>Sua última leitura</span>
                  <button>
                    Ver todos <CaretRight />
                  </button>
                </TitleSugestion>
                <CardBookBase />
              </DivLastBook>
            )}

            <span>Avaliações mais recentes</span>
            <CardBookWithAvatar noteStar={2} />
            <CardBookWithAvatar noteStar={4} />
          </div>
          <div className="list-sugest">
            <TitleSugestion>
              <span>Livros populares</span>
              <button>
                Ver todos <CaretRight />
              </button>
            </TitleSugestion>
            <CardBookSlow noteStar={2} />
            <CardBookSlow noteStar={3} />
            <CardBookSlow noteStar={5} />
          </div>
        </DualList>
      </Content>
    </HomeContainer>
  )
}
