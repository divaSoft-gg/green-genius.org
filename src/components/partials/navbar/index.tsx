import { useMediaQuery } from "react-responsive"
import { useTranslation } from "react-i18next";
import { NavItemsProps } from "../../../common/types";
import DesktopNavBar from "./desktop";
import MobileNavbar from "./mobile";


export default function NavigationBar() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const { t } = useTranslation()
    const navItems: NavItemsProps[] = t('navbar', { returnObjects: true }) as NavItemsProps[];
    return (
        isMobile ? <MobileNavbar navItems={navItems} /> : <DesktopNavBar navItems={navItems} />


    )
}