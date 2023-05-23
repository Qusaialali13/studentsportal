import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../HuLogo.png" />
      </Head>
      <main className="flex w-full h-screen md:h-full lg:first-letter pt-[20px]   lg:pt-[60px] px-10 overflow-y-scroll md:overflow-y-auto scrollbar-track-emerald-900 scrollbar-none ">
        <div className=" w-full ">
          <div className="flex justify-center w-full">
            <span className="text-center text-[#1B2B3C] dark:text-white text-[30px] lg:text-[50px]">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 pb-20 gap-2 md:gap-4 ">
            <Link
              href="/"
              className="flex items-center justify-end w-full mainCardsShadow rounded-[10px] transition-transform hover:scale-[1.01]"
            >
              <div className="flex w-full items-center justify-end pr-4 relative max-h-[110px]  h-[90px] lg:h-[110px] dark:border-l-[1px] dark:border-y-[1px] rounded-tl-[10px] rounded-bl-[10px] ">
                <span className="text-[#1B2B3C] dark:text-white text-[22px]">
                  {" "}
                  الإستبيانات
                </span>
              </div>
              <div className="flex  items-center justify-center gradient-bg  h-[90px] lg:h-[110px] w-[40%] lg:w-full max-w-[140px] rounded-tr-[10px] rounded-br-[10px]  text-black">
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
            </Link>

            <Link
              href="/"
              className="flex items-center justify-end w-full mainCardsShadow rounded-[10px] transition-transform hover:scale-[1.01]"
            >
              <div className="flex w-full items-center justify-end pr-4 relative max-h-[110px]  h-[90px] lg:h-[110px] dark:border-l-[1px] dark:border-y-[1px] rounded-tl-[10px] rounded-bl-[10px] ">
                <span className="text-[#1B2B3C] dark:text-white text-[22px]">
                  {" "}
                  العلامات
                </span>
              </div>
              <div className="flex  items-center justify-center gradient-bg  h-[90px] lg:h-[110px] w-[40%] lg:w-full max-w-[140px] rounded-tr-[10px] rounded-br-[10px]  text-black">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="fill-white dark:fill-[#1e2e3f]"
                  height="45"
                  width="45"
                >
                  <path d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z" />
                </svg>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-end w-full mainCardsShadow rounded-[10px] transition-transform hover:scale-[1.01]"
            >
              <div className="flex w-full items-center justify-end pr-4 relative max-h-[110px]  h-[90px] lg:h-[110px] dark:border-l-[1px] dark:border-y-[1px] rounded-tl-[10px] rounded-bl-[10px] ">
                <span className="text-[#1B2B3C] dark:text-white text-[22px]">
                  {" "}
                  البريد الا لكتروني
                </span>
              </div>
              <div className="flex  items-center justify-center gradient-bg  h-[90px] lg:h-[110px] w-[40%] lg:w-full max-w-[140px] rounded-tr-[10px] rounded-br-[10px]  text-black">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white dark:fill-[#1e2e3f]"
                  height="45"
                  width="45"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-end w-full mainCardsShadow rounded-[10px] transition-transform hover:scale-[1.01]"
            >
              <div className="flex w-full items-center justify-end pr-4 relative max-h-[110px]  h-[90px] lg:h-[110px] dark:border-l-[1px] dark:border-y-[1px] rounded-tl-[10px] rounded-bl-[10px] ">
                <span className="text-[#1B2B3C] dark:text-white text-[22px]">
                  {" "}
                  SMS خدمة الرسائل{" "}
                </span>
              </div>
              <div className="flex  items-center justify-center gradient-bg  h-[90px] lg:h-[110px] w-[40%] lg:w-full max-w-[140px] rounded-tr-[10px] rounded-br-[10px]  text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="fill-white dark:fill-[#1e2e3f]"
                  height="45"
                  width="45"
                >
                  <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-end w-full mainCardsShadow rounded-[10px] transition-transform hover:scale-[1.01]"
            >
              <div className="flex w-full items-center justify-end pr-4 relative max-h-[110px]  h-[90px] lg:h-[110px] dark:border-l-[1px] dark:border-y-[1px] rounded-tl-[10px] rounded-bl-[10px] ">
                <span className="text-[#1B2B3C] dark:text-white text-[22px]">
                  {" "}
                  تحديد رسوم الساعات
                </span>
              </div>
              <div className="flex  items-center justify-center gradient-bg  h-[90px] lg:h-[110px] w-[40%] lg:w-full max-w-[140px] rounded-tr-[10px] rounded-br-[10px]  text-black">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="fill-white dark:fill-[#1e2e3f]"
                  height="45"
                  width="45"
                >
                  <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-end w-full mainCardsShadow rounded-[10px] transition-transform hover:scale-[1.01]"
            >
              <div className="flex w-full items-center justify-end pr-4 relative max-h-[110px]  h-[90px] lg:h-[110px] dark:border-l-[1px] dark:border-y-[1px] rounded-tl-[10px] rounded-bl-[10px] ">
                <span className="text-[#1B2B3C] dark:text-white text-[22px]">
                  {" "}
                  منصة الإمتحانات الإلكترونية
                </span>
              </div>
              <div className="flex  items-center justify-center gradient-bg  h-[90px] lg:h-[110px] w-[40%] lg:w-full max-w-[140px] rounded-tr-[10px] rounded-br-[10px]  text-black">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white dark:fill-[#1e2e3f]"
                  height="45"
                  width="45"
                  viewBox="0 0 448 512"
                >
                  <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </div>
            </Link>
          </div>
          <div className="h-12  w-full flex md:hidden"></div>
        </div>
      </main>
    </>
  );
}
