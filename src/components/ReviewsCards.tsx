import React from 'react';
import { FC } from 'react';
import Image from 'next/image';

interface ReviewsCardsProps {
  title: string;
  iconUrl: string;
  iconAlt: string;
  position: string;
  name: string;
}

export const ReviewsCards: FC<ReviewsCardsProps> = ({
  title,
  iconAlt,
  iconUrl,
  position,
  name,
}) => {
  return (
    <div
      key={title}
      className="flex max-h-[350px] w-full flex-col gap-y-3 overflow-hidden p-4 md:p-8"
    >
      <div className="flex flex-row gap-x-3">
        <Image
          src={iconUrl}
          alt={iconAlt}
          width={70}
          height={70}
          className="h-[30px] w-[30px] rounded-full lg:h-[70px] lg:w-[70px]"
        />
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold md:text-base">
            {name}
          </span>
          <span className="text-button text-sm font-semibold md:text-base">
            {position}
          </span>
        </div>
      </div>

      <span className="text-sm md:text-base">{title}</span>
    </div>
  );
};
