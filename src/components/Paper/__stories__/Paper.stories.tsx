import { Paper, PaperProps } from '../Paper'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<PaperProps> = (args) => <Paper {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const PaperStory = {
  title: 'Components/Paper',
  component: Paper,
}

export default PaperStory
