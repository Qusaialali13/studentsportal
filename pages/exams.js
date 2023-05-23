import Image from "next/image";
import Head from "next/head";
import Table from "../components/examsTable";
export default function Pay() {
  return (
    <>
      <Head>
        <title>Exams</title>
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
          <div className="grid grid-cols-2 w-full mt-10">
            <div className="flex items-center w-full justify-end gap-2">
              <span className="text-black dark:text-white  text-sm lg:text-base text-right">
                2022
              </span>
              <span className="text-black dark:text-white font-bold text-base lg:text-lg">
                : السنة
              </span>
            </div>
            <div className="flex items-center w-full justify-end gap-2">
              <span className="text-black dark:text-white  text-sm lg:text-base text-right">
                الاول
              </span>
              <span className="text-black dark:text-white font-bold text-base lg:text-lg">
                : الفصل
              </span>
            </div>
          </div>
          <div className="grid grid-rows items-center w-full mt-10 gap-2">
            <div className="flex items-center w-full justify-end gap-2">
              <span className="text-black dark:text-white  text-sm lg:text-base text-right">
                . على جميع الطلبة مراجعة موقع خدمات الطالب في بوابة الطالب
                الإلكترونية لمعرفة مواعيد إمتحاناتهم
              </span>
              <div className="h-2.5 w-2.5 bg-[#C87070] rounded-full"></div>
            </div>
            <div className="flex items-center w-full justify-end gap-2">
              <span className="text-black dark:text-white  text-sm lg:text-base text-right">
                . امتحانات المواد العملية والمختبرات ومواد التربية الوطنية
                والعلوم العسكرية والطالب والجامعة واللغة العربية الاستدراكية
                واللغة الانجليزية الاستدراكية واللغة العربية الاستدراكية ستعقد
                من تاريخ 2023/5/28 إلى تاريخ 2023/5/31
              </span>
              <div className="h-2.5 w-2.5 bg-[#C87070] rounded-full"></div>
            </div>
            <div className="flex items-center w-full justify-end gap-2">
              <span className="text-black dark:text-white  text-sm lg:text-base text-right">
                . إذا صادف يوم عطلة أثناء فترة الإمتحانات تؤجل إمتحانات ذلك
                اليوم إلى اليوم الذي يلي آخر أيام الإمتحانات
              </span>
              <div className="h-2.5 w-2.5 bg-[#C87070] rounded-full"></div>
            </div>
          </div>
          <div className="mt-10 pb-20">{/* <Table /> */}</div>
        </div>
      </main>
    </>
  );
}
