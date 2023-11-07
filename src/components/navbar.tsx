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
    <nav className="flex bg-white  h-[96px] ">
      <Link href={"/"}>
        <img
          className="ml-20 w-[144px] h-[80px]"
          alt="Primary logo JPEG"
          src="primary-logo.png"
        />
      </Link>
      <div className="flex">
        <Input
          className="h-12 w-28 mt-5 ml-24 border-none"
          type="text"
          placeholder="Search"
        />
        <ChevronDown className="  flex justify-center items-center mt-8 -ml-8 cursor-pointer" />
        <Link href="/news-guides" className="mt-8 ml-7">
          News & Guides
        </Link>
        <Button
          variant="destructive"
          className="px-[32px] py-[8px] rounded-xl mt-6 ml-7 box-border"
          style={{ backgroundColor: "#EF2C2E", color: "#FFFFFF" }}
        >
          Sell
        </Button>
      </div>
      <div className="flex mt-8 ml-16 gap-7 ">
        <BellIcon className="" />
        <ChevronDown className="-ml-7 cursor-pointer" />
        <Star />
        <Message />
      </div>
      <Button
        variant="secondary"
        className="px-[32px] py-[8px] rounded-xl mt-6 ml-20 border-box"
        style={{ backgroundColor: "#003087", color: "#FFFFFF" }}
      >
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
