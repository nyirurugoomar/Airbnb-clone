"use client";
import { useState } from "react";
import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineMenu,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { MantineProvider } from "@mantine/core";
// import { Modal } from '@mantine/core';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-gray-300 pb-2 grid grid-cols-6 shadow-md sticky top-0">
      <div className="relative items-center col-span-2 h-14 my-auto cursor-pointer mt-4">
        <Image
          src="/airbnbb logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2 col-span-2 mt-4">
        <input
          type="text"
          placeholder="Where"
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
        <AiOutlineSearch className="cursor-pointer inline-flex mx-2 text-red-400 h-8  rounded-full " />
      </div>
      <div className="flex items-center space-x-4 justify-end mt-2">
        <MantineProvider
          open={open}
          onClose={() => setOpen(false)}
          title="change language"
        >
          <div>
            {/* <button>English</button>     
                 <button>Kinyarwanda</button>   */}
          </div>
        </MantineProvider>
        <button onClick={() => setOpen(true)} className="">
          <AiOutlineGlobal size={26} className="h-10" />
        </button>
      </div>
      <div className="flex mt-4 border-2 rounded-full w-[5rem] mx-10 h-12 ">
        <div className="flex items-center   p-2 ">
          <AiOutlineMenu size={20} />
        </div>
        <div className="flex items-center   p-2 ">
          <CgProfile size={20} />
        </div>
      </div>
      
    </div>
  );
}
