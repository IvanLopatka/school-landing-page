import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const NavigationBar: FC = () => {
  return (
    <div className="flex items-center gap-x-8 p-4">
      <Image
        src="/WiSchool.svg"
        alt="Next.js logo"
        width={132}
        height={31}
        priority
        className="mr-20"
      />
      <div className="flex gap-x-8 mr-30">
        <Link href="#">Home</Link>
        <Link href="#">Courses</Link>
        <Link href="#">Instructors</Link>
        <Link href="#">Schedules</Link>
        <Link href="#">Contact Us</Link>
      </div>
      <div className="flex gap-[10px] font-sourceSansPro">
        <button>
          <Image src="/bx_search.svg" alt="Search" width={24} height={24} />
        </button>
        <button style={{ width: 75, height: 36 }} className="text-green-600">
          Login
        </button>
        <button
          style={{ width: 75, height: 36 }}
          className="bg-green-500 text-white text-[16px] rounded-[5px] text-base px-[8px]"
        >
          Register
        </button>
      </div>
    </div>
  );
};
