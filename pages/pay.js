import Image from "next/image";
import Head from "next/head";
export default function Pay() {
  return (
    <>
      <Head>
        <title>Pay</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../HuLogo.png" />
      </Head>
      <main className="flex w-full  bg-white dark:bg-[#1e2e3f] h-full pt-[90px] px-10">
        <div className=" w-full ">
          <div className="flex justify-center w-full">
            <span className="text-center text-[#1B2B3C] dark:text-white text-[50px]">
              {" "}
              بوابة الطالب الالكترونية
            </span>
          </div>
          <div className="flex border border-dashed border-[#2D3C4D] dark:border-white  py-10 px-2 justify-center mt-[22px] rounded-[10px]">
            <span className="text-[#1B2B3C] dark:text-white text-[22px] text-center">
              {" "}
              بوابة الطالب الالكترونية بوابة الطالب الالكترونية بوابة الطالب
              الالكترونية بوابة الطالب الالكترونية بوابة الطالب الالكترونية
              <br />
              بوابة الطالب الالكترونية بوابة الطالب الالكترونية بوابة الطالب
              الالكترونية بوابة الطالب الالكترونية بوابة الطالب الالكترونية
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
            <div className="flex items-center justify-end w-full mainCardsShadow rounded-[10px]">
              <div className="flex w-full items-center justify-end pr-4 relative max-h-[110px] h-[110px] dark:border-l-[1px] dark:border-y-[1px] rounded-tl-[10px] rounded-bl-[10px] ">
                <span className="text-[#1B2B3C] dark:text-white text-[22px]">
                  {" "}
                  الإستبيانات
                </span>
              </div>
              <div className="flex  items-center justify-center gradient-bg   h-[110px] w-full max-w-[140px] rounded-tr-[10px] rounded-br-[10px]  text-black">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-white dark:fill-[#1e2e3f]"
                  height="45"
                  width="45"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}