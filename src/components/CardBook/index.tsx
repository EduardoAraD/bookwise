import { CardBookContainer, CardInfo, ImageContent } from './styles'
import bookImg from '../../assets/books/Book.png'
import { Star } from '@phosphor-icons/react'

interface CardBookProps {
  noteStar: number
}

export function CardBook({ noteStar }: CardBookProps) {
  const stars = Array.from(Array(5).keys()).map((i) =>
    i <= noteStar - 1 ? 'fill' : 'regular',
  )

  return (
    <CardBookContainer>
      <ImageContent src={bookImg} alt="" width={64} height={94} />
      <CardInfo>
        <p>Nome do Libro</p>
        <span>Autor</span>
        <div className="stars">
          {stars.map((star, index) => (
            <Star key={`${star}-${index}`} weight={star} />
          ))}
        </div>
      </CardInfo>
    </CardBookContainer>
  )
}
