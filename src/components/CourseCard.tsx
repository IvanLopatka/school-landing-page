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
}) => (
  <div
    key={iconTitle}
    className="overflow-hidden rounded-[5px] shadow-sm md:rounded-[10px]"
  >
    <Image
      src={iconUrl}
      alt={iconAlt}
      width={391}
      height={215}
      className="mb-5"
    />
    <div className="mb-8 flex max-w-[379px] items-start px-6 max-[1000px]:mb-4 max-[500px]:pl-3">
      <h1 className="line-clamp-2 text-xl font-medium max-[900px]:text-base">
        {iconTitle}
      </h1>
      <div className="ml-auto flex gap-[6px]">
        <Image
          src="/star-rating.svg"
          alt="rating star"
          height={18}
          width={18}
        />{' '}
        <h2>{grade}</h2>
      </div>
    </div>
    <div className="flex flex-row items-center px-6 max-[1000px]:flex-col-reverse max-[1000px]:items-start">
      <div className="mb-5 flex flex-row items-center gap-3 whitespace-nowrap">
        <p className="text-base font-medium max-[1000px]:font-normal max-[600px]:text-xs">
          {coursePeriod}
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
              {amountOfStudents}
            </h1>
          </div>
        </div>
      </div>

      <h2 className="text-button ml-auto px-1 text-xl font-semibold max-[1000px]:mb-5 max-[1000px]:ml-0">
        {price}
      </h2>
    </div>
  </div>
);
