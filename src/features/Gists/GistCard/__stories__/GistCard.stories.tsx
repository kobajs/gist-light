import { GistCard, GistCardProps } from '../GistCard'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<GistCardProps> = (args) => <GistCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
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

const GistCardStory = {
  title: 'Features/Gists/GistCard',
  component: GistCard,
}

export default GistCardStory
