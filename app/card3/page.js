import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import Image from "next/image";
import pager from "./page.json";
function page() {
  return (
    <>
      <div className=" mt-20 mx-10">
        {pager.map((pages) => {
          return (
            <>
              <div key={pages.id} className="">
                <h1 className="font-bold text-3xl my-4">{pages.title}</h1>

                <div className="flex justify-between mt-2 mb-4">
                  <div className="flex">
                    <p className="text-sm font-bold">{pages.rate}</p>
                    <p className="text-sm font-bold mx-4 underline">
                      25 review
                    </p>
                    <p className="text-sm font-medium underline">
                      {pages.Location}
                    </p>
                  </div>
                  <div className="flex">
                    <FiShare />
                    <p className="text-sm font-light mx-2">Share</p>
                    <AiTwotoneHeart />
                    <p className="text-sm font-light mx-2">Save</p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-cols-3  ">
                <div className="">
                  <Image
                    src={pages.Image1}
                    width={700}
                    height={300}
                    className="h-[21rem]"
                  />
                </div>
                <div className="mx-2">
                  <Image
                    src={pages.Image2}
                    width={300}
                    height={500}
                    className="h-40 "
                  />
                  <Image
                    src={pages.Image3}
                    width={300}
                    height={500}
                    className=" my-2 h-[10.5rem] "
                  />
                </div>
                <div className="mx-2">
                  <Image
                    src={pages.Image1}
                    width={300}
                    height={500}
                    className="h-40 "
                  />
                  <Image
                    src={pages.Image4}
                    width={300}
                    height={500}
                    className=" my-2 h-[10.5rem] "
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default page;
