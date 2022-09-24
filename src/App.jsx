
import './assets/App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Mains } from './components/main'

function App() {
  return (
    <div className="App">
      <div id='container'>

      <Header />
      <Mains  />
      <Footer />
      </div>
    </div>
  )
}

export default App
