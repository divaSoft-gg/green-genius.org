import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ErrorFallback } from './components/ui/ErrorFallback'
import { AppContainer } from './components/ui/AppContainer'
import Home from './views/Home'
import ContactUs from './views/contactUs'

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: '/contact-us',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <ContactUs /> }],
    },
]
export const router = createBrowserRouter([...publicRoutes])