import Image from 'next/image';
import React from 'react';
import { FC } from 'react';
import { CourseCard } from './CourseCard';
export const courses = [
  {
    iconTitle: 'Learn Marketing from Top Instructors.',
    iconUrl: '/instructors_marketing.png',
    iconAlt: 'Learn marketing',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle:
      'Front-end development is not hard as you think',
    iconUrl: '/man-hold-laptop.png',
    iconAlt: 'Man with laptop',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle: 'Everything you need to know in UX',
    iconUrl: '/UX-course.png',
    iconAlt: 'Technology',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle: 'Learn photography with ease',
    iconUrl: '/photography-course.png',
    iconAlt: 'Photography stand up',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle: 'Be a pro in data analysis',
    iconUrl: '/data-analyse.png',
    iconAlt: 'discussion',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle: 'Ethical Hacking is not hard as you think.',
    iconUrl: '/hacker-course.png',
    iconAlt: 'Hacker',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle: 'Learn Marketing from Top Instructors',
    iconUrl: '/instructors_marketing.png',
    iconAlt: 'Learn marketing',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle:
      'Front-end development is not hard as you think',
    iconUrl: '/man-hold-laptop.png',
    iconAlt: 'Man with laptop',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
  {
    iconTitle: 'Everything you need to know in UX',
    iconUrl: '/UX-course.png',
    iconAlt: 'Technology',
    coursePeriod: '6 weeks',
    grade: '4.5',
    amountOfStudents: '1.5k',
    price: '30.5$',
  },
];

export const MostPopularCourses: FC = () => {
  return (
    <div className="container mx-auto mt-5 mb-20 justify-center">
      <div className="mb-15 flex w-full justify-between">
        <h1 className="Poppins text-3xl font-semibold max-[1000px]:text-2xl">
          Most Popular courses
        </h1>
        <button className="bg-button flex h-[46px] w-[130px] gap-1 rounded-[30px] px-4 py-2 max-[1000px]:scale-[0.9]">
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

      <div className="relative flex flex-row flex-wrap justify-center gap-10">
        {courses.map((course, index) => (
          <div className="w-1/2 md:w-[30%]" key={index}>
            <CourseCard
              iconTitle={course.iconTitle}
              iconAlt={course.iconAlt}
              iconUrl={course.iconUrl}
              grade={course.grade}
              coursePeriod={course.coursePeriod}
              amountOfStudents={course.amountOfStudents}
              price={course.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
