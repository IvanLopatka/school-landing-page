import React from 'react';
import { FC } from 'react';

export const AccountUI: FC = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <button className="text-button">Login</button>
      <button className="bg-button rounded-[5px] px-[16px] py-[8px] text-base text-[16px] text-white">
        Register
      </button>
    </div>
  );
};
