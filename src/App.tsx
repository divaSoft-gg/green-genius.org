import { useState } from 'react'
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ui/ErrorFallback'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import LoadingFallback from './components/ui/loader'
import { router } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <Helmet
          titleTemplate="Diva Software | %s"
          defaultTitle=""
        />
        <RouterProvider
          router={router}
          fallbackElement={<LoadingFallback />}
        />
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
