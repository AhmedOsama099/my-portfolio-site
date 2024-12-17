"use client";

import Brain from "@/Components/brain";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <MotionPageWrapper>
      {/* Container */}
      <div className="h-full overflow-auto lg:flex" ref={containerRef}>
        {/* Text Container*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3  xl:w-1/2">
          {/* Biography Container*/}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title*/}
            <h1 className="font-bold text-2xl">Biography</h1>
            {/* Biography Description*/}
            <p className="text-gl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              dolore accusantium quibusdam doloremque similique suscipit, quam
              rerum pariatur optio blanditiis corporis laboriosam, dolor eaque
              dolores aliquid placeat soluta necessitatibus recusandae.
            </p>
            {/* Biography Quote*/}
            <span className="italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
            {/* Biography Sign SVG*/}
            <div className="self-end">
              <svg
                width="237"
                height="166"
                viewBox="0 0 237 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M198.862 30.2269C200.259 25.38 201.811 20.6266 203.886 16.0204C204.718 14.1719 205.478 11.0969 205.995 14.6708C208.439 31.5782 211.159 48.4519 212.844 65.4589C214.035 77.491 215.222 91.1849 210.9 102.774C209.801 105.724 208.138 108.416 207.488 111.535C207.233 112.759 209.296 109.804 210.142 108.883C214.665 103.958 219.268 98.9494 224.55 94.8188C226.478 93.3117 230.723 89.4713 233.626 89.9176C234.685 90.0803 234.768 91.9411 234.859 92.6642C235.508 97.855 233.819 102.867 231.849 107.605C228.142 116.519 221.994 125.024 219.432 134.36C218.793 136.688 227.126 133.262 228.2 132.845C229.595 132.303 226.873 135.584 225.83 136.657C221.644 140.963 216.551 144.317 211.493 147.501C209.779 148.58 207.398 150.512 205.166 149.798C203.749 149.345 203.267 148.879 202.369 147.501C199.456 143.03 197.875 137.312 196.208 132.324C191.267 117.538 187.162 101.834 186.918 86.1529C186.845 81.4414 185.544 88.9122 185.307 89.5151C179.914 103.255 172.402 116.084 163.79 128.038C154.978 140.269 145.543 151.892 132.888 160.287C132.003 160.874 127.164 164.841 125.731 163.838C125.221 163.481 125.494 162.055 125.494 161.494M134.452 72.42C139.478 66.3944 143.678 58.7046 146.51 50.741M146.51 50.741C148.29 45.735 149.529 40.6208 150.092 35.7437C150.302 33.932 150.645 28.4972 150.235 30.2742C149.526 33.3399 149.274 36.7598 148.718 39.8162C148.052 43.4747 147.307 47.1135 146.51 50.741ZM146.51 50.741C145.652 54.6464 144.733 58.5387 143.789 62.4281C139.808 78.8219 135.356 95.0896 130.85 111.346C129.202 117.289 125.99 125.054 125.305 131.424C125.096 133.362 128.22 128.83 129.594 127.446C134.485 122.521 139.883 118.103 144.642 113.05C145.331 112.319 146.878 109.879 146.727 110.872C146.575 111.878 145.966 112.763 145.495 113.666C143.319 117.839 140.943 121.919 137.864 125.505C130.516 134.062 120.253 139.49 109.996 143.76C102.65 146.818 94.9415 149.624 86.9145 149.987C83.4633 150.143 82.6302 150.074 82.0802 146.53C80.7568 138.004 80.1542 129.291 79.4498 120.698C78.359 107.393 76.8704 94.1103 75.8714 80.8018C75.2555 72.5969 75.1605 64.3994 75.1605 56.1773M75.1605 56.1773V63.0438M75.1605 56.1773V55.0408M96.4884 95.4345C96.2874 99.1495 95.3612 102.016 92.7204 104.763C91.5016 106.031 85.4234 112.266 87.2226 106.942C87.6089 105.799 88.5694 103.563 89.3115 101.935M89.3115 101.935C90.0275 100.365 90.5401 99.3618 90.1374 100.454C89.9548 100.949 89.6661 101.447 89.3115 101.935ZM89.3115 101.935C88.1364 103.553 86.2366 105.069 85.0661 106.066C79.8758 110.483 74.18 114.286 68.4304 117.928C57.0114 125.16 45.6878 132.298 34.6613 140.137C30.8812 142.825 27.0811 145.463 23.2628 148.093C22.5861 148.559 21.7721 149.069 21.2722 149.75C20.5627 150.717 20.6371 152.878 20.4664 153.965C20.051 156.611 19.7081 159.24 19.7081 161.921M24.4002 141.463C24.4771 140.414 25.9568 133.377 25.5377 133.602C22.0979 135.449 19.0968 138.861 16.0587 141.274C14.4795 142.528 10.6778 146.315 10.8215 144.305C10.8924 143.313 12.9787 138.809 12.3619 139.167C9.68779 140.718 7.31625 142.87 4.80233 144.66C3.5503 145.551 0.00309753 147.316 3.49896 146.151M184.786 2.09812C184.425 1.25643 181.02 6.05128 181.895 8.01748C182.692 9.81022 188.43 8.33009 189.525 8.11219C193.616 7.29785 197.961 5.98461 201.564 3.8029C202.371 3.31407 201.4 5.39097 201.303 5.67341C199.307 11.4554 195.334 16.9463 192.132 22.1055C189.982 25.5697 187.333 28.8445 185.591 32.5473C184.876 34.0684 185.924 33.494 186.918 33.2102M142.983 17.4411C140.618 17.4411 138.189 18.0767 137.343 20.6139C136.165 24.1456 141.874 22.8272 143.86 22.5554C144.993 22.4004 147.736 20.8707 147.225 21.8924C146.46 23.4208 144.151 25.177 142.983 26.3438C138.317 31.0059 134.015 35.5266 130.186 40.8817"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>

          {/* SKill */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKill Title */}
            <h1 className="font-bold text-2xl"></h1>
            {/* Skill List */}
            <div className="flex gap-4  flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Zod
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Zustand
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
            </div>

            {/* Biography Scroll*/}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* Experience */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Experience title */}
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* Experience list */}
            <div>
              {/* Experience list item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* Job Desc */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium voluptates dignissimos.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024: present
                  </div>
                  {/* Job Company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 "></div>

                {/* Center */}
                <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 ">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* Job Desc */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium voluptates dignissimos.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024: present
                  </div>
                  {/* Job Company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* Job Desc */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium voluptates dignissimos.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024: present
                  </div>
                  {/* Job Company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
        </div>
        {/* SBG Container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </MotionPageWrapper>
  );
};

export default AboutPage;
