import { Divider } from "@mantine/core"
import Image from "next/image"
import FooterMenuCantainer from "./FooterMenuCantainer"



export default function Footer({label,active,onClick}){

    return(
        <div className="w-full fixed bottom-0 bg-gray-100 mb-20 ">
            <footer className="shadow p-2 px-8">
               <div className="   ">
                <h2 className="text-[1.5rem] font-bold">Inspiration for future getaways</h2>
                 {/* <ul className="flex flex-wrap items-center text-md text-gray-400 space-x-8 mt-4 border-b-2 pb-3">
                    <li className="flex  ">
                       <button className="text-[0.875rem]">{label}</button>
                    </li>
                    <li className="flex">
                       <button className="text-[0.875rem]">{label}</button>
                    </li>
                    <li className="flex">
                       <h1 className="text-[0.875rem]">Outdoors</h1>
                    </li>
                    <li className="flex">
                       <h1 className="text-[0.875rem]">Mountains</h1>
                    </li>
                    <li className="flex">
                       <h1 className="text-[0.875rem]">Beach</h1>
                    </li>
                    <li className="flex">
                       <h1 className="text-[0.875rem]">Unique stays</h1>
                    </li>
                    <li className="flex">
                       <h1 className="text-[0.875rem]">Categories</h1>
                    </li>
                    <li className="flex">
                       <h1 className="text-[0.875rem]">Things to do</h1>
                    </li>
                    <li className="flex">
                       <h1 className="text-[0.875rem]">Airbnb-friendly apartments</h1>
                    </li>
                 </ul> */}
                   
                   <FooterMenuCantainer/>
              
                 
               </div>
            </footer>
        </div>

    )   
}