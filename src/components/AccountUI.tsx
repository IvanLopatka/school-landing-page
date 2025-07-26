import React from 'react';
import { FC } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export const AccountUI: FC = () => {
  return (
    <div className="w-80 justify-between">
      <button className="text-button">Login</button>
      <button className="bg-button rounded-[5px] px-[16px] py-[8px] text-base text-[16px] text-white">
        Register
      </button>
    </div>
  );
};
