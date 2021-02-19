import { render } from '@testing-library/react'
import { Tag } from '../Tag'

describe('Tag', () => {
  it('should render text correctly', () => {
    const { getByText } = render(<Tag>My Test</Tag>)
    const tag = getByText('My Test')
    expect(tag).toBeInTheDocument()
  })
})
