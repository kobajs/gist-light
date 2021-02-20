import { createContext, FC, useCallback, useContext, useState } from 'react'
import { GistAPI } from '../../api/GistAPI'
import { Gist } from '../../api/GistAPI.types'

type SearchGistsContextValues = {
  isLoading: boolean
  error: string
  list: Gist[]
  search: string
  setSearch: (search: string) => void
  doSearch: () => void
}

const SearchGistsContext = createContext<SearchGistsContextValues>({
  isLoading: false,
  error: '',
  list: [],
  search: '',
  setSearch: () => null,
  doSearch: () => null,
})

export const useSearchGistsContext = () => useContext(SearchGistsContext)

export const SearchGistsProvider: FC = ({ children }) => {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [list, setList] = useState<Gist[]>([])

  const doSearch = useCallback(async () => {
    setIsLoading(true)
    setError('')
    setList([])

    try {
      const gists = await new GistAPI().searchByUser(search)
      setList(gists)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [search])

  return (
    <SearchGistsContext.Provider
      value={{ isLoading, error, list, search, setSearch, doSearch }}
    >
      {children}
    </SearchGistsContext.Provider>
  )
}
