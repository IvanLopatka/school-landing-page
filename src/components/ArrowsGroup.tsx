import React from 'react';
import { FC } from 'react';
import { CustomCarouselArrow } from './CustomCarouselArrow';

export const ArrowsGroup: FC = () => {
  return (
    <div className="flex">
      <CustomCarouselArrow direction="left" />
      <CustomCarouselArrow direction="right" />
    </div>
  );
};
