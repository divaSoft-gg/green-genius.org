import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Layout from './components/layouts'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App