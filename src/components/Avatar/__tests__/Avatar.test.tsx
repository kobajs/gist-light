import { render } from '@testing-library/react'
import { Avatar } from '../Avatar'

describe('Avatar', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<Avatar label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
