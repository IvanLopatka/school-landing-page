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
    items: 1.5,
    slidesToSlide: 1,
  },
  md: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
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
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    iconUrl: '/marketing.png',
    iconAlt: 'marketing',
    position: 'Senior Developer',
    name: 'Moah Jumah',
  },
  {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    iconUrl: '/design.png',
    iconAlt: 'laptop',
    position: 'Senior Developer',
    name: 'Moah Jumah',
  },
  {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    iconUrl: '/programming.png',
    iconAlt: 'programming',
    position: 'Senior Developer',
    name: 'Moah Jumah',
  },
  {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    iconUrl: '/technology.png',
    iconAlt: 'Technology',
    position: 'Senior Developer',
    name: 'Moah Jumah',
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
        <div className="mb-5 flex flex-col">
          <h3 className="OpenSans text-3xl font-semibold md:text-5xl">
            What Our
            <p className="font-bold text-green-600">
              Students
            </p>
            Say About Us
          </h3>
        </div>
        <div className="relative w-full">
          <Carousel
            itemClass="px-1 md:px-3"
            arrows={false}
            infinite={false}
            containerClass="absolute left-0 lg:left-40 top-[-10] lg:top-[-140] flex max-[1024px]:w-[90vw] h-full w-2/3 flex-1"
            className="absolute right-0 mx-auto max-w-screen"
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
              <div key={item.title}>
                <ReviewsCards
                  iconAlt={item.iconAlt}
                  iconUrl={item.iconUrl}
                  title={item.title}
                  position={item.position}
                  name={item.name}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
