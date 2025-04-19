import React from 'react';
import Image from 'next/image';

export const FirstFrame: React.FC = () => {
  return (
    <div className="relative flex h-full max-h-[605px] w-full max-w-[1240px] flex-wrap justify-end max-[600px]:max-w-[485px]">
      <div className="relative z-2 mt-[60px] mr-1 flex h-[500px] min-h-[400px] min-w-[401px] items-center justify-end max-[1000px]:absolute max-[1000px]:left-40 max-[1000px]:mt-[600px]">
        <Image
          src="/i-m-prepared-exam.png"
          alt="I'm prepared for exam"
          width={431}
          height={508}
          className="absolute z-2 min-h-[508px] min-w-[431px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[100px] rounded-bl-[40px]"
        />
        <div className="absolute right-80 z-10 mt-20 flex h-[187px] w-[262px] flex-col items-center justify-center rounded-[20px] bg-white">
          <p className="Popins mb-5 h-[100px] w-[214px] pt-[10px] text-[20px] font-semibold">
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

        <div className="absolute right-[-20px] z-10 mt-75 flex h-[146px] w-[129px] flex-col rounded-tl-[6.89px] rounded-tr-[6.89px] rounded-br-[17.22px] rounded-bl-[6.89px] bg-white text-center">
          <Image
            src="/FirstFrame-Icon.svg"
            alt="Icon"
            className="mt-4 ml-12"
            width={30}
            height={30}
          />
          <p className="text-[24px] font-bold text-green-600">
            15k
          </p>
          <p className="text-sm text-[12px] text-gray-600">
            Amazing students around the globe
          </p>
        </div>
        <div className="bg-bg-img relative -top-15 left-[30px] z-[-1] mt-[110px] flex h-[605px] w-[107px] items-center max-[1000px]:-top-90 max-[1000px]:h-[1011px] max-[1000px]:w-[107px] min-[1000px]:rounded-tr-[30px] min-[1000px]:rounded-br-[30px]"></div>
      </div>

      <div className="absolute top-[120px] left-[40px] z-3 flex h-[270px] w-[589px] flex-col max-[600px]:left-0">
        <p className="popins text-[60px] font-[700]">
          Quality{' '}
          <span className="text-green-600">Education</span>{' '}
          By Any Means
          <p>Necessary.</p>
        </p>
      </div>
      <div className="shadow-black-50 absolute top-[300px] left-[30px] h-[213px] w-[213px] bg-transparent"></div>
      <button className="bg-button absolute top-[400px] left-[40px] h-[60px] w-[161px] rounded-[5px]">
        <p className="text-white">Get Started</p>
      </button>
    </div>
  );
};
