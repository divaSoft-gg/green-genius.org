import FeatureCard from "@/components/Home/atoms/FeatureCard";
import { features } from "@/lib/constant";

export default function Feature() {
    return (
      <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center ">
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Designed for business teams like yours
          </h2>
          <p className="text-gray-500 sm:text-xl ">
            Here at Green Genius, we focus on sustainable practices that help your business reduce its carbon footprint and contribute to a healthier planet.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
    </section>
    );
}

