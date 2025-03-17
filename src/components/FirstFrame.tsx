import React from "react";
import Image from "next/image";
import Link from "next/link";

export const FirstFrame: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="justify-end">
        <Image
          src="/i-m-prepared-exam.png"
          alt="I'm prepared for the exam"
          width={431}
          height={508}
          className="rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-[100px]"
        />
      </div>
    </div>
  );
};
