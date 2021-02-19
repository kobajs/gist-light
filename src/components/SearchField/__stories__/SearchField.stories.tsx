import { SearchField } from '../SearchField'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => <SearchField {...args} />

export const Primary = Template.bind({})

Primary.args = {}

const SearchFieldStory = {
  title: 'Components/SearchField',
  component: SearchField,
}

export default SearchFieldStory
