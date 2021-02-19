import { FC } from 'react'

import GithubLogo from '../../assets/images/github_icon.png'

import * as S from './Header.styles'

export const Header: FC = () => {
  return (
    <S.Wrapper>
      <S.Img
        src={GithubLogo}
        alt="Github Logo - anthropomorphized octocat with five octopus-like arms"
      />
    </S.Wrapper>
  )
}
