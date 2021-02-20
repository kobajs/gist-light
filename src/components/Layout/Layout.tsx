import styled from 'styled-components'

export const Layout = styled.div`
  padding: 16px;
  font-family: 'Courier New', Courier, monospace;
  background-color: #eee;
  min-height: 100vh;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 700px) {
    padding: 80px;
  }
`
