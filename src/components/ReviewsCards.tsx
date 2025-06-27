import React from 'react';
import { FC } from 'react';
import Image from 'next/image';

interface ReviewsCardsProps {
  iconTitle: string;
  iconUrl: string;
  iconAlt: string;
}

export const ReviewsCards: FC<ReviewsCardsProps> = ({
  iconTitle,
  iconAlt,
  iconUrl,
}) => {
  return (
    <div
      key={iconTitle}
      className="flex h-full w-full bg-blue-600"
    >
      <Image
        src={iconUrl}
        alt={iconAlt}
        width={70}
        height={70}
        className="rounded-full"
      />
    </div>
  );
};
