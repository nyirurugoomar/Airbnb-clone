"use client"
import React,{useState} from "react";
import Image from "next/image";
import { CiCircleChevRight,CiCircleChevLeft } from "react-icons/ci";
import { MdOutlineSyncAlt } from "react-icons/md";
import categorybar from "./CategoryBar.json"
function CategoryBar() {
    const [startIndex,setStartIndex] = useState(0)
    const iconsPerPage = 9
    const iconsToShow = categorybar.slice(startIndex, startIndex + iconsPerPage);
    

    const handleNext = () => {
        setStartIndex(startIndex + iconsPerPage);
      };
    
      const handlePrevious = () => {
        setStartIndex(Math.max(startIndex - iconsPerPage, 0));
      };
  return (
    <>
    
      <div className="flex items-center h-24 space-x-5 border border-b-black">
        <button onClick={handlePrevious} disabled={startIndex === 0}>
           <CiCircleChevLeft size={30}/>
        </button>
      
       {iconsToShow.map((categorybars)=>{
        
        return(
            
            <div className="flex items-center justify-center apace-x-10">
                
           <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-16 transition-all ">
            
             <Image src={categorybars.icon} width={24} height={24} />
             <p className="text-xs font-normal">{categorybars.IconName}</p>
           </div> 
         </div>
        );         
       })}
   
       <button onClick={handleNext} disabled={startIndex + iconsPerPage >= categorybar.length}>
         <CiCircleChevRight size={30}/>
       </button>
        
        <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border">
          <MdOutlineSyncAlt  />
          <p className="text-xs font-medium pr-2">Filter</p>
        </div>
      </div>
    </>
  );
}

export default CategoryBar;
