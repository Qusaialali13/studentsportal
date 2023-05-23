import ThemeToggler from "@/ThemeToggler";
import Image from "next/image";
export default function TopNav() {
  return (
    <>
      <div className="bg-main-red xl:flex w-full 2xl:max-w-[1605px] max-h-[70px] h-[60px] items-center xl:pr-[330px] 2xl:pr-[20px] justify-end  fixed top-0">
        <div className="items-center flex gap-3">
          <ThemeToggler />
          <div className="flex items-center gap-2">
            <span className="text-base text-white">قصي جميل عادل العلي</span>
            <Image
              src="/studentUser.png"
              alt=""
              width="32"
              height="32"
              className="rounded-full max-h-[32px] max-w-[32px] h-[32px] w-[32px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
