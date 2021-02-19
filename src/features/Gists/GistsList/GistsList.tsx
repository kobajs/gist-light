import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Avatar } from '../../../components/Avatar'
import { Paper } from '../../../components/Paper'
import { Tag } from '../../../components/Tag'

import { useSearchGistsContext } from '../SearchGistsContext'

import * as S from './GistsList.styles'

export const GistsList: FC = () => {
  const { list, incrementPage, doSearch } = useSearchGistsContext()

  if (list.length === 0) return null

  return (
    <InfiniteScroll
      dataLength={list.length} //This is important field to render the next data
      next={() => {
        incrementPage()
        doSearch()
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {list.map((gist) => (
        <Paper key={gist.id} as="a" href={gist.url}>
          <h1>{gist.description}</h1>
          <p>{gist.comments}</p>
          {gist.forks.map((fork) => (
            <Avatar
              key={fork.username}
              img={fork.avatar}
              name={fork.username}
              url={fork.url}
            />
          ))}
          {gist.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Paper>
      ))}
    </InfiniteScroll>
  )
}
