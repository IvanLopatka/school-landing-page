import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

const instructors = [
  {
    name: 'John Mark',
    position: 'Senior Developer',
    title:
      'Education will be for you what you want it to be',
    iconUrl: '/JohnMark.png',
    iconAlt: 'John Mark',
  },
  {
    name: 'Lora Shrof',
    position: 'Marketing Lead',
    title:
      '“Knowledge has to be improved, challenged, and increased constantly, or it vanishes”',
    iconUrl: '/LoraShrof.png',
    iconAlt: 'Lora Shrof',
  },
  {
    name: 'Zeng Chin',
    position: 'Data Analist at Meta',
    title:
      '“To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge”',
    iconUrl: '/ZengChin.png',
    iconAlt: 'Zeng Chin',
  },
];

export const MeetOurInstructors: FC = () => {
  return (
    <div className="container mx-auto mt-5 mb-12 justify-center lg:mb-40">
      <div className="mb-15 flex w-full">
        <h1 className="Poppins px-5 text-3xl font-semibold max-[1000px]:text-2xl lg:px-0">
          Meet our instructors
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.name}
            className="flex-col justify-center rounded-[2.80px] text-center shadow-lg sm:max-w-1/3"
          >
            <div className="mb-5 flex justify-center">
              <Image
                src={instructor.iconUrl}
                alt={instructor.iconAlt}
                width={114}
                height={114}
              />
            </div>
            <h1 className="Inter text-base font-semibold lg:text-xl">
              {instructor.name}
            </h1>
            <h2 className="text-button mb-5 text-sm font-medium lg:text-base">
              {instructor.position}
            </h2>
            <div className="mb-4 px-4">
              <h3 className="text-xs text-wrap break-words lg:text-base">
                {instructor.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
