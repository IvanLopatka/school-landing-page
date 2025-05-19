import Image from 'next/image';
import React from 'react';
import { FC } from 'react';
const items = [
  {
    iconTitle: 'Learn Marketing from Top Instructors.',
    iconUrl: '/instructors_marketing.png',
    iconAlt: 'Learn marketing',
  },
  {
    iconTitle:
      'Front-end development is not hard as you think',
    iconUrl: '/man-hold-laptop.png',
    iconAlt: 'Man with laptop',
  },
  {
    iconTitle: 'Everything you need to know in UX',
    iconUrl: '/UX-course.png',
    iconAlt: 'Technology',
  },
  {
    iconTitle: 'Learn photography with ease',
    iconUrl: '/photography-course.png',
    iconAlt: 'Photography stand up',
  },
  {
    iconTitle: 'Be a pro in data analysis',
    iconUrl: '/data-analyse.png',
    iconAlt: 'discussion',
  },
  {
    iconTitle: 'Ethical Harking is not hard as you think',
    iconUrl: '/hacker-course.png',
    iconAlt: 'Hacker',
  },
];

export const CardCourses: FC = () => {
  return (
    <div className="w-full">
      <div className="w-90vw mb-15 flex justify-center">
        <h1 className="Poppins text-3xl font-semibold max-[540px]:text-2xl">
          Most Popular courses
        </h1>
        <button className="bg-button ml-auto flex max-h-[46px] max-w-[130px] gap-1 rounded-[50px] px-4 py-2 max-[540px]:scale-[0.9]">
          <Image
            src="/sort.svg"
            alt="Sort"
            width={30}
            height={30}
          />
          <h1 className="text-lg whitespace-nowrap text-white">
            Sort by
          </h1>
        </button>
      </div>

      <div className="flex w-[90vw] flex-row flex-wrap gap-10">
        {items.map((item) => (
          <div
            key={item.iconTitle}
            className="flex max-h-1/2 max-w-1/3 flex-col"
          >
            <Image
              src={item.iconUrl}
              alt={item.iconAlt}
              width={391}
              height={215}
              className="mb-5 rounded-t-[10px]"
            />
            <div className="mb-8 flex max-w-[379px] items-start px-6">
              <h1 className="text-xl font-medium">
                {item.iconTitle}
              </h1>{' '}
              <div className="ml-auto flex gap-[6px]">
                <Image
                  src="/star-rating.svg"
                  alt="rating star"
                  height={18}
                  width={18}
                />{' '}
                <h2>4.5</h2>
              </div>
            </div>
            <div className="align-center flex flex-row">
              <p className="px-5 text-base font-medium">
                6 weeks
              </p>
              <div className="flex flex-row items-center justify-center gap-2">
                <Image
                  src="/group.svg"
                  alt="group"
                  width={16}
                  height={16}
                />
                <div className="flex flex-row gap-20">
                  <h1 className="text-base font-medium">
                    1.5k Students
                  </h1>
                  <h2 className="text-button text-xl font-semibold">
                    30.5$
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
