import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

const items = [
  {
    title: 'Problem Solving',
    iconUrl: '/problem-solving.svg',
    iconAlt: 'Mathematics',
  },
  {
    title: 'Live chat',
    iconUrl: '/chat.svg',
    iconAlt: 'Chat Message',
  },
  {
    title: 'Group Reading',
    iconUrl: '/group-reading.svg',
    iconAlt: 'People',
  },
  {
    title: '10k Courses',
    iconUrl: '/courses.svg',
    iconAlt: 'Book',
  },
  {
    title: 'Hand-on activities',
    iconUrl: '/hands.svg',
    iconAlt: 'Hands',
  },
];

export const Features: FC = () => {
  return (
    <div className="z-0 container mx-auto mb-30 flex flex-wrap items-center justify-center gap-4 px-1 min-[430px]:gap-6 md:justify-between lg:px-0">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-light-green max-[430px]:w-40vw flex max-h-[60px] w-full max-w-[190px] items-center gap-3 rounded-[5px] p-3 text-nowrap"
        >
          <Image
            src={item.iconUrl}
            alt={item.iconAlt}
            width={40}
            height={40}
          />
          <p className="Poppins text-[14px]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};
