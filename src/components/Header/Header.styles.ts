import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media (min-width: 700px) {
    margin-top: initial;
  }
`

export const Img = styled.img`
  width: 200px;
`

export const H1 = styled.h1`
  margin-bottom: 0;
`
