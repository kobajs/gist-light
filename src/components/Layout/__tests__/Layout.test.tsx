import { render } from '@testing-library/react'
import { Layout } from '../Layout'

describe('Layout', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<Layout label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
