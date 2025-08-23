import Image from 'next/image';
import { FC } from 'react';

interface FavoriteCoursesProps {
  iconTitle: string;
  iconUrl: string;
  iconAlt: string;
}

export const FavoriteCourses: FC<FavoriteCoursesProps> = ({
  iconTitle,
  iconUrl,
  iconAlt,
}) => {
  return (
    <div
      key={iconTitle}
      className="z-10 container mb-5 flex h-[190px] flex-col shadow-sm sm:h-[420px]"
    >
      <div className="relative h-full w-full">
        <Image
          fill
          src={iconUrl}
          alt={iconAlt}
          className="z-5 mb-5 rounded-lg object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full rounded-xl bg-black/50">
          <h5 className="absolute right-0 bottom-[50%] left-0 line-clamp-3 flex justify-center px-6 text-xl font-medium text-wrap text-white sm:bottom-3 sm:left-0 lg:text-2xl">
            {iconTitle}
          </h5>
        </div>
      </div>
      <div></div>
    </div>
  );
};
