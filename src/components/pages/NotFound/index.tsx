import { Helmet } from "react-helmet-async"
import Button from "../../common/Button"

 
 function NotFound() {
  return (
    <section className="min-h-screen bg-white  flex items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-11 lg:px-6">
          <Helmet>
            <title>404 Not Found</title>
          </Helmet>
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-text-primary ">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Button to="/" className="inline-flex text-white bg-bg-primary hover:bg-bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</Button>
        </div>   
    </section>
  )
}

export default NotFound