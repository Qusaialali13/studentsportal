import React, { useState } from "react";
import Image from "next/image";

function Table() {
  const data = [
    {
      id: 1,
      classRoom: "م.غ202",

      time: "11,15 - 01,15",
      name: "فحص البرمجيات",
      date: "09/06/2023",
    },
    {
      id: 2,
      classRoom: "م.ش202",

      time: "9,15 - 11,15",
      name: "توثيق البرمجيات",
      date: "19/06/2023",
    },
    {
      id: 3,
      classRoom: "م.غ302",

      time: "11,15 - 01,15",
      name: "برمجه كينونيه ٢",
      date: "18/06/2023",
    },
    {
      id: 4,
      classRoom: "الحسين الباني 106",

      time: "11,15 - 01,15",
      name: "ادارة المشاريع البرمجية",
      date: "10/06/2023",
    },
    {
      id: 5,
      classRoom: "م.غ202",

      time: "11,15 - 01,15",
      name: "فحص البرمجيات",
      date: "19/09/2023",
    },
    {
      id: 6,
      classRoom: "م.غ202",
      time: "11,15 - 01,15",
      name: "فحص البرمجيات",
      date: "19/09/2023",
    },
  ];

  return (
    <>
      <div className="grid grid-rows w-full mt-3 ">
        {/* Table Head */}
        <div
          className="grid grid-cols-12 w-full items-center justify-center  py-0.5 px-2.5 rounded-t-lg  h-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(156, 33, 36, 0.88) 0%, #9D2325 100%)",
          }}
        >
          <div className="flex items-center lg:col-span-3 col-span-3 justify-center ">
            <span className="text-white font-bold text-xs lg:text-sm">
              المبنى / القاعة{" "}
            </span>
          </div>
          <div className="lg:col-span-3 col-span-3 flex justify-center items-center">
            <span className="text-white  text-xs lg:text-sm font-bold">
              الوقت
            </span>
          </div>
          <div className="col-span-3 flex justify-center">
            <span className="text-white font-bold text-xs lg:text-sm ">
              التاريخ
            </span>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <span className="text-white  text-sm font-bold">المادة</span>
          </div>
        </div>
        <div className=" ">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={
                item.id % 2 === 0
                  ? "tableDarkBg grid grid-cols-12 w-full items-center py-1 px-2 h-10"
                  : "grid grid-cols-12 w-full items-center py-1 px-2 h-10 tableLightBG"
              }
              style={
                index === data.length - 1
                  ? { borderRadius: "0 0 8px 8px" }
                  : null
              }
            >
              <div className="flex items-center lg:col-span-3 col-span-3 justify-center">
                <span className="text-white  font-black text-sm">
                  <div className="flex w-full items-center ">
                    <span className="font-bold text-xs lg:text-sm text-white text-right">
                      {" "}
                      {item.classRoom}
                    </span>
                  </div>
                </span>
              </div>
              <div className="lg:col-span-3 col-span-3 justify-center flex">
                <span className="text-white font-extrabold text-xs lg:text-sm">
                  {item.time}
                </span>
              </div>

              <div className="col-span-3 flex gap-1 justify-center">
                <span className="text-white font-bold text-xs lg:text-sm">
                  {item.date}
                </span>
              </div>
              <div className=" col-span-3 flex justify-center">
                {/* className="text-neongreen  font-extrabold text-sm" */}
                <span
                  className={
                    item.name > 5000
                      ? "text-neongreen  font-extrabold  text-xs lg:text-sm"
                      : "text-white  font-extrabold  text-xs lg:text-sm"
                  }
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* table Content */}
      </div>
    </>
  );
}

export default Table;
