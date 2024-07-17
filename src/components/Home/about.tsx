export default function About() {
    return (
        <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:w-1/2">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Green Genius</h2>
                <p className="mb-4">
                    Green Genius is dedicated to helping businesses in general and textile specifically reduce their carbon footprint. Our platform provides comprehensive tools to track, manage, and report carbon emissions across various operations. We aim to empower companies to make informed decisions for a sustainable future.
                </p>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:w-1/2">
                <img className="w-full rounded-lg" src="/Girl-working-on-reducing-carbon-dioxide.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/Young-man-watching-carbon-footprint-report.png" alt="office content 2" />
                </div>
            </div>
        </section>
    );
}