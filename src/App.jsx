
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { HomeBanner } from './components/HomeBanner';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Platform } from './pages/Platform';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBanner />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/platform' element={<Platform />} />



          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
