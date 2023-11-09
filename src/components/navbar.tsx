import React from "react";
import { ChevronDown, BellIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Message from "@/components/icons/message/page";
import Star from "@/components/icons/star/page";
import Link from "next/link";
// import image from "@/../public/primary-logo.png";

const Navbar = () => {
  return (
    <nav className="lg:flex bg-white  h-[96px] sm:block sm:mb-72 lg:mb-0 ">
      <Link href={"/"}
       className="flex sm:justify-center sm:items-center lg:block sm:-ml-24 lg:ml-6">
        <img
          className="ml-20 w-[144px] h-[80px] "
          alt="Primary logo JPEG"
          src="primary-logo.png"
        />
      </Link>
      <div className="lg:flex lg:flex-row sm:flex-col sm:justify-center sm:items-center lg:items-start ">
        <Input
          className="h-12 w-32 mt-5 lg:ml-24 border-none sm:ml-32 lg:static sm:flex sm:justify-center sm:items-center"
          type="text"
          placeholder="Search"
        />
        <ChevronDown className="  lg:flex lg:justify-center lg:items-center lg:mt-8 lg:-ml-8 cursor-pointer sm:relative sm:-top-9 sm:-right-56 lg:static " />
        <Link href="/news-guides" className="lg:mt-8 flex sm:justify-center sm:items-center sm:-ml-9 lg:ml-7">
          News & Guides
        </Link>
        <Button
          variant="destructive"
          className="px-[32px] py-[8px] rounded-xl mt-6   sm:flex sm:justify-center sm:items-center sm:ml-36 lg:ml-7"
          style={{ backgroundColor: "#EF2C2E", color: "#FFFFFF" }}
        >
          Sell
        </Button>
      </div>
      <div className="flex mt-8 ml-16 gap-6  lg:items-start sm:justify-center sm:items-center sm:-ml-8 lg:ml-12 ">
        <BellIcon className="" />
        <ChevronDown className="-ml-7 cursor-pointer" />
        <Star />
        <Message />
      </div>
      <Button
        variant="secondary"
        className="px-[32px] py-[8px] rounded-xl mt-6 lg:ml-24 border-box  flex  sm:justify-center sm:items-center sm:ml-36 "
        style={{ backgroundColor: "#003087", color: "#FFFFFF" }}
      >
        Login
      </Button>
    </nav>
  );
};

export default Navbar;