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
    iconTitle: 'Ethical Hacking is not hard as you think',
    iconUrl: '/hacker-course.png',
    iconAlt: 'Hacker',
  },
];

export const CardCourses: FC = () => {
  return (
    <div className="w-full justify-center">
      <div className="w-90vw mb-15 flex justify-center pr-20">
        <h1 className="Poppins text-3xl font-semibold max-[1000px]:text-2xl">
          Most Popular courses
        </h1>
        <button className="bg-button ml-auto flex h-[46px] w-[130px] gap-1 rounded-[30px] px-4 py-2 max-[1000px]:scale-[0.9]">
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

      <div className="flex w-[90vw] flex-row flex-wrap gap-10 max-[450px]:gap-5">
        {items.map((item) => (
          <div
            key={item.iconTitle}
            className="flex max-h-1/2 max-w-1/3 flex-col shadow-sm max-[1000px]:min-w-[180px]"
          >
            <Image
              src={item.iconUrl}
              alt={item.iconAlt}
              width={391}
              height={215}
              className="mb-5 rounded-t-[10px]"
            />
            <div className="mb-8 flex max-w-[379px] items-start px-6 max-[1000px]:mb-4 max-[500px]:pl-3">
              <h1 className="line-clamp-2 text-xl font-medium max-[900px]:text-base">
                {item.iconTitle}
              </h1>
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
            <div className="flex flex-row items-center px-6 max-[1000px]:flex-col-reverse max-[1000px]:items-start">
              <div className="mb-5 flex flex-row items-center gap-3 whitespace-nowrap">
                <p className="text-base font-medium max-[1000px]:font-normal max-[600px]:text-xs">
                  6 weeks
                </p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <Image
                    src="/group.svg"
                    alt="group"
                    width={16}
                    height={16}
                  />
                  <div className="flex flex-row">
                    <h1 className="text-base font-medium max-[1000px]:font-normal max-[600px]:text-xs">
                      1.5k Students
                    </h1>
                  </div>
                </div>
              </div>

              <h2 className="text-button ml-auto px-1 text-xl font-semibold max-[1000px]:mb-5 max-[1000px]:ml-0">
                30.5$
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
