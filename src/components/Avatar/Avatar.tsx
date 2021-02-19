import { FC } from 'react'

import * as S from './Avatar.styles'

export type AvatarProps = {
  title: string
  url: string
  img: string
}

export const Avatar: FC<AvatarProps> = ({ title, url, img }) => {
  return (
    <S.Link href={url}>
      <img src={img} alt={title} />
    </S.Link>
  )
}
