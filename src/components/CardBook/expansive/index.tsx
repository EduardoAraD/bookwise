import { DivStars } from '../../DivStars'

import { ImageContent } from '../styles'
import { CardBookContainer, CardInfo } from './styles'
import bookImg from '../../../assets/books/Book.png'

export function CardBookExpansive() {
  return (
    <CardBookContainer>
      <div>
        <ImageContent src={bookImg} alt="" width={98} height={134} />
        <CardInfo>
          <h4>Nome do Livro - Title</h4>
          <span>Autor</span>
          <div className="star">
            <DivStars numberStars={4} />
          </div>
        </CardInfo>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla harum
        tempora ut quis commodi magnam perferendis maxime quos vel soluta? Esse
        magnam ullam inventore tempore delectus quo dignissimos ab alias!
      </p>
    </CardBookContainer>
  )
}
