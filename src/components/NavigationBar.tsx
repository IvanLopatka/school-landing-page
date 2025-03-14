import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const NavigationBar: FC = () => {
  return (
    <div className="flex items-center ">
      <Image
        src="/WiSchool.svg"
        alt="Next.js logo"
        width={132}
        height={31}
        priority
        className="mr-8"
      />
      <div className="flex gap-x-8">
        <Link href="#">Home</Link>
        <Link href="#">Courses</Link>
        <Link href="#">Instructors</Link>
        <Link href="#">Schedules</Link>
        <Link href="#">Contact Us</Link>
      </div>
    </div>
  );
};
