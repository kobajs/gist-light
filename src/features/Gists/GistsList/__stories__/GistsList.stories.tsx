import { GistsList, GistsListProps } from '../GistsList'
import { Story } from '@storybook/react/types-6-0'
import { Gist } from '../../../../api/GistAPI.types'

const Template: Story<GistsListProps> = (args) => <GistsList {...args} />

export const Primary = Template.bind({})

const gist: Gist = {
  id: '1221',
  description: 'Gist Description',
  comments: 2,
  url: 'https://youtube.com',
  tags: ['Javascript', 'Typescript', 'Python', 'Golang', 'MySQL'],
  forks: [
    {
      avatar: 'https://avatars.githubusercontent.com/u/8266115?v=4',
      username: 'clausgehrke',
      url: 'https://github.com/clausgehrke',
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/8266115?v=4',
      username: 'clausgehrke',
      url: 'https://github.com/clausgehrke',
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/8266115?v=4',
      username: 'clausgehrke',
      url: 'https://github.com/clausgehrke',
    },
  ],
}

const gistBuilder = (id: string): Gist => ({ ...gist, id })

Primary.args = {
  gists: Array(10)
    .fill(0)
    .map((_, index) => gistBuilder(index.toString())),
}

const GistsListStory = {
  title: 'Features/Gists/GistsList',
  component: GistsList,
}

export default GistsListStory
