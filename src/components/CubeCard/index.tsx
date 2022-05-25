import type { FC } from 'react'
import type Cube from '@models/cube'
import { CubeCardContainer, CubeImage, CubeTitle, CubeNote } from './styles'

interface CubeCardProps {
  cube: Cube
}

const CubeCard: FC<CubeCardProps> = ({ cube }) => {
  return (
    <CubeCardContainer>
      <CubeImage source={cube.image} />
      <CubeTitle>{cube.title}</CubeTitle>
      {cube.note && <CubeNote>{cube.note}</CubeNote>}
    </CubeCardContainer>
  )
}

export default CubeCard
