import { SearchField, SearchFieldProps } from '../SearchField'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<SearchFieldProps> = (args) => <SearchField {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const SearchFieldStory = {
  title: 'Components/SearchField',
  component: SearchField,
}

export default SearchFieldStory
