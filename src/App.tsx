import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/pages/Home'
import Layout from './components/layouts'
import NotFound from './components/pages/NotFound'
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'
import FAQ from './components/pages/FAQ'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
