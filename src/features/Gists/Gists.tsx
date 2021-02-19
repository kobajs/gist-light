import { FC } from 'react'

import * as S from './Gists.styles'

export type GistsProps = {
  label: string
}

export const Gists: FC<GistsProps> = ({ label }) => {
  return (
    <S.Wrapper>
      <button>{label}</button>
    </S.Wrapper>
  )
}
