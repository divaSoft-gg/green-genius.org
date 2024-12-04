import { useTranslation } from "react-i18next";
import CentredLayout from "../ui/centredLayout";
import { Image } from "@nextui-org/react";
import { Features } from "../../common/types";

export default function AboutUsSection() {
  const { t } = useTranslation();
  const features: Features[] = t("featuresSection.features", {
    returnObjects: true,
  }) as Features[];

  return (
    <section id="about-us" className="px-4 lg:px-0">
      <CentredLayout>
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-left">
            {t("aboutUsSection.title")}
          </h1>
          <p className="text-base text-gray-500 dark:text-white">
            {t("featuresSection.subtitle")}
          </p>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {features.map((element: Features, index: number) => (
              <div
                key={index}
                className="rounded-md border dark:border-0 gap-4 p-6 bg-[#F8FAFC] dark:bg-[#161616] flex flex-col"
              >
                <div className="min-h-16">
                  <Image
                    width={50}
                    src={element.icon}
                    className=" group-hover:scale-110 dark:invert dark:group-hover:invert-0"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold leading-loose text-black uppercase dark:text-white">
                    {element.title}
                  </h1>

                  <p className="text-sm leading-tight text-black opacity-55 dark:text-white">
                    {element.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CentredLayout>
    </section>
  );
}
