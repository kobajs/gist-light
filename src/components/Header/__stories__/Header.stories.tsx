import { Header, HeaderProps } from '../Header'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Test Label',
}

const HeaderStory = {
  title: 'Components/Header',
  component: Header,
}

export default HeaderStory
