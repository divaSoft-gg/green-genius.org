import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HelmetProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
