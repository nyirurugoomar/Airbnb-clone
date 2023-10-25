"use client"
import React,{useState} from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import cardcontainer from "./CardContainer.json";
import Link from "next/link";
import { CiCircleChevRight,CiCircleChevLeft } from "react-icons/ci";
import imagesData from "./image.json"


function Card() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        if (currentImageIndex < imagesData.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      };

      const previousImage = () => {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      };
      const currentImage = imagesData[currentImageIndex];
  return (
    <>
      <div className="grid grid-cols-4 mt-4 mx-10">
        {cardcontainer.map((cardcontainers) => {
          return (
            
            <div key={cardcontainers.id} className="flex flex-col h-96 w-72">
               
              <Link href={cardcontainers.UrlProperty}>
                <div className=" flex justify-between absolute  mt-32 text-black">
                    <button onClick={previousImage} key={imagesData.id} disabled={currentImageIndex === 0}>
                        <div className="rounded-2xl hover:bg-white"  >
                        <CiCircleChevLeft size={30}/>
                        </div>
                    </button>
                    

                    <div className="ml-[14rem] rounded-2xl hover:bg-white" onClick={nextImage} key={imagesData.id} disabled={currentImageIndex === imagesData.length - 1} >
                      <CiCircleChevRight size={30}/>
                    </div>
                    
                </div>
                <Image   
                  src={cardcontainers.image}
                  width={400}
                  height={400}
                  className="w-72 h-64 rounded-xl"
                  
                />
                
              </Link>

              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium">{cardcontainers.location}</p>
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
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
