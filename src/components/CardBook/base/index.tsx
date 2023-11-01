import { DivStars } from '../../DivStars'

import { CardBookContainer, ImageContent } from '../styles'
import { CardInfo } from './styles'
import bookImg from '../../../assets/books/Book.png'

export function CardBookBase() {
  return (
    <CardBookContainer>
      <ImageContent src={bookImg} alt="" width={108} height={152} />
      <CardInfo>
        <div>
          <time>Há 2 dias</time>
          <DivStars numberStars={2} />
        </div>
        <h4>Title</h4>
        <span>Nome do Autor</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          fugiat porro, eligendi praesentium rerum labore qui necessitatibus
          facere reprehenderit molestias officiis molestiae maxime optio
          similique pariatur accusamus vel debitis! Totam.
        </p>
      </CardInfo>
    </CardBookContainer>
  )
}
