import {
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useReducer } from "react";
import { NavItemsProps } from "../../../../common/types";
import { scrollToTop } from "../../../../common/utils";
import ThemeToggler from "../../../shared/themeToggler";
import LanguageDropdown from "../../../shared/languageDorpdown";

export default function MobileNavbar({
  navItems,
}: Readonly<{ navItems: NavItemsProps[] }>) {
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      position="sticky"
      maxWidth="2xl"
    >
      <NavbarContent justify="start">
        <NavbarBrand className=" dark:invert">
          <Image src="https://i.imgur.com/V7Mg70E.png" className="w-28" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <ThemeToggler />
        <LanguageDropdown />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="pt-14">
        {navItems.map((item: NavItemsProps, index: number) => (
          <NavbarMenuItem key={`${index}`}>
            <Link
              color="foreground"
              href={item.link}
              onClick={() => {
                scrollToTop();
                setIsMenuOpen();
              }}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
