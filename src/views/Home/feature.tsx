import FeatureCard from "@/components/FeatureCard";

export default function Feature() {
    return (
      <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center" >
      <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Green Genius, we focus on sustainable practices that help your business reduce its carbon footprint and contribute to a healthier planet.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">

          {/* Supply Management */}
          <FeatureCard
            icon={
              <svg className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            }
            title="Sustainable Supply Management"
            description="Manage and track carbon-related purchases made by your facility, ensuring sustainable sourcing and reducing your overall carbon footprint."
          />

          {/* Manufacturing Order Management */}
          <FeatureCard
            icon={
              <svg className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h3a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
              </svg>
            }
            title="Emission Source Tracking"
            description="Define and monitor the different footprints across your production chain to identify opportunities for reducing your carbon emissions."
          />

          {/* Eco-Friendly Transportation */}
          <FeatureCard
            icon={
              <svg className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 3a1 1 0 000 2v8a2 2 0 002 2h8a2 2 0 002-2V5a1 1 0 000-2H4zm1 5a1 1 0 100 2h2a1 1 0 000-2H5zM8 6a1 1 0 000 2h4a1 1 0 000-2H8z" clipRule="evenodd"></path>
              </svg>
            }
            title="Track Transportation"
            description="Optimize and manage all CO2 mession related to your facility, focusing on reducing emissions and improving efficiency."
          />

          {/* Comprehensive Waste Management */}
          <FeatureCard
            icon={
              <svg className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-.993.883L9 3v1H7a1 1 0 000 2h6a1 1 0 100-2h-2V3a1 1 0 00-1-1zm-3 5a1 1 0 00-.993.883L6 8v8a1 1 0 001.993.117L8 16v-8a1 1 0 00-1-1zm8 0a1 1 0 00-.993.883L14 8v8a1 1 0 001.993.117L16 16v-8a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
            }
            title="Comprehensive Waste Management"
            description="Efficiently manage and reduce facility waste, ensuring proper disposal and recycling to minimize environmental impact."
          />

          {/* Carbon Footprint Analysis */}
          <FeatureCard
            icon={
              <svg className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-6-4H4zm6 1.5L16.5 8H10V3.5zM3 6V4a1 1 0 0 1 1-1h4v5h7v10H4a1 1 0 0 1-1-1V6zm3 5h2v2H6v-2zm0 4h8v2H6v-2z" />
              </svg>
            }
            title="Carbon Footprint Analysis"
            description="Calculate your facility's CO2 footprint and generate detailed reports to monitor progress towards sustainability goals and identify areas for improvement."
          />
        </div>
      </div>
    </section>
    );
}

