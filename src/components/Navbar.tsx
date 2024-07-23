"use client";

import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import Link from 'next/link';
import ArrowLeft from './icon/ArrowLeft';
import { menuItems } from '@/lib/constant';
import SharedSection from './SharedSection';

const Navbare = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


  
    return (
      <SharedSection className='!px-0 !py-0'>
        <Navbar onMenuOpenChange={setIsMenuOpen} className='w-full  flex-col  navbar  '>
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
                  <Link color="foreground" href={`${value}`} className='hover:text-blue-600'
                  >
                    {key}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className=" lg:flex">
                {/* <Link href="#">Login</Link> */}
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="http://app.green-genius.org" variant="flat">
                  Start Now
                  <ArrowLeft />
                </Button>
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
              {Object.entries(menuItems).map(([key, value], index) => (
                <NavbarMenuItem key={`${key}-${value}`}>
                  <Link
                    color={
                      "foreground"
                    }
                    className="w-full hover:text-blue-600"
                    href={`${value}`}
                  >
                    {key}
                  </Link>
                </NavbarMenuItem>
              ))}
                <NavbarMenuItem>
                <Link
                    color={
                      "foreground"
                    }
                    className="w-full hover:text-blue-600"
                    href="/login"
                  >
                    Login
                  </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
      </SharedSection>
    );
};

export default Navbare;
