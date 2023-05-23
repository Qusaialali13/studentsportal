import React, { useState } from "react";
import Image from "next/image";

function Table() {
  const data = [
    {
      id: 1,
      battleMode: "1v1",
      cost: 17336.43,
      payout: 36.43,
      date: "19/09/2023",
    },
    {
      id: 2,
      battleMode: "1v1",
      cost: 17336.43,
      payout: 5000.43,
      date: "19/09/2023",
    },
    {
      id: 3,
      battleMode: "1v1",
      cost: 17336.43,
      payout: 36.43,
      date: "19/09/2023",
    },
    {
      id: 4,
      battleMode: "1v1",
      cost: 17336.43,
      payout: 36.43,
      date: "19/09/2023",
    },
    {
      id: 5,
      battleMode: "1v1",
      cost: 17336.43,
      payout: 36.43,
      date: "19/09/2023",
    },
    {
      id: 6,
      battleMode: "1v1",
      cost: 17336.43,
      payout: 5000.43,
      date: "19/09/2023",
    },
  ];

  return (
    <>
      <div className="grid grid-rows w-full mt-3 ">
        {/* Table Head */}
        <div className="grid grid-cols-12 w-full items-center  py-0.5 px-2.5">
          <div className="flex items-center lg:col-span-3 col-span-2 justify-start ">
            <span className="text-white opacity-50 font-black text-sm">
              case{" "}
            </span>
          </div>
          <div className="lg:col-span-3 col-span-4 flex justify-start items-center">
            <span className="text-white opacity-50 font-black text-sm">
              Cost
            </span>
          </div>
          <div className="col-span-3 flex justify-start items-center">
            <span className="text-white opacity-50 font-black text-sm">
              Payout
            </span>
          </div>
          <div className="col-span-3 flex justify-start">
            <span className="text-white opacity-50 font-black text-sm ">
              Date
            </span>
          </div>
        </div>
        {/* table Content */}
        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 w-full items-center  py-1 my-1.5 px-2"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 207, 85, 0.12) 0%, rgba(255, 207, 85, 0) 100%), #463A55",
              border: "1px solid #3F364A",
              boxShadow: " inset 0px 0px 36px rgba(0, 0, 0, 0.36)",
              borderRadius: "4px",
            }}
          >
            <div className="flex items-center lg:col-span-3 col-span-2">
              <span className="text-white  font-black text-sm">
                <div className="flex w-full items-center ">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden lg:flex"
                  >
                    <g filter="url(#filter0_di_1820_35775)">
                      <path
                        d="M15.3702 19.8582L17.9617 22.5285L16.9255 23.5963L17.9631 24.6649L16.9263 25.7327L15.1114 23.8636L13.0369 26L12 24.9322L14.0745 22.7951L12.2596 20.9268L13.2965 19.859L14.3333 20.926L15.3702 19.8582ZM12.4004 12L15.0006 12.0023L23.6659 20.9268L24.7035 19.859L25.7404 20.9268L23.9263 22.7958L26 24.9322L24.9631 26L22.8886 23.8636L21.0737 25.7327L20.0369 24.6649L21.0737 23.5963L12.4026 14.6665L12.4004 12ZM23.0016 12L25.5996 12.0023L25.6011 14.6627L22.6291 17.7226L20.0361 15.0531L23.0016 12Z"
                        fill="#FFCF55"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_1820_35775"
                        x="0"
                        y="0"
                        width="38"
                        height="38"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.693333 0 0 0 0 0.333333 0 0 0 0.36 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1820_35775"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1820_35775"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.392 0 0 0 0 0.05 0 0 0 0.86 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow_1820_35775"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <span className="font-bold text-sm text-white ">
                    {" "}
                    {item.battleMode}
                  </span>
                </div>
              </span>
            </div>
            <div className="lg:col-span-3 col-span-4">
              <span className="text-white font-extrabold text-xs lg:text-sm">
                ${item.cost}
              </span>
            </div>
            <div className=" col-span-3">
              {/* className="text-neongreen  font-extrabold text-sm" */}
              <span
                className={
                  item.payout > 5000
                    ? "text-neongreen  font-extrabold  text-xs lg:text-sm"
                    : "text-white  font-extrabold  text-xs lg:text-sm"
                }
              >
                $ {item.payout}
              </span>
            </div>
            <div className="col-span-2 flex gap-1">
              <span className="text-white font-bold text-xs lg:text-sm">
                {item.date}
              </span>
            </div>
            <button className="h-full w-full lg:flex items-center justify-center rounded bg-yellow yellowShadow op36 hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9517 2.05025C10.6307 0.728134 8.87444 0 7.00641 0C5.32263 0 3.72067 0.596329 2.45293 1.68709L1.09663 0.354401L0.824905 4.96204L5.50891 4.61565L4.17975 3.38443C4.98425 2.75275 5.97269 2.40913 7.00641 2.40913C9.53549 2.40913 11.5931 4.46857 11.5931 7C11.5931 9.53143 9.53549 11.591 7.00641 11.591C5.84526 11.591 4.73752 11.1557 3.88708 10.3655C3.04124 9.57939 2.52545 8.51469 2.43488 7.36743L2.40497 6.98964H0L0.0259552 7.42426C0.246521 11.1116 3.31265 14 7.00641 14C8.87444 14 10.6307 13.2719 11.9517 11.9498C13.2725 10.6276 14 8.86974 14 7C14 5.13026 13.2725 3.37236 11.9517 2.05025Z"
                  fill="#2B2335"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Table;
