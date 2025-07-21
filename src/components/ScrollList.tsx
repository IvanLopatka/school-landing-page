'use client';
import { courses } from './MostPopularCourses';
import { CustomCarouselArrow } from './CustomCarouselArrow';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FC } from 'react';
import { CourseCard } from './CourseCard';
const responsive = {
  lg: {
    breakpoint: { max: 4000, min: 769 },
    items: 3,
    slidesToSlide: 1,
  },
  md: {
    breakpoint: { max: 768, min: 640 },
    items: 3,
    slidesToSlide: 1,
  },
  sm: {
    breakpoint: { max: 639, min: 1 },
    items: 2,
    slidesToSlide: 1,
  },
};

export const ScrollList: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-start">
        <h1 className="Poppins px-4 text-3xl font-semibold">
          Learn A New Skill In Two Hours
        </h1>
      </div>
      <Carousel
        itemClass="px-2"
        arrows
        infinite
        className="mx-auto max-w-screen"
        responsive={responsive}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={50}
        partialVisible={false}
        customRightArrow={
          <CustomCarouselArrow direction="right" />
        }
        customLeftArrow={
          <CustomCarouselArrow direction="left" />
        }
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
