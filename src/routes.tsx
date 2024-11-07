import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ErrorFallback } from './components/ui/ErrorFallback'
import { AppContainer } from './components/ui/AppContainer'
import Home from './views/Home'
import ContactUs from './views/contactUs'
import FAQPage from './views/FAQ'
import PricingPage from './views/pricing'

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
    {
        path: '/faq',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <FAQPage /> }]
    },
    {
        path: '/pricing',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <PricingPage /> }]
    }

]
export const router = createBrowserRouter([...publicRoutes])