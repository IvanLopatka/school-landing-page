import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const NavigationBar: FC = () => {
  return (
    <nav className="w-full">
      <div className="max-w-90vw container mx-auto flex items-center gap-x-20 px-4 py-4 sm:px-6 lg:px-8 lg:pr-26">
        <div className="flex shrink-0 items-center gap-x-6 md:gap-x-24">
          <button className="md:hidden">
            <Image
              src="/Vector.svg"
              alt="menu-hamburger"
              width={21}
              height={16}
            />
          </button>
          <Image
            src="/WiSchool.svg"
            alt="Next.js logo"
            width={132}
            height={31}
          />
          <button className="absolute right-8 ml-5 shrink-0 md:hidden">
            <Image
              src="/carbon_user-avatar.svg"
              alt="cart-icon"
              width={32}
              height={32}
            />
          </button>
        </div>

        <div className="hidden gap-x-8 md:flex">
          <Link href="#">Home</Link>
          <Link href="#">Courses</Link>
          <Link href="#">Instructors</Link>
          <Link href="#">Schedules</Link>
          <Link href="#">Contact Us</Link>
        </div>

        <div className="font-sourceSansPro ml-auto flex items-center gap-[10px]">
          <button className="hidden md:block">
            <Image
              src="/bx_search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </button>
          <div className="hidden gap-[10px] lg:flex">
            <button className="text-button">Login</button>
            <button className="bg-button rounded-[5px] px-[16px] py-[8px] text-base text-[16px] text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
