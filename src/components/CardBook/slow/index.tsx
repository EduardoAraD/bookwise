import { DivStars } from '../../DivStars'

import { CardBookContainer, ImageContent } from '../styles'
import { CardInfo } from './styles'
import bookImg from '../../../assets/books/Book.png'

interface CardBookProps {
  noteStar: number
}

export function CardBookSlow({ noteStar }: CardBookProps) {
  return (
    <CardBookContainer>
      <ImageContent src={bookImg} alt="" width={64} height={94} />
      <CardInfo>
        <p>Nome do Libro</p>
        <span>Autor</span>
        <div className="stars">
          <DivStars numberStars={noteStar} />
        </div>
      </CardInfo>
    </CardBookContainer>
  )
}
