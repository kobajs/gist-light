import { Header, Layout } from './components'
import { Gists } from './features/Gists'

function App() {
  return (
    <Layout>
      <Header />
      <Gists />
    </Layout>
  )
}

export default App
