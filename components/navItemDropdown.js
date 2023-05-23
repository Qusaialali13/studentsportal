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
            <span className="text-base text-white">الامتحانات</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 576 512"
              fill="#fff"
            >
              <path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
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
              href="/exams"
              className="flex h-8 items-center gap-1 justify-end w-full text-sm  px-[30px]"
            >
              جدول الإمتحانات
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="10"
                height="10"
                className="fill-inherit"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
