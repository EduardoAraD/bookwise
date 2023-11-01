import { Star } from '@phosphor-icons/react'

import { Container } from './styles'

interface DivStarsProps {
  numberStars: number
}

export function DivStars({ numberStars }: DivStarsProps) {
  const stars = Array.from(Array(5).keys()).map((i) =>
    i <= numberStars - 1 ? 'fill' : 'regular',
  )

  return (
    <Container>
      {stars.map((star, index) => (
        <Star key={`${star}-${index}`} weight={star} />
      ))}
    </Container>
  )
}
