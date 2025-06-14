import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

const items = [
  {
    title: 'Free E-book, Videos and kits',
    iconUrl: '/E-book.svg',
    iconAlt: 'book',
  },
  {
    title: 'Learn at your own pace',
    iconUrl: '/own-pace.svg',
    iconAlt: 'own pace',
  },
  {
    title:
      'Collaborate with different learners around the globe',
    iconUrl: '/collaboration.svg',
    iconAlt: 'bag',
  },
  {
    title: 'Top instructors around the globe',
    iconUrl: '/top-instructors.svg',
    iconAlt: 'human',
  },
];

export const GoodEducation: FC = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <h4 className="Poppins mb-5 text-3xl font-semibold text-wrap lg:mb-10">
        We Bring The Good Education To Life
      </h4>
      <div className="flex flex-col justify-start gap-x-10 lg:flex-row">
        <div className="relative mb-10 flex max-w-[380px] scale-[0.9] flex-col lg:my-0 lg:scale-none">
          <Image
            src="/job-opportunities.png"
            alt="Job Opportunities"
            width={340}
            height={403}
          />
          <div className="absolute right-[-10%] bottom-[20%] flex max-w-[129px] flex-col justify-center rounded-[6.89px] bg-white p-4 text-center shadow-lg xl:right-[8%]">
            <Image
              src="/bag.svg"
              alt="bag"
              width={30}
              height={30}
              className="mx-auto mb-2"
            />
            <div className="flex flex-col justify-center">
              <div className="flex-col justify-center">
                <span className="text-[24px] font-bold text-green-600">
                  Job
                </span>
                <Image
                  src="underline.svg"
                  alt="underline"
                  width={34}
                  height={2}
                  className=""
                />
              </div>

              <span className="text-[12px] font-semibold text-gray-600">
                Opportunities
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="Poppins text-xl font-semibold text-wrap sm:text-2xl md:text-5xl md:leading-15">
            Let Your Education Do <br></br> The Walking
          </h4>
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 p-3 text-nowrap"
            >
              <Image
                src={item.iconUrl}
                alt={item.iconAlt}
                width={40}
                height={40}
              />
              <span className="text-sm font-medium">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
