import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ui/ErrorFallback'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import LoadingFallback from './components/ui/loader'
import { router } from './routes'

function App() {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <Helmet
          titleTemplate="Green Genius | %s"
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
