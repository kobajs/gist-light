import { Header } from '../Header'
import { Story } from '@storybook/react/types-6-0'

const Template: Story = (args) => <Header {...args} />

export const Primary = Template.bind({})

const HeaderStory = {
  title: 'Components/Header',
  component: Header,
}

export default HeaderStory
