import { Layout } from '../Layout'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => <Layout {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const LayoutStory = {
  title: 'Components/Layout',
  component: Layout,
}

export default LayoutStory
