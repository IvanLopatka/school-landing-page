import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
interface CustomCarouselArrowProps {
  onClick?: () => void;
  direction: 'left' | 'right';
  className?: string;
}

export const CustomCarouselArrow: FC<
  CustomCarouselArrowProps
> = ({ onClick, direction, className }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'absolute z-30 hidden h-15 w-15 justify-center rounded-full bg-white active:bg-gray-200 md:flex',
        direction === 'left' ? 'left-6' : 'right-6',
        className
      )}
    >
      <Image
        src="/right-arrow.svg"
        alt="right arrow"
        height={30}
        width={30}
        className={
          direction === 'left' ? 'rotate-180' : undefined
        }
      />
    </button>
  );
};
