import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import cardcontainer from "./CardContainer.json";
import Link from "next/link";

const slides=[
    "/pic1.avif",
    "/pic1.avif",
    "/pic1.avif",
    "/pic1.avif",
    
 ]

function Card() {
     
  return (
    <>
      <div className="grid grid-cols-4 mt-4 mx-10">
        {cardcontainer.map((cardcontainers,index,) => {
          return (
            <div className="flex flex-col h-96 w-72">
              <Link key={index} href={cardcontainers.UrlProperty}>
                <Image
                  src={cardcontainers.image}
                  width={400}
                  height={400}
                  className="w-72 h-64 rounded-xl"
                />
                <div className="flex justify-between mt-2">
                  <p className="text-sm font-medium">
                    {cardcontainers.location}
                  </p>
                  <div className="flex">
                    <AiOutlineStar />
                    <p className="text-sm font-light">{cardcontainers.Rate}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  {cardcontainers.description}
                </p>
                <p className="text-sm text-gray-400">{cardcontainers.date}</p>
                <p className="text-sm font-medium mt-2">
                  ${cardcontainers.price}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
