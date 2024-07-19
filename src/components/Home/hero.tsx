import ButtonCTA from "./atoms/Button";

export default function Hero() {
    return (
        // <section className="relative isolate px-6 py-20  lg:px-8 ">
        //     <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 h-[700px] sm:h-[700px]"
        //         aria-hidden="true">
        //         <div
        //             className="relative left-[calc(50%-11rem)] sm:left-[calc(50%+30rem)] aspect-[1155/678] w-[32.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ECCBDE] via-[#FDE3BE] to-[#FBD7B7] opacity-70 sm:w-[72.1875rem]" />
        //     </div>

        //     <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12 justify-center">
        //         <div className="mr-auto place-self-center lg:col-span-7">
        //             <h1
        //                 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
        //                 Empower Your Business with <span className="text-primary">Sustainable Solutions</span></h1>
        //             <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
        //                 Track, manage, and reduce your carbon footprint with Green Genius.</p>
        //             <ButtonCTA />
        //         </div>
        //         <div className="mt-4 md:mt-6 lg:mt-12 lg:col-span-5 lg:flex h-96 ">
        //             <img src="/carbon-footprint-icon.png" className="h-full w-full object-contain"
        //                 alt="Carbon Footprint Icon" />
        //         </div>
        //     </div>
        // </section>
        <section className="relative bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover  text-black overflow-hidden">
            {/* <div className="absolute inset-0 bg-primary opacity-50"></div> */}
            
            
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* <!-- Left Side: Company Info --> */}
                    <div className="w-full md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Innovate.<br />Transform.<br />Succeed.
                        </h1>
                        <p className="text-xl mb-8 text-gray-400">Track, manage, and reduce your carbon footprint with Green Genius.</p>
                        <ButtonCTA ClassName={"bg-primary text-white"} />
                        
                    </div>
                    
                    {/* <!-- Right Side: Features --> */}
                    <div className="w-full md:w-1/2 md:pl-12 ">
                        <div className="mt-4 md:mt-6 lg:mt-12 lg:col-span-5 lg:flex  ">
                            <img src="/carbon-footprint.png" className="h-full w-full object-contain "
                            alt="Carbon Footprint Icon" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Decorative Element --> */}
            <div className="absolute bottom-0 left-0 right-0 ">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                </svg>
            </div>
        </section>
    );
}