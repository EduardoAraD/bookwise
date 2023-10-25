import { CaretRight, ChartLine } from '@phosphor-icons/react'
import { Drawer } from '../../components/Drawer'

import {
  Content,
  DivLastBook,
  DualList,
  HomeContainer,
  Title,
  TitleSugestion,
} from './styles'
import { CardComment } from '@/src/components/CardComment'
import { CardBook } from '@/src/components/CardBook'

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
                <CardComment noteStar={5} />
              </DivLastBook>
            )}

            <span>Avaliações mais recentes</span>
            <CardComment noteStar={2} />
            <CardComment noteStar={4} />
          </div>
          <div className="list-sugest">
            <TitleSugestion>
              <span>Livros populares</span>
              <button>
                Ver todos <CaretRight />
              </button>
            </TitleSugestion>
            <CardBook noteStar={2} />
            <CardBook noteStar={3} />
            <CardBook noteStar={5} />
          </div>
        </DualList>
      </Content>
    </HomeContainer>
  )
}
