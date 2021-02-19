import { Gists } from '../Gists'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => <Gists {...args} />

export const Primary = Template.bind({})

Primary.args = {}

const GistsStory = {
  title: 'Components/Gists',
  component: Gists,
}

export default GistsStory
