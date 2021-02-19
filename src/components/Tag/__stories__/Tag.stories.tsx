import { Tag } from '../Tag'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => <Tag {...args} />

export const Primary = Template.bind({})

Primary.args = {}

const TagStory = {
  title: 'Components/Tag',
  component: Tag,
}

export default TagStory
