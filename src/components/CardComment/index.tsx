import Image from 'next/image'
import {
  CardCommentContainer,
  ContentAvatar,
  ContentBook,
  ContentBookInfo,
  ContentInfo,
  VerMais,
} from './styles'
import { Star } from '@phosphor-icons/react'
import bookImg from '../../assets/books/Book.png'
import { Avatar } from '../Avatar'

interface CardCommentProps {
  noteStar: number
}

export function CardComment({ noteStar }: CardCommentProps) {
  const user = {
    image: 'https://github.com/eduardoarad.png',
    name: 'Eduardo',
  }

  const stars = Array.from(Array(5).keys()).map((i) =>
    i <= noteStar - 1 ? 'fill' : 'regular',
  )

  const text =
    'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget asjd asjkdbaknsdba jkhbsdhjahjgas  jhg a ahjda as as das das das d asdasdjqkwhgqwasd asd asdkasd adajkda qehjuwq1heasbdjkasd uaehqwe adjuahsd  1eqw adasd qw erqweq weqweq weqw eqwe asf ag w1 ef1 vwerv wevrtqr vjkqhrv  rh'

  console.log(text.length)

  const maxCaracterText = 200
  const textHasPlus200Caracter = text.length > maxCaracterText
  const textView = textHasPlus200Caracter
    ? `${text.slice(0, maxCaracterText)} ...`
    : text

  return (
    <CardCommentContainer>
      <ContentInfo>
        <ContentAvatar>
          <Avatar src={user.image} alt={user.name} width={32} height={32} />
          <div className="avatar-info">
            <p>Eduardo</p>
            <span>Hoje</span>
          </div>
        </ContentAvatar>
        <div className="stars">
          {stars.map((star, index) => (
            <Star key={`${star}-${index}`} weight={star} />
          ))}
        </div>
      </ContentInfo>
      <ContentBook>
        <Image src={bookImg} alt="" width={108} height={152} />
        <ContentBookInfo>
          <h4>Nome do Livro</h4>
          <span>Nome do Autor</span>

          <p>
            {textView} {textHasPlus200Caracter && <VerMais>ver mais</VerMais>}
          </p>
        </ContentBookInfo>
      </ContentBook>
    </CardCommentContainer>
  )
}
