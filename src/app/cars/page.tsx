import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Cars from "@/components/car-section";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Search,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div style={{backgroundColor:"#EDEEF0"}} className="h-full w-fit">
      <Navbar />
      <div
        className="lg:mt-7 lg:mb-8 flex lg:ml-16 text-base font-semibold cursor-pointer sm:justify-start sm:ml-8 sm:items-end text-center  sm:flex-wrap sm:gap-x-2 sm:gap-1 sm:my-5  lg:gap-y-0 sm:w-2/5 lg:w-screen lg:gap-2 lg:justify-start "
        style={{ color: "#003087" }}
      >
        <Link href={"/"} >Home</Link>
        <ChevronRight />
        <p>My car search </p>
        <ChevronRight />
        <p>1,421,546 offers</p>
        <ChevronRight />
        <p className="text-center ml-9 lg:ml-0">Kia Stonic 1.4 MPI EX URBAN A/T</p>
      </div>
      <section className=" w-fit h-[3420px]">
        <Cars />
      </section>
      <Footer />
    </div>
  );
};

export default page;