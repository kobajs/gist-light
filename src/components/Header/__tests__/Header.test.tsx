import { render } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<Header label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
