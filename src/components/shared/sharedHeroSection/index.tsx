import { Button, Image, Link } from "@nextui-org/react";
import { useTheme } from "../../../hooks/useTheme";
import { handleScrollToSection } from "../../../common/utils";
import CentredLayout from "../../ui/centredLayout";

export default function SharedHeroSection({ title, paragraph, buttonText, imagesPath }: Readonly<{ title: string, paragraph: string, imagesPath: string[], buttonText?: string }>) {
    const { theme } = useTheme()

    return (
        <section id="hero-section">

            <CentredLayout>
                <div className="flex flex-row justify-between w-full gap-8 px-4 my-16 dark lg:p-0">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl tracking-tight text-left lg:text-6xl lg:max-w-2xl lg:px-0 light:text-black">
                            {title}
                        </h1>

                        <p className="max-w-2xl text-lg font-light text-justify lg:text-left lg:px-0 light:text-gray-300">
                            {paragraph}
                        </p>
                        {buttonText && (
                            <Button variant="shadow" color="default" size="md" className="self-center lg:self-start w-min" as={Link}
                                onClick={() => { handleScrollToSection('hero-section') }}
                            >
                                {buttonText}
                            </Button>
                        )}

                    </div>
                    {imagesPath.map((element, index) => (
                        imagesPath.length > 1 ?
                            <div key={index} className="flex flex-col w-2/6 gap-4">
                                <Image src={element} alt="Hero Section Image" className={`!-z-10 pointer-events-none hidden lg:block grayscale ${theme === 'dark' ? 'invert' : ''}`} />

                            </div>
                            :
                            <div key={index} className="w-3/6">
                                <Image src={element} alt="Hero Section Image" className={`!-z-10 pointer-events-none hidden lg:block grayscale w-full  ${theme === 'dark' ? 'invert' : ''}`} />
                            </div>

                    ))}

                </div>
            </CentredLayout>
        </section>
    )



}