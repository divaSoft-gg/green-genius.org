import SharedSection from '../../../common/SharedSection';

const About = () => {
    return (
        <SharedSection className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="font-light text-gray-500 sm:text-lg  lg:w-1/2">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">About Green Genius</h2>
                <p className="mb-4">
                    Green Genius is dedicated to helping businesses in general and textile specifically reduce their carbon footprint. Our platform provides comprehensive tools to track, manage, and report carbon emissions across various operations. We aim to empower companies to make informed decisions for a sustainable future.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:w-1/2">
                <img className="w-full rounded-lg" src="/Girl-working-on-reducing-carbon-dioxide.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/Young-man-watching-carbon-footprint-report.png" alt="office content 2" />
            </div>
        </SharedSection>
    );
}

export default About;
