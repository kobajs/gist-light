import { render } from '@testing-library/react'
import { Avatar } from '../Avatar'

describe('Avatar', () => {
  it('should render avatar correctly', () => {
    const { getByAltText } = render(
      <Avatar
        img="https://avatars.githubusercontent.com/u/8266115?v=4"
        name="clausgehrke"
        url="https://github.com/clausgehrke"
      />
    )
    const img = getByAltText('clausgehrke')
    expect(img).toBeInTheDocument()
  })
})
