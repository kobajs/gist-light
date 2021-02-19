import { FC } from 'react'

import * as S from './SearchField.styles'

export type SearchFieldProps = {}

export const SearchField: FC<SearchFieldProps> = ({}) => {
  return (
    <S.Wrapper>
      <input placeholder="Search" />
    </S.Wrapper>
  )
}
