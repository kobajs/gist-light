import { FC } from 'react'

import * as S from './Gists.styles'
import { GistsList } from './GistsList'
import { SearchGistsProvider } from './SearchGistsContext'
import { UserGistsSearchField } from './UserGistsSearchField'

export const Gists: FC = () => {
  return (
    <SearchGistsProvider>
      <S.Wrapper>
        <UserGistsSearchField />
        <GistsList />
      </S.Wrapper>
    </SearchGistsProvider>
  )
}
