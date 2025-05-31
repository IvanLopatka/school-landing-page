'use client';
import { courses } from './MostPopularCourses';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FC } from 'react';
import { CourseCard } from './CourseCard';
const responsive = {
  lg: {
    breakpoint: { max: 4000, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  md: {
    breakpoint: { max: 768, min: 641 },
    items: 3,
    slidesToSlide: 3,
  },
  sm: {
    breakpoint: { max: 640, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

const items = [];

export const ScrollList: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="w-90vw flex justify-center">
        <h1 className="Poppins text-3xl font-semibold">
          Choose favourite course from top cartegories
        </h1>
        <h2 className="Poppins ml-auto text-2xl font-normal">
          See all
        </h2>
      </div>
      <Carousel
        sliderClass="gap-5 "
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
      >
        {courses.map((item, index) => (
          <div
            className="h-full rounded-xl py-5"
            key={index}
          >
            <CourseCard
              iconTitle={item.iconTitle}
              iconAlt={item.iconAlt}
              iconUrl={item.iconUrl}
              grade={item.grade}
              coursePeriod={item.coursePeriod}
              amountOfStudents={item.amountOfStudents}
              price={item.price}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
