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
    <div className="container mx-auto mt-5 justify-center">
      <div className="mb-15 flex w-full">
        <h1 className="Poppins text-3xl font-semibold max-[1000px]:text-2xl">
          Meet our instructors
        </h1>
      </div>
      <div className="flex max-w-screen justify-between">
        {instructors.map((instructor) => (
          <div
            key={instructor.name}
            className="max-w-1/3 flex-col justify-center text-center shadow-lg"
          >
            <div className="mb-5 flex justify-center">
              <Image
                src={instructor.iconUrl}
                alt={instructor.iconAlt}
                width={114}
                height={114}
              />
            </div>
            <h1 className="Inter text-xl font-semibold">
              {instructor.name}
            </h1>
            <h2 className="text-button mb-5 text-base font-medium">
              {instructor.position}
            </h2>
            <div className="px-4">
              <h3 className="text-base break-words">
                {instructor.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
