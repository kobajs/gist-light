import { Header, Layout } from './components'
import { Gists } from './features/Gists'
import { SearchGistsProvider } from './features/Gists/SearchGistsContext'

function App() {
  return (
    <Layout>
      <Header />
      <SearchGistsProvider>
        <Gists />
      </SearchGistsProvider>
    </Layout>
  )
}

export default App
