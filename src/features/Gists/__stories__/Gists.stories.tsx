import { Gists, GistsProps } from '../Gists'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<GistsProps> = (args) => <Gists {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const GistsStory = {
  title: 'Components/Gists',
  component: Gists,
}

export default GistsStory
