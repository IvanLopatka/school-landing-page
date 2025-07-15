import React from 'react';
import Image from 'next/image';
import { FC } from 'react';

export const CallUs: FC = () => {
  return (
    <div className="z-10 container h-[517px] w-full bg-black/90 bg-[url(/hacker-girl.png)] p-5">
      <div className="relative">
        <Image
          src="/portrait-woman.png"
          alt="portrait-woman"
          height={517}
          width={513}
          className="absolute top-[-20%] left-[3%] hidden lg:block"
        />
        <div className="flex justify-center lg:justify-end">
          <div className="flex w-full flex-col items-center gap-y-10 text-center lg:w-1/2 lg:items-start lg:text-left">
            <h3 className="text-3xl font-bold text-white lg:text-5xl">
              You don’t have to see the whole staircase just
              take the first step
            </h3>
            <h4 className="text-xl font-normal text-white lg:text-2xl">
              Amet in a suspendisse convallis eget, Amet in
              a suspendisse convallis egetAmet in a
            </h4>

            <div className="mt-10 flex h-[70px] w-full max-w-[350px] justify-between lg:mt-15">
              <button className="bg-button h-full w-[45%] rounded-md">
                <span className="text-white">
                  Get started
                </span>
              </button>
              <button className="h-full w-[45%] rounded-md bg-white">
                <span className="text-button">
                  Place a call
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
