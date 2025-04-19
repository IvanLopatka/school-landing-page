import Image from "next/image";
import React from "react";
import { FC } from "react";

export const SecondFrame: FC = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-[auto_auto_auto_auto_auto] gap-x-12 w-full max-w-[1227px] h-[60px]">
        <div className="flex w-max p-4 h-[60px] bg-light-green items-centers rounded-[5px] gap-3">
          <Image
            src={"/math-icon.svg"}
            alt="Math Icon"
            width={40}
            height={40}
          />
          <p className="Poppins text-[16px]">Problem Solving</p>
        </div>
        <div className="flex w-max p-4 h-[60px] bg-light-green items-centers rounded-[5px] gap-3">
          <Image
            src={"/math-icon.svg"}
            alt="Math Icon"
            width={40}
            height={40}
          />
          <p className="Poppins text-[16px]">Live chat</p>
        </div>
        <div className="flex w-max p-4 h-[60px] bg-light-green items-centers rounded-[5px] gap-3">
          <Image
            src={"/math-icon.svg"}
            alt="Math Icon"
            width={40}
            height={40}
          />
          <p className="Poppins text-[16px]">Group Reading</p>
        </div>
        <div className="flex w-max p-4 h-[60px] bg-light-green items-centers rounded-[5px] gap-3">
          <Image
            src={"/math-icon.svg"}
            alt="Math Icon"
            width={40}
            height={40}
          />
          <p className="Poppins text-[16px]">10k Courses</p>
        </div>
        <div className="flex w-max p-4 h-[60px] bg-light-green items-centers rounded-[5px] gap-3">
          <Image
            src={"/math-icon.svg"}
            alt="Math Icon"
            width={40}
            height={40}
          />
          <p className="Poppins text-[16px]">Hand-on activities</p>
        </div>
      </div>
    </div>
  );
};
