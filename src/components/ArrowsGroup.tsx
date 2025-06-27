import React from 'react';
import { FC } from 'react';
import { CustomCarouselArrow } from './CustomCarouselArrow';

interface Props {
  next?: () => void;
  previous?: () => void;
}

export const ArrowsGroup: FC<Props> = ({
  next,
  previous,
}) => {
  return (
    <div className="relative left-0 flex h-[60px] w-[168px] max-w-[168px] justify-between bg-red-400">
      <CustomCarouselArrow
        onClick={previous}
        direction="left"
        className="left-0 border-1 border-[#09B451]"
      />
      <CustomCarouselArrow
        onClick={next}
        direction="right"
        className="right-0 border-1 border-[#09B451]"
      />
    </div>
  );
};
