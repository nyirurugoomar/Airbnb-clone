import { Divider } from "@mantine/core";
import React from "react";

const FooterMenu = ({ label, active, onClick }) => {
  return (
    <div className="border-b-2 w-24 ">
      <button
        className={`text-[0.875rem]  text-gray-400 gap-x-2 gap-y-8   ${
          active ? "border-b-2 border-black " : ""
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default FooterMenu;
