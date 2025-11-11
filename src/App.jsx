
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { HomeBanner } from './components/HomeBanner';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBanner />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
