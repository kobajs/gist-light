import { render } from '@testing-library/react'
import { Gists } from '../Gists'

describe('Gists', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<Gists label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
