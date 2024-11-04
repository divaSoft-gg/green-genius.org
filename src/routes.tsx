import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ErrorFallback } from './components/ui/ErrorFallback'
import { AppContainer } from './components/ui/AppContainer'
import Home from './views/Home'

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <Home /> }],
    }
]
export const router = createBrowserRouter([...publicRoutes])