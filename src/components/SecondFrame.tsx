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

export const SecondFrame: FC = () => {
  return (
    <div className="flex max-h-[60px] w-full max-w-screen flex-wrap items-center justify-center gap-3 min-[430px]:gap-6 [&>*]:max-w-[220px]">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-light-green items-centers max-[430px]:w-40vw flex max-h-[60px] w-full max-w-55 gap-3 rounded-[5px] p-4"
        >
          <Image
            src={item.iconUrl}
            alt={item.iconAlt}
            width={40}
            height={40}
          />
          <p className="Poppins text-[16px]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};
