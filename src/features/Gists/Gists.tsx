import { FC } from 'react'
import { SearchField } from '../../components'

import * as S from './Gists.styles'
import { GistsList } from './GistsList'
import { SearchGistsProvider } from './SearchGistsContext'

export const Gists: FC = () => {
  return (
    <SearchGistsProvider>
      <S.Wrapper>
        <SearchField />
        <GistsList />
      </S.Wrapper>
    </SearchGistsProvider>
  )
}
