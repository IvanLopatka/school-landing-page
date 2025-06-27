import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
interface CustomCarouselArrowProps {
  onClick?: () => void;
  direction: 'left' | 'right';
}

export const CustomCarouselArrow: FC<
  CustomCarouselArrowProps
> = (props) => {
  console.log('props', props);
  return (
    <button
      onClick={props.onClick}
      className={twMerge(
        'absolute z-30 flex h-15 w-15 justify-center rounded-full bg-white active:bg-gray-200',
        props.direction === 'left' ? 'left-6' : 'right-6'
      )}
    >
      <Image
        src="/right-arrow.svg"
        alt="right arrow"
        height={30}
        width={30}
        className={
          props.direction === 'left'
            ? 'rotate-180'
            : undefined
        }
      />
    </button>
  );
};
