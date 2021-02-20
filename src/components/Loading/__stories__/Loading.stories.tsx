import { Loading, LoadingProps } from '../Loading'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<LoadingProps> = (args) => <Loading {...args} />

export const Primary = Template.bind({})

Primary.args = {
  width: 80,
  height: 80,
}

const LoadingStory = {
  title: 'Components/Loading',
  component: Loading,
}

export default LoadingStory
