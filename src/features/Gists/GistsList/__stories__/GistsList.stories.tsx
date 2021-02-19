import { GistsList } from '../GistsList'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => <GistsList {...args} />

export const Primary = Template.bind({})

Primary.args = {}

const GistsListStory = {
  title: 'Components/GistsList',
  component: GistsList,
}

export default GistsListStory
