import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const NavigationBar: FC = () => {
  return (
    <nav className="max-w-[1440px] container-lg flex items-center gap-x-8 p-4">
      <button className="max-[960px]:block mr-4 min-[960px]:hidden">
        <Image src="/Vector.svg" alt="menu-hamburger" width={21} height={16} />
      </button>
      <Image
        src="/WiSchool.svg"
        alt="Next.js logo"
        width={132}
        height={31}
        priority
        className="mr-20"
      />
      <div className="flex gap-x-8 mr-30 max-[960px]:hidden max-[1300px]:mr-10">
        <Link href="#">Home</Link>
        <Link href="#">Courses</Link>
        <Link href="#">Instructors</Link>
        <Link href="#">Schedules</Link>
        <Link href="#">Contact Us</Link>
      </div>
      <div className="flex gap-[10px] font-sourceSansPro">
        <button className="max-[960px]:hidden mr-4">
          <Image src="/bx_search.svg" alt="Search" width={24} height={24} />
        </button>
        <div className="flex gap-[10px] max-[1150px]:hidden">
          <button className="text-button">Login</button>
          <button className="bg-button text-white text-[16px] rounded-[5px] text-base px-[16px] py-[8px]">
            Register
          </button>
        </div>
        <button className="min-[960px]:hidden flex items-center">
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
