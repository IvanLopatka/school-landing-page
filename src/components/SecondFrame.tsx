import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

export const SecondFrame: FC = () => {
  return (
    <div className="grid h-[60px] w-full max-w-[80vw] grid-cols-[auto_auto_auto_auto_auto] gap-x-8">
      <div className="bg-light-green items-centers flex h-[60px] w-max max-w-55 gap-3 rounded-[5px] p-4">
        <Image
          src={'/math-icon.svg'}
          alt="Math Icon"
          width={40}
          height={40}
        />
        <p className="Poppins text-[16px]">
          Problem Solving
        </p>
      </div>
      <div className="bg-light-green items-centers flex h-[60px] w-max max-w-55 gap-3 rounded-[5px] p-4">
        <Image
          src={'/math-icon.svg'}
          alt="Math Icon"
          width={40}
          height={40}
        />
        <p className="Poppins text-[16px]">Live chat</p>
      </div>
      <div className="bg-light-green items-centers flex h-[60px] w-max max-w-55 gap-3 rounded-[5px] p-4">
        <Image
          src={'/math-icon.svg'}
          alt="Math Icon"
          width={40}
          height={40}
        />
        <p className="Poppins text-[16px]">Group Reading</p>
      </div>
      <div className="bg-light-green items-centers flex h-[60px] w-max max-w-55 gap-3 rounded-[5px] p-4">
        <Image
          src={'/math-icon.svg'}
          alt="Math Icon"
          width={40}
          height={40}
        />
        <p className="Poppins text-[16px]">10k Courses</p>
      </div>
      <div className="bg-light-green items-centers flex h-[60px] w-max max-w-55 gap-3 rounded-[5px] p-4">
        <Image
          src={'/math-icon.svg'}
          alt="Math Icon"
          width={40}
          height={40}
        />
        <p className="Poppins text-[16px]">
          Hand-on activities
        </p>
      </div>
    </div>
  );
};
