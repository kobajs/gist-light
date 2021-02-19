import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useSearchGistsContext } from '../SearchGistsContext'

import * as S from './GistsList.styles'

export const GistsList: FC = () => {
  const { list, page, setPage, doSearch } = useSearchGistsContext()

  return (
    <InfiniteScroll
      dataLength={list.length} //This is important field to render the next data
      next={doSearch}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {list}
    </InfiniteScroll>
  )
}
