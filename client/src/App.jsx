import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App() {

  return (
    <main className='flex flex-col'>
      <Header/>

      <div className='flex-1 m-3'>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      </div>
      

      <Footer/>
    </main>
  )
}

export default App
