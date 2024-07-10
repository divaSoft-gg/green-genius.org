import ArrowLeft from "@/components/ArrowLeft";

export default function Hero() {
    return (
        <section className="relative isolate px-6  lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 h-[700px] sm:h-[700px]" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] sm:left-[calc(50%+30rem)] aspect-[1155/678] w-[32.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffcc80] to-[#f398f7] opacity-65 sm:w-[72.1875rem]" />
            </div>
            <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> Empower Your Business with Sustainable Solutions</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Track, manage, and reduce your carbon footprint with Green Genius.</p>
                    <a href="#"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Contact Our Team to Get Started
                        <ArrowLeft />
                    </a>
                    <a href="#"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Speak to Sales
                    </a>
                </div>
                <div className="mt-4 md:mt-6 lg:mt-12 lg:col-span-5 lg:flex h-96 w-full justify-center items-center">
                    <img src="/carbon-footprint-icon.png" className="h-full w-full object-contain" alt="Carbon Footprint Icon" />
                </div>
            </div>
        </section>
    );
}