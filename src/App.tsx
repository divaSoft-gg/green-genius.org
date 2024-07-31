import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Layout from './components/layouts'
import NotFound from './components/common/NotFound'
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'
import FAQ from './components/pages/FAQ'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
