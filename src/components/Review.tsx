'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FC } from 'react';
import { ReviewsCards } from './ReviewsCards';

import { ArrowsGroup } from './ArrowsGroup';

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
const items = [
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

export const Reviews: FC = () => {
  return (
    <div className="container mx-auto mt-5 justify-center">
      <div className="mb-15 flex w-full justify-center">
        <h1 className="Poppins text-2xl font-semibold lg:text-3xl">
          Reviews
        </h1>
      </div>

      <div>
        <div className="flex flex-col">
          <h3 className="OpenSans text-5xl font-semibold">
            What Our
            <p className="font-bold text-green-600">
              Students
            </p>
            Say About Us
          </h3>
        </div>
        <div className="relative w-full bg-amber-400">
          <Carousel
            itemClass="px-3"
            arrows={false}
            infinite
            containerClass="absolute top-0 right-0 bottom-0 flex h-40 w-full flex-1 bg-green-400"
            className="absolute right-0 mx-auto"
            responsive={responsive}
            autoPlay={false}
            sliderClass="h-[50%]"
            keyBoardControl={true}
            renderButtonGroupOutside
            transitionDuration={50}
            partialVisible={true}
            customButtonGroup={<ArrowsGroup />}
          >
            {items.map((item) => (
              <div key={item.iconTitle}>
                <ReviewsCards
                  iconAlt={item.iconAlt}
                  iconUrl={item.iconUrl}
                  iconTitle={item.iconTitle}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
