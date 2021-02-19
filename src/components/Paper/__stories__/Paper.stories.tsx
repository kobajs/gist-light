import { Paper } from '../Paper'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => (
  <Paper {...args}>
    <h1>My Paper</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown
    </p>
  </Paper>
)

export const Primary = Template.bind({})

Primary.args = {}

const PaperStory = {
  title: 'Components/Paper',
  component: Paper,
}

export default PaperStory
