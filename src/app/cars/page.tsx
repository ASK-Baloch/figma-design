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

const page = () => {
  return (
    <div style={{backgroundColor:"#edeef0"}}>
      <Navbar />
      <div
        className="mt-7 mb-8 gap-2 flex ml-16 text-base font-semibold cursor-pointer "
        style={{ color: "#003087" }}
      >
        <p>Home</p>
        <ChevronRight />
        <p>My car search </p>
        <ChevronRight />
        <p>1,421,546 offers</p>
        <ChevronRight />
        <p>Kia Stonic 1.4 MPI EX URBAN A/T</p>
      </div>
      <section className=" w-100$ h-[2720px]">
        <Sidebar />
      </section>
      <Footer />
    </div>
  );
};

export default page;