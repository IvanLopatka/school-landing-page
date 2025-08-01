import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DrawerDescription } from '@/components/ui/drawer';

export const DrawerMenu: FC = () => {
  return (
    <DrawerDescription asChild className="mb-2">
      <div className="flex h-full w-full flex-1 grow flex-col items-start justify-start rounded-[16px] p-5">
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
        <button className="mt-4 sm:block">
          <Image
            src="/bx_search.svg"
            alt="Search"
            width={24}
            height={24}
          />
        </button>
      </div>
    </DrawerDescription>
  );
};
