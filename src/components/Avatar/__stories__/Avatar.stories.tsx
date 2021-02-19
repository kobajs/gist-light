import { Avatar, AvatarProps } from '../Avatar'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const AvatarStory = {
  title: 'Components/Avatar',
  component: Avatar,
}

export default AvatarStory
