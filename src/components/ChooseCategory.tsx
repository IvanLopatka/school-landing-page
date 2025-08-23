'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CustomCarouselArrow } from './CustomCarouselArrow';

import { FC } from 'react';
import { FavoriteCourses } from './FavoriteCourses';

const categories = [
  {
    iconTitle: 'Marketing',
    iconUrl: '/marketing.png',
    iconAlt: 'Learn marketing',
  },
  {
    iconTitle: 'Design',
    iconUrl: '/design.png',
    iconAlt: 'laptop',
  },
  {
    iconTitle: 'Programming',
    iconUrl: '/programming.png',
    iconAlt: 'programming',
  },
  {
    iconTitle: 'Technology',
    iconUrl: '/technology.png',
    iconAlt: 'Technology',
  },
];
const responsive = {
  lg: {
    breakpoint: { max: 4000, min: 769 },
    items: 4,
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

export const ChooseCategory: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between px-4 md:px-0">
        <h1 className="Poppins text-xl font-semibold text-wrap sm:text-2xl md:text-3xl">
          Choose favourite course from top cartegories
        </h1>
        <h2 className="Poppins ml-5 text-lg font-normal text-nowrap sm:text-xl md:text-2xl">
          See all
        </h2>
      </div>
      <div>
        <Carousel
          itemClass="px-3 lg:px-0"
          arrows
          infinite
          className="mx-auto max-w-screen"
          responsive={responsive}
          autoPlay={false}
          sliderClass="gap-0 lg:gap-5 w-max"
          keyBoardControl={true}
          transitionDuration={50}
          partialVisible={true}
          customLeftArrow={
            <CustomCarouselArrow direction="left" />
          }
          customRightArrow={
            <CustomCarouselArrow direction="right" />
          }
        >
          {categories.map((categorie, index) => (
            <div
              className="h-[50%] py-5 lg:h-full"
              key={index}
            >
              <FavoriteCourses
                iconAlt={categorie.iconAlt}
                iconTitle={categorie.iconTitle}
                iconUrl={categorie.iconUrl}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
