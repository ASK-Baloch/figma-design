"use client";
import Bars from "@/components/icons/bars/page";
import Sidebar from "@/components/aside-section";
import React, { useState } from "react";
import Cross from "@/components/icons/cross/page";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" lg:hidden w-screen  ">
      <div onClick={toggleMenu} style={{ cursor: "pointer" }} className =" bg-transparent">
        {isOpen ? <Cross /> : <Bars  /> }
      </div>
      {isOpen &&  ( 
        <div className="border-none shadow-none h-full ml-2  backdrop-blur-md ">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default DropDown;
