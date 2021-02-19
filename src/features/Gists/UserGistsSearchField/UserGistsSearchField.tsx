import { FC } from 'react'
import { SearchField } from '../../../components'
import { useSearchGistsContext } from '../SearchGistsContext'

export const UserGistsSearchField: FC = () => {
  const { search, setSearch, doSearch } = useSearchGistsContext()
  return (
    <SearchField
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        // e.keyCode deprecated
        if (e.key === 'Enter') {
          doSearch()
        }
      }}
    />
  )
}
