import { Avatar, AvatarProps } from '../Avatar'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  img: 'https://avatars.githubusercontent.com/u/8266115?v=4',
  name: 'clausgehrke',
  url: 'https://github.com/clausgehrke',
}

const AvatarStory = {
  title: 'Components/Avatar',
  component: Avatar,
}

export default AvatarStory
