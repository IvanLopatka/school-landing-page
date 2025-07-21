import React from 'react';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

export const InfoAndContacts: FC = () => {
  return (
    <div className="container max-h-[587px] w-full bg-black">
      <div className="flex flex-col-reverse items-start gap-y-6 p-6 lg:flex-col lg:items-center lg:gap-y-16">
        <div className="flex lg:flex-col lg:justify-center">
          <div className="flex flex-col-reverse items-center justify-between gap-x-16 lg:flex-row">
            <div className="flex flex-col gap-y-7">
              <h5 className="text-3xl font-semibold text-white">
                WiSchool
              </h5>
              <span className="hidden max-w-75 text-base font-normal text-wrap text-white lg:block">
                We are not here to sell you products, we
                sell value through our expertise.
              </span>
              <div className="flex flex-row gap-5">
                <Image
                  src={'/Facebook.svg'}
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src={'/Twitter.svg'}
                  alt="Twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src={'/Instagram.svg'}
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <Image
                  src={'/Indeed.svg'}
                  alt="Indeed"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-10">
              <div className="flex flex-col items-start gap-y-3">
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Training
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Resources
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  About Us
                </Link>
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  SME
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Solution
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Reviews
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Blog
                </Link>
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Place A Call
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Email
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Wischool@gmail.com
                </Link>
              </div>
              <div className="hidden flex-col items-start gap-y-3 lg:flex">
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Job Opening
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  News
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Research
                </Link>
              </div>
              <div className="hidden flex-col items-start gap-y-3 lg:flex">
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Uk Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-nowrap text-white"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-1 lg:items-center lg:gap-y-10">
          <h5 className="text-base font-semibold text-white lg:text-2xl">
            Subscribe to get latest updates
          </h5>
          <div className="mb-2 flex h-[52px] md:scale-none lg:w-[542px]">
            <input
              className="placeholder:text-button h-full w-full bg-white px-4"
              placeholder="Enter Your Email"
              type="text"
            />
            <button className="bg-button h-full w-1/4">
              <p className="text-white">Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
