import { Image, Link } from "@nextui-org/react";
import { NavItemsProps } from "../../../../common/types";
import CenteredLayout from "../../../ui/centredLayout";
import ThemeToggler from "../../../shared/themeToggler";
import LanguageDropdown from "../../../shared/languageDorpdown";

export default function DesktopNavBar({ navItems }: Readonly<{ navItems: NavItemsProps[] }>) {


    return (
        <div className="sticky top-0 w-full bg-white border-gray-300">
            <CenteredLayout>
                <nav className="flex flex-row items-center justify-between h-16">
                    <Link className="flex items-center gap-3">
                        <Image src="https://i.imgur.com/V7Mg70E.png" className="w-24" />
                    </Link>
                    <ul className="flex flex-row items-center justify-between gap-4 font-medium">
                        {
                            navItems.map((element: NavItemsProps, index: number) =>
                                <li key={index} className='py-4'>
                                    <Link href={element.link} className='block text-gray-900 hover:text-blue-700' >
                                        {element.label}
                                    </Link>
                                </li>
                            )
                        }
                        <li>
                            <ThemeToggler />
                        </li>
                        <li>
                            <LanguageDropdown />

                        </li>
                    </ul>
                </nav>
            </CenteredLayout>
        </div>
    )
}