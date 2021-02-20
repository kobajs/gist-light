import { FC } from 'react'
import { Gist } from '../../../api/GistAPI.types'
import { GistCard } from '../GistCard'
import * as S from './GistsList.styles'

export type GistsListProps = {
  gists: Gist[]
}

export const GistsList: FC<GistsListProps> = ({ gists }) => {
  return (
    <S.List>
      {gists.map((gist) => (
        <GistCard key={gist.id} {...gist} />
      ))}
    </S.List>
  )
}
