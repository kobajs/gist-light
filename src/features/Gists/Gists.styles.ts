import styled from 'styled-components'
import { SearchField } from '../../components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  ${SearchField} {
    margin-bottom: 40px;
  }
`

export const Error = styled.h3`
  color: red;
  max-width: 500px;
`
