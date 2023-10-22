import React from "react";
import Image from "next/image";
import { CiCircleChevRight } from "react-icons/ci";
import { MdOutlineSyncAlt } from "react-icons/md";

function CategoryBar() {
  return (
    <>
      <div className="flex items-center h-24 space-x-5">
        <div className="flex items-center justify-center apace-x-10">
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16">
            <Image src="/Islands.jpeg" width={24} height={24} />
            <p className="text-xs font-normal">Islands</p>
          </div>
          
          
        </div>
        <CiCircleChevRight size={30}/>
        <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border">
          <MdOutlineSyncAlt  />
          <p className="text-xs font-medium pr-2">Filter</p>
        </div>
      </div>
    </>
  );
}

export default CategoryBar;
