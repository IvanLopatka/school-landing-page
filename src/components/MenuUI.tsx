import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DrawerDescription } from '@/components/ui/drawer';

export const MenuUI: FC = () => {
  return (
    <div className="flex h-full w-full flex-1 grow flex-col items-start justify-start rounded-[16px] p-5">
      <DrawerDescription className="mb-2">
        <div className="flex flex-col gap-5">
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
          <button>
            <Image
              src="/bx_search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </button>
        </div>
      </DrawerDescription>
    </div>
  );
};
