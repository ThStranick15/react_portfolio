import {Routes, Route} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'

function Navigation() {
    return(
        <div className='flex-1 m-3'>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
        </div>
    )
}

export default Navigation