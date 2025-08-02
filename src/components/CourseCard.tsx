import Image from 'next/image';
import { FC } from 'react';
interface CourseCardProps {
  iconTitle: string;
  iconUrl: string;
  iconAlt: string;
  coursePeriod: string;
  grade: string;
  amountOfStudents: string;
  price: string;
}

export const CourseCard: FC<CourseCardProps> = ({
  iconTitle,
  iconUrl,
  iconAlt,
  coursePeriod,
  grade,
  amountOfStudents,
  price,
}) => {
  return (
    <div
      key={iconTitle}
      className="container flex h-[380px] flex-col overflow-hidden rounded-[5px] shadow-sm md:rounded-[10px]"
    >
      <div className="relative h-3/5 w-full">
        <Image
          fill
          src={iconUrl}
          alt={iconAlt}
          className="mb-5 object-cover"
        />
      </div>
      <div className="flex h-2/5 flex-col justify-between px-2 py-4 sm:px-4">
        <div className="flex flex-col items-start">
          <div className="flex w-full flex-row justify-between">
            <h5 className="line-clamp-3 text-xl font-medium max-[900px]:text-base">
              {iconTitle}
            </h5>
            <div className="float-right flex flex-row flex-nowrap items-start gap-[6px] pr-3 sm:pr-0">
              <Image
                src="/star-rating.svg"
                alt="rating star"
                height={12}
                className="mt-1"
                width={12}
              />{' '}
              <span>{grade}</span>
            </div>
          </div>
          <span className="text-button flex text-xl font-semibold lg:hidden">
            {price}
          </span>
        </div>
        <div className="flex flex-row items-center justify-between max-[1000px]:items-start">
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-xs font-medium text-nowrap sm:text-base">
              {coursePeriod}
            </p>
            <div className="flex flex-row">
              <Image
                src="/group.svg"
                alt="group"
                width={16}
                height={16}
              />
              <span className="ml-1 text-xs font-medium text-nowrap sm:text-base">
                {amountOfStudents} Students
              </span>
            </div>
          </div>
          <span className="text-button hidden text-xl font-semibold lg:flex">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};
