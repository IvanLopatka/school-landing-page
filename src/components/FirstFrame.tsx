import React from "react";
import Image from "next/image";

export const FirstFrame: React.FC = () => {
  return (
    <div className=" max-w-[1240px] max-h-[605px] flex flex-wrap w-full h-full justify-end relative max max-[600px]:max-w-[485px] ">
      <div className="z-2 relative flex justify-end items-center mr-1 h-[500px] mt-[60px] max-[1000px]:mt-[600px] max-[1000px]:absolute max-[1000px]:left-40 min-w-[401px] min-h-[400px]">
        <Image
          src="/i-m-prepared-exam.png"
          alt="I'm prepared for exam"
          width={431}
          height={508}
          className="z-2 absolute min-w-[431px] min-h-[508px] rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-[100px]"
        />
        <div className="rounded-[20px] flex flex-col justify-center items-center mt-20 bg-white absolute right-80 z-10 w-[262px] h-[187px]">
          <p
            className="font-semibold w-[214px] h-[100px] Popins mb-5 pt-[10px] text-[20px]
          "
          >
            Learn from best <p className="text-green-600">instructors</p> around
            the globe
          </p>
          <Image
            src="/five_mens-icon.png"
            alt="Five Mens Icon"
            width={154}
            height={46}
          />
        </div>

        <div className="flex flex-col o absolute z-10 right-[-20px] mt-75 w-[129px] h-[146px] bg-white text-center rounded-tl-[6.89px] rounded-tr-[6.89px] rounded-br-[17.22px] rounded-bl-[6.89px] ">
          <Image
            src="/FirstFrame-Icon.svg"
            alt="Icon"
            className="ml-12 mt-4 "
            width={30}
            height={30}
          />
          <p className="text-[24px] font-bold text-green-600">15k</p>
          <p className="text-[12px] text-gray-600 text-sm">
            Amazing students around the globe
          </p>
        </div>
        <div className="bg-bg_img mt-[110px] w-[107px] h-[605px] left-[30px] flex relative z-[-1] items-center -top-15 min-[1000px]:rounded-tr-[30px] min-[1000px]:rounded-br-[30px] max-[1000px]:h-[1011px] max-[1000px]:w-[107px] max-[1000px]:-top-90"></div>
      </div>

      <div className="z-3 absolute top-[120px] left-[40px] w-[589px] h-[270px] max-[600px]:left-0 flex flex-col">
        <p className="popins font-[700] text-[60px]">
          Quality <span className=" text-green-600">Education</span> By Any
          Means
          <p>Necessary.</p>
        </p>
      </div>
      <div className="bg-transparent absolute left-[30px] top-[300px] w-[213px] h-[213px] shadow-black-50 "></div>
      <button className="w-[161px] h-[60px] absolute left-[40px] top-[400px] bg-button rounded-[5px]">
        <p className="text-white">Get Started</p>
      </button>
    </div>
  );
};
