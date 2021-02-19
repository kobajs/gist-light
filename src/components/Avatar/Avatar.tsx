import { FC } from 'react'

import * as S from './Avatar.styles'

export type AvatarProps = {
  name: string
  url: string
  img: string
}

export const Avatar: FC<AvatarProps> = ({ name, url, img }) => {
  return (
    <S.Link href={url}>
      <img src={img} alt={name} />
    </S.Link>
  )
}
