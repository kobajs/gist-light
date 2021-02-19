import { createContext, FC, useCallback, useContext, useState } from 'react'
import { GistAPI } from '../../api/GistAPI'
import { Gist } from '../../api/GistAPI.types'

type SearchGistsContextValues = {
  list: Gist[]
  page: number
  incrementPage: () => void
  search: string
  setSearch: (search: string) => void
  doSearch: () => void
}

const SearchGistsContext = createContext<SearchGistsContextValues>({
  list: [],
  page: 0,
  incrementPage: () => null,
  search: '',
  setSearch: () => null,
  doSearch: () => null,
})

export const useSearchGistsContext = () => useContext(SearchGistsContext)

export const SearchGistsProvider: FC = ({ children }) => {
  const per_page = 10
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [list, setList] = useState<Gist[]>([])

  const doSearch = useCallback(async () => {
    try {
      const gists = await new GistAPI().searchByUser(search, { page, per_page })
      setList(gists)
    } catch (e) {
      console.log(e)
      throw e
    }
  }, [search, page])

  const contextValues = {
    list,
    page,
    incrementPage: () => setPage(page + 1),
    search,
    setSearch,
    doSearch,
  }

  return (
    <SearchGistsContext.Provider value={contextValues}>
      {children}
    </SearchGistsContext.Provider>
  )
}
