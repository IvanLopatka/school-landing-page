'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import React from 'react';
import { DrawerMenu } from './DrawerMenu';
import { DialogWindow } from './DialogWindow';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { AuthButtons } from './AuthButtons';

export const NavigationBar: FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-20 mx-auto mb-10 flex items-center justify-between bg-white px-4 py-4 drop-shadow-md sm:static sm:container sm:mb-15 sm:px-0 sm:drop-shadow-none">
      <div className="flex w-full items-center justify-between gap-x-6 sm:w-auto sm:gap-x-24">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button className="bg-white !shadow-none sm:hidden">
              <Image
                src="/Vector.svg"
                alt="menu-hamburger"
                width={21}
                height={16}
              />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle />
            <DrawerMenu />
          </DrawerContent>
        </Drawer>
        <Image
          src="/WiSchool.svg"
          alt="Next.js logo"
          width={132}
          height={31}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button className="ml-auto shrink-0 border-none bg-white !shadow-none sm:hidden">
              <Image
                src="/carbon_user-avatar.svg"
                alt="cart-icon"
                width={32}
                height={32}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px]">
            <AuthButtons />
          </PopoverContent>
        </Popover>
      </div>

      <div className="hidden gap-x-3 sm:flex md:gap-x-8">
        <Link className="text-nowrap" href="#">
          Home
        </Link>
        <Link className="text-nowrap" href="#">
          Courses
        </Link>
        <Link className="text-nowrap" href="#">
          Instructors
        </Link>
        <Link className="text-nowrap" href="#">
          Schedules
        </Link>
        <Link className="text-nowrap" href="#">
          Contact Us
        </Link>
      </div>

      <div className="font-sourceSansPro flex items-center gap-[10px]">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="hidden shrink-0 border-none bg-white !shadow-none sm:block"
            >
              <Image
                src="/bx_search.svg"
                alt="Search"
                width={24}
                height={24}
              />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle />
            <DialogWindow />
          </DialogContent>
        </Dialog>
        <div className="hidden gap-[10px] lg:flex">
          <button className="text-button">Login</button>
          <button className="bg-button rounded-[5px] px-[16px] py-[8px] text-base text-[16px] text-white">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};
