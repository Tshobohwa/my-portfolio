import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <About />
      <Technologies/>
      <Projects />
      <Contacts />
    </div>
  )
}

export default App
