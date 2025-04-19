import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const NavigationBar: FC = () => {
  return (
    <nav className="flex max-w-[1440px] items-center gap-x-24 bg-fuchsia-400 p-4 max-[700px]:ml-10 max-[700px]:gap-x-6">
      <button className="mr-1 shrink-0 max-[960px]:block min-[960px]:hidden">
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
        priority
      />
      <div className="flex gap-x-8 bg-amber-400 max-[960px]:hidden">
        <Link href="#">Home</Link>
        <Link href="#">Courses</Link>
        <Link href="#">Instructors</Link>
        <Link href="#">Schedules</Link>
        <Link href="#">Contact Us</Link>
      </div>
      <div className="font-sourceSansPro flex gap-[10px] bg-green-400">
        <button className="max-[960px]:hidden">
          <Image
            src="/bx_search.svg"
            alt="Search"
            width={24}
            height={24}
          />
        </button>
        <div className="ml-4 flex gap-[10px] max-[1150px]:hidden">
          <button className="text-button">Login</button>
          <button className="bg-button rounded-[5px] px-[16px] py-[8px] text-base text-[16px] text-white">
            Register
          </button>
        </div>
        <button className="right-1 ml-30 flex shrink-0 items-center min-[960px]:hidden">
          <Image
            src="/carbon_user-avatar.svg"
            alt="cart-icon"
            width={32}
            height={32}
          />
        </button>
      </div>
    </nav>
  );
};
