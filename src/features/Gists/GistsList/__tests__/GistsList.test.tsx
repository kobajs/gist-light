import { render } from '@testing-library/react'
import { GistsList } from '../GistsList'

describe('GistsList', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<GistsList label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
