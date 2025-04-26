import React from 'react';
import Image from 'next/image';

export const FirstFrame: React.FC = () => {
  return (
    <div className="relative w-full py-16">
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between lg:flex-row">
        {/* Left content */}
        <div className="relative z-10 space-y-8 lg:w-1/2">
          <div className="flex max-h-[270px] max-w-[590px] flex-col space-y-4">
            <h1 className="text-5xl font-bold md:text-6xl">
              Quality{' '}
              <span className="text-green-600">
                Education
              </span>{' '}
              By Any Means
              <span>Necessary.</span>
            </h1>
          </div>

          <button className="bg-button h-[60px] w-[161px] rounded-[5px] text-white">
            Get Started
          </button>
        </div>

        {/* Right content */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <div className="relative">
            <Image
              src="/i-m-prepared-exam.png"
              alt="I'm prepared for exam"
              width={431}
              height={508}
              className="rounded-tl-[40px] rounded-tr-[40px] rounded-br-[100px] rounded-bl-[40px]"
            />

            {/* Floating card - instructors */}
            <div className="absolute top-[20%] right-[20%] z-10 max-w-[262px] rounded-[20px] bg-white p-6 shadow-lg">
              <p className="mb-5 text-[20px] font-semibold">
                Learn from best{' '}
                <span className="text-green-600">
                  instructors
                </span>{' '}
                around the globe
              </p>
              <Image
                src="/five_mens-icon.png"
                alt="Five Mens Icon"
                width={154}
                height={46}
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute right-0 bottom-[20%] max-w-[129px] rounded-[6.89px] bg-white p-4 text-center shadow-lg">
              <Image
                src="/FirstFrame-Icon.svg"
                alt="Icon"
                width={30}
                height={30}
                className="mx-auto mb-2"
              />
              <p className="text-[24px] font-bold text-green-600">
                15k
              </p>
              <p className="text-[12px] text-gray-600">
                Amazing students around the globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
