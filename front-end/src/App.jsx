import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Models from './pages/Models'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/styles.scss';
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/models' element={<Models/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
