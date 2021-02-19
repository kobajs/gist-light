import { render } from '@testing-library/react'
import { SearchField } from '../SearchField'

describe('SearchField', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<SearchField label="My Test" />)
    const buttonElement = getByText('My Test')
    expect(buttonElement).toBeInTheDocument()
  })
})
