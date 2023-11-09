import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Search,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Cars from "@/components/sidebar";

const page = () => {
  return (
    <div style={{backgroundColor:"#EDEEF0"}} className="h-full w-[1320px]">
      <Navbar />
      <div
        className="mt-7 mb-8 gap-2 flex ml-16 text-base font-semibold cursor-pointer "
        style={{ color: "#003087" }}
      >
        <Link href={"/"}>Home</Link>
        <ChevronRight />
        <p>My car search </p>
        <ChevronRight />
        <p>1,421,546 offers</p>
        <ChevronRight />
        <p>Kia Stonic 1.4 MPI EX URBAN A/T</p>
      </div>
      <section className=" w-screen h-[3420px]">
        <Cars />
      </section>
      <Footer />
    </div>
  );
};

export default page;