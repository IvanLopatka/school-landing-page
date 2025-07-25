import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export const MenuUI: FC = () => {
  return (
    <div className="flex h-full w-full grow flex-col rounded-[16px] bg-zinc-50 p-5">
      <div className="mx-auto max-w-md">
        <DrawerDescription className="mb-2 text-zinc-600">
          <div className="flex flex-col">
            <Link
              className="text-button text-2xl text-nowrap"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-button text-2xl text-nowrap"
              href="#"
            >
              Courses
            </Link>
            <Link
              className="text-button text-2xl text-nowrap"
              href="#"
            >
              Instructors
            </Link>
            <Link
              className="text-button text-2xl text-nowrap"
              href="#"
            >
              Schedules
            </Link>
            <Link
              className="text-button text-2xl text-nowrap"
              href="#"
            >
              Contact Us
            </Link>
          </div>
        </DrawerDescription>
      </div>
    </div>
  );
};
