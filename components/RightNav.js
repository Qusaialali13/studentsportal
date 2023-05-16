import React, { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import ThemeToggler from "@/ThemeToggler";
import Dropdown from "./navItemDropdown";

export default function RightNav() {
  return (
    <>
      <Disclosure as="nav" className="fixed top-0 lg:right-0 z-10 ">
        {({ open }) => (
          <>
            <div className="max-h-[60px] h-[50px] md:h-[60px] lg:h-full lg:min-h-screen bg-[rgb(24,40,57)] dark:bg-[#304051]  w-screen lg:w-[315px] lg:max-w-[315px]  ">
              <div className=" flex lg:hidden h-full items-center px-2 justify-between">
                <ThemeToggler />
                <div className="flex items-center gap-2">
                  <span className="text-base text-white">
                    قصي جميل عادل العلي
                  </span>
                  <Image
                    src="/studentUser.png"
                    alt=""
                    width="32"
                    height="32"
                    className="rounded-full max-h-[32px] max-w-[32px] h-[32px] w-[32px]"
                  />
                </div>
                <Disclosure.Button
                  className="flex items-center justify-center rounded-md p-2"
                  style={{ background: "rgba(255, 255, 255, 0.05)" }}
                >
                  {open ? (
                    <div>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="12.7266"
                          y="14.8489"
                          width="18"
                          height="3"
                          rx="1.5"
                          transform="rotate(-135 12.7266 14.8489)"
                          fill="#A5A1AB"
                        />
                        <rect
                          x="-0.000976562"
                          y="12.7278"
                          width="18"
                          height="3"
                          rx="1.5"
                          transform="rotate(-45 -0.000976562 12.7278)"
                          fill="#A5A1AB"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="8.5"
                          width="18"
                          height="3"
                          rx="1.5"
                          fill="#A5A1AB"
                        />
                        <rect
                          y="16.5"
                          width="18"
                          height="3"
                          rx="1.5"
                          fill="#A5A1AB"
                        />
                        <rect
                          y="0.5"
                          width="18"
                          height="3"
                          rx="1.5"
                          fill="#A5A1AB"
                        />
                      </svg>
                    </div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block">
                <div className="w-full flex items-center justify-center max-h-[70px] h-[60px] bg-[#304051] dark:bg-[#C87070]">
                  <span className="text-3xl ">HU&apos;s portal</span>
                </div>
                <div className="h-full w-full  py-[48px] ">
                  <div className=" grid grid-rows w-full h-full  text-right gap-[15px] lg:w-[315px] lg:max-w-[315px]">
                    <div className="flex items-center justify-end gap-3 px-[23px] w-full">
                      <div className="grid grid-rows text-right">
                        <span className="text-base text-white">
                          قصي جميل عادل العلي
                        </span>
                        <span className="text-sm text-white">1939168</span>
                      </div>

                      <Image
                        src="/studentUser.png"
                        alt=""
                        width="45"
                        height="45"
                        className="rounded-full max-h-[62px] max-w-[62px] h-[62px] w-[62px]"
                      />
                    </div>
                    <Link
                      href="/"
                      className="flex items-center gap-2 justify-end px-[23px] w-full hover:bg-[#304051] dark:hover:bg-[#3d4d5e] h-10"
                    >
                      <span className="text-base text-white">
                        الصفحة الرئيسية
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 576 512"
                        fill="#fff"
                      >
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                      </svg>
                    </Link>

                    <Dropdown />
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden flex  w-full justify-end h-auto">
              <div className="grid grid-rows h-auto min-h-screen space-y-3  justify-center p-3 bg-[#304051] dark:bg-[#405061]">
                <Dropdown />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
