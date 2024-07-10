"use client";

import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import Link from 'next/link';

const Navbare = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = {
      "Home":"/",
      "Pricing":"#",
      "Blog ":"#",
      "Contact ":"test",
    };
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className='w-full  flex-col shadow-slate-400 navbar' >
          <NavbarContent >
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <p className="font-bold text-inherit">Green-Genius</p>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {Object.entries(menuItems).map(([key, value], index) => (
              <NavbarItem key={`${key}-${value}`}>
                <Link color="foreground" href={`${value}`}
                >
                  {key}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end">
            {/* <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem> */}
          </NavbarContent>
          <NavbarMenu>
            {Object.entries(menuItems).map(([key, value], index) => (
              <NavbarMenuItem key={`${key}-${value}`}>
                <Link
                  color={
                    "foreground"
                  }
                  className="w-full"
                  href={`${value}`}
                >
                  {key}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
    );
};

export default Navbare;
