import { Tag, TagProps } from '../Tag'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<TagProps> = (args) => <Tag {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const TagStory = {
  title: 'Components/Tag',
  component: Tag,
}

export default TagStory
