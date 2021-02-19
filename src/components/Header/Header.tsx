import { FC } from 'react'

import GithubLogo from '../../assets/images/github_icon.png'

import * as S from './Header.styles'

export type HeaderProps = {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <S.Wrapper>
      <img
        src={GithubLogo}
        alt="Github Logo - anthropomorphized octocat with five octopus-like arms"
      />
    </S.Wrapper>
  )
}
