import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import AnimatedChevron from "./animatedCheveron";

export default function NavItemDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block  w-full h-auto min-h-10">
      <div>
        <Menu.Button
          className={`${
            isOpen
              ? "bg-[#C87070]"
              : "md:hover:bg-[#304051] md:dark:hover:bg-[#3d4d5e]"
          } flex items-center w-full px-[23px] `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <AnimatedChevron isOpen={isOpen} />
          </div>
          <div className="flex  h-10 items-center  gap-2 justify-end w-full  ">
            <span className="text-base text-white">الخدمات المالية</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 576 512"
              fill="#fff"
            >
              <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
            </svg>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute flex justify-center mb-3 lg:mb-0 right-0 lg:right-auto hover:text-white text-black dark:text-white dark:fill-white fill-black hover:fill-white  rounded-none focus:outline-none z-50 w-full bg-[#D9D9D9] dark:bg-[#1B2B3C] py-34 hover:bg-[#304051] dark:hover:bg-[#304051]">
          <div className="grid rounded-none lg:w-full shadow-lg  dropdownContentBg p-3 gap-y-1.5">
            <Link
              href="/pay"
              className="flex h-8 items-center gap-1 justify-end w-full text-sm  px-[30px]"
            >
              دفع الرسوم المتفرقة
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="15"
                height="15"
                className="fill-inherit"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
