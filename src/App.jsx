
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { HomeBanner } from './components/HomeBanner';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Platform } from './pages/Platform';
import { ForeignExchange } from './pages/ForeignExchange';
import { Metals } from './pages/Metals';
import { Shares } from './pages/Shares';
import { Indices } from './pages/Indices';
import { Commodities } from './pages/Commodities';
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
            <Route path="/foreignExchange" element={<ForeignExchange />} />
            <Route path="/metals" element={<Metals />} />
            <Route path="/shares" element={<Shares />} />
            <Route path="/indices" element={<Indices />} />
            <Route path="/commodities" element={<Commodities />} />

          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
