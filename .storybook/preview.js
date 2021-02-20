import { Normalize } from 'styled-normalize'
import { Layout } from '../src/components/Layout'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
export const decorators = [
  (Story) => (
    <Layout>
      <Normalize />
      <Story />
    </Layout>
  ),
]
