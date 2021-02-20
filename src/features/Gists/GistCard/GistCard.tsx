import { FC } from 'react'
import { Gist } from '../../../api/GistAPI.types'
import { Avatar } from '../../../components/Avatar'
import { Paper } from '../../../components/Paper'
import { Tag } from '../../../components/Tag'

import * as S from './GistCard.styles'

export type GistCardProps = Gist

export const GistCard: FC<GistCardProps> = (gist) => {
  return (
    <Paper>
      <a href={gist.url} target="_blank" rel="noopener noreferrer">
        <S.H1>{gist.description || 'No Description'}</S.H1>
      </a>

      <p>Comments: {gist.comments}</p>

      <S.ForksWrapper>
        <strong>Forks: </strong>
        {gist.forks.map((fork) => (
          <Avatar
            key={fork.username}
            img={fork.avatar}
            name={fork.username}
            url={fork.url}
          />
        ))}
      </S.ForksWrapper>

      <S.TagsWrapper>
        {gist.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.TagsWrapper>
    </Paper>
  )
}
