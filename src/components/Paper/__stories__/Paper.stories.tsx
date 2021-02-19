import { Paper } from '../Paper'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => <Paper {...args} />

export const Primary = Template.bind({})

Primary.args = {}

const PaperStory = {
  title: 'Components/Paper',
  component: Paper,
}

export default PaperStory
