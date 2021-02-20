import { FC } from 'react'
import { SearchField, Loading } from '../../components'

import * as S from './Gists.styles'
import { GistsList } from './GistsList'
import { useSearchGistsContext } from './SearchGistsContext'

export const Gists: FC = () => {
  const {
    list,
    search,
    setSearch,
    doSearch,
    error,
    isLoading,
  } = useSearchGistsContext()
  return (
    <S.Wrapper>
      <SearchField
        placeholder="Search by username"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        onKeyDown={(e) => {
          // e.keyCode deprecated
          if (e.key === 'Enter') {
            doSearch()
          }
        }}
      />
      {isLoading && <Loading />}
      {error && <S.Error>{error}</S.Error>}
      <GistsList gists={list} />
    </S.Wrapper>
  )
}
