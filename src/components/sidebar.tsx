import React from "react";

import DoubleBoxs from "./icons/box/page";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Sidebar = () => {
  return (
    // <div>
    //   <aside className="h-[2336px] w-[296px] flex bg-green-800">somet</aside>
    // </div>
    <div className="flex gap-2" style={{width:"100vw"}}>
      <aside className="bg-white text-white w-[296px] h-[2550px] ml-14 rounded-xl border shadow-lg">
        <h1
          className="font-semibold text-xl mb-4 flex justify-start items-center pt-5 ml-3"
          style={{ color: "#EF2C2E" }}
        >
          Detailed Search
        </h1>
        <hr
          className="w-[234px] h-[0px] mt-5 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <div className="ml-2 mt-4">
          <p className="text-base font-bold ml-2 " style={{ color: "#1E1E1E" }}>
            Mark,model,Variant
          </p>
          <div className="flex flex-col ">
            <div className="flex mt-2 gap-3">
              <div
                className="relative w-[112px] h-[52px] bg-white rounded-[8px] border "
                style={{ borderColor: "#003087", color: "#003087" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  Mark
                </div>
                <div className="absolute w-[40px] h-[52px] -top-0.5 left-[72px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#00308726" }}
                  />
                </div>
              </div>
              <div
                className="relative w-[112px] h-[52px] bg-white rounded-[8px] border "
                style={{ borderColor: "#003087", color: "#003087" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  Model
                </div>
                <div className="absolute w-[40px] h-[52px] -top-0.5 left-[72px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#00308726" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[235px] h-[52px]  rounded-xl border justify-between px-3 items-center mt-4"
              style={{ borderColor: "#003087", color: "#003087" }}
            >
              Variant
            </DropdownMenuTrigger>
          </DropdownMenu>
          <p
            className="text-base font-bold ml-2 cursor-pointer mt-4 underline flex justify-end mr-5"
            style={{ color: "#EF2C2E" }}
          >
            More
          </p>
        </div>
        <hr
          className="w-[234px] h-[0px] mt-2 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <div className="ml-2 mt-4">
          <p className="text-base font-bold ml-2 " style={{ color: "#1E1E1E" }}>
            Payment Type
          </p>
          <div
            className=" flex w-[238px] h-[52px]  rounded-xl border justify-between items-center  mt-3 py-4"
            style={{ borderColor: "#B8B8B8", color: "#444444" }}
          >
            <Button
              className=" w-[128px] h-[52px] rounded-xl px-8"
              style={{
                backgroundColor: "#EF2C2E",
                color: "#FFFFFF",
                borderColor: "#B8B8B8",
              }}
            >
              Buy
            </Button>
            <span
              className="w-[128px] h-[21px] flex justify-center"
              style={{ color: "#003087" }}
            >
              Leasing
            </span>
          </div>
          <p
            className="text-base font-bold ml-2 mt-6"
            style={{ color: "#1E1E1E" }}
          >
            Year
          </p>
          <DoubleBoxs />
          <p
            className="text-base font-bold ml-2 mt-4"
            style={{ color: "#1E1E1E" }}
          >
            Kilometers
          </p>
          <DoubleBoxs />
          <Button
            className="flex w-[236px] h-[52px] items-center justify-center px-5  mt-6 rounded-xl"
            style={{ backgroundColor: "#EF2C2E", color: "white" }}
          >
            <Search className="mx-2" />
            5,221,456 results
          </Button>
          <Button
            className="flex w-[236px] h-[52px] items-center justify-center px-5  mt-2 rounded-xl border"
            style={{
              backgroundColor: "#003087",
              color: "#FFFFFF",
              borderColor: "#003087",
            }}
          >
            Save Search
          </Button>
        </div>
        <hr
          className="w-[234px] h-[0px] mt-5 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <div className="flex ml-2 mt-4 gap-4">
          <div>
            <p
              className="text-base font-bold ml-2 mb-2 "
              style={{ color: "#1E1E1E" }}
            >
              Fuel Type
            </p>
            <div
              className="relative w-[112px] h-[52px] bg-white rounded-[8px] border "
              style={{ borderColor: "#003087", color: "#003087" }}
            >
              <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                Diesel
              </div>
              <div className="absolute w-[40px] h-[52px] -top-0.5 left-[72px]">
                <ChevronDown
                  className="w-[40px] h-[52px] rounded-xl"
                  style={{ backgroundColor: "#00308726" }}
                />
              </div>
            </div>
          </div>
          <div>
            <p
              className="text-base font-bold ml-2 mb-2 "
              style={{ color: "#1E1E1E" }}
            >
              Vehicle Type
            </p>
            <div
              className="relative w-[112px] h-[52px] bg-white rounded-[8px] border "
              style={{ borderColor: "#003087", color: "#003087" }}
            >
              <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                Coupe
              </div>
              <div className="absolute w-[40px] h-[52px] -top-0.5 left-[72px]">
                <ChevronDown
                  className="w-[40px] h-[52px] rounded-xl"
                  style={{ backgroundColor: "#00308726" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-2 mt-4 ">
          <p
            className="text-base font-bold ml-2  "
            style={{ color: "#1E1E1E" }}
          >
            Power (hp)
          </p>
          <DoubleBoxs />
          <div className="flex flex-col">
            <p
              className="text-base font-bold ml-2 mt-5  "
              style={{ color: "#1E1E1E" }}
            >
              Transmission
            </p>
            <div className="flex mt-2">
              <div
                className="relative w-[239px] h-[52px] bg-white rounded-[8px] border cursor-pointer"
                style={{ borderColor: "#003087", color: "#003087" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  Automatic
                </div>
                <div className="absolute w-[40px] h-[52px] top-0  left-[199px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#00308726" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-2 mt-8 ">
          <p
            className="text-base font-bold ml-2  "
            style={{ color: "#1E1E1E" }}
          >
            Wheel drive
          </p>
          <div className="bg-white flex justify-start  items-center ml-4 mt-4 gap-2  cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Rear-Wheel drive
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-2 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Front-Wheel drive
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-2 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Four-Wheel drive
            </p>
          </div>
        </div>
        <p
          className="text-base font-bold ml-4  mt-8"
          style={{ color: "#1E1E1E" }}
        >
          Electric Vehicles
        </p>
        <div className="flex ml-2 mt-4 gap-4">
          <div>
            <p
              className="text-base font-bold ml-2 mb-2 "
              style={{ color: "#1E1E1E" }}
            >
              Range
            </p>
            <div
              className="relative w-[112px] h-[52px] bg-white rounded-[8px] border cursor-pointer "
              style={{ borderColor: "#003087", color: "#003087" }}
            >
              <div className="absolute top-[14px] left-[16px] font-medium text-body-text"></div>
              <div className="absolute w-[40px] h-[52px] -top-0.5 left-[72px]">
                <ChevronDown
                  className="w-[40px] h-[52px] rounded-xl"
                  style={{ backgroundColor: "#00308726" }}
                />
              </div>
            </div>
          </div>
          <div>
            <p
              className="text-base font-bold ml-2 mb-2 "
              style={{ color: "#1E1E1E" }}
            >
              Charge time
            </p>
            <div
              className="relative w-[112px] h-[52px] bg-white rounded-[8px] border  cursor-pointer"
              style={{ borderColor: "#003087", color: "#003087" }}
            >
              <div className="absolute top-[14px] left-[16px] font-medium text-body-text"></div>
              <div className="absolute w-[40px] h-[52px] -top-0.5 left-[72px]">
                <ChevronDown
                  className="w-[40px] h-[52px] rounded-xl"
                  style={{ backgroundColor: "#00308726" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p
            className="text-base font-bold ml-2 mt-5  "
            style={{ color: "#1E1E1E" }}
          >
            Fast charge time
          </p>
          <div className="flex mt-2 ml-2">
            <div
              className="relative w-[239px] h-[52px] bg-white rounded-[8px] border cursor-pointer "
              style={{ borderColor: "#003087", color: "#003087" }}
            >
              <div className="absolute top-[14px] left-[16px] font-medium text-body-text"></div>
              <div className="absolute w-[40px] h-[52px] top-0  left-[199px]">
                <ChevronDown
                  className="w-[40px] h-[52px] rounded-xl"
                  style={{ backgroundColor: "#00308726" }}
                />
              </div>
            </div>
          </div>
          <div className="flex mt-2 ml-2"></div>
        </div>
        <div className="ml-2 mt-2 gap-4">
          <p
            className="text-base font-bold ml-2  "
            style={{ color: "#1E1E1E" }}
          >
            Battery Capacity
          </p>
          <div className="flex flex-col ">
            <div className="flex mt-2 gap-1">
              <div
                className="relative w-[122px] h-[52px] bg-white rounded-[8px] border cursor-pointer "
                style={{ borderColor: "#003087", color: "#003087" }}
              >
                <div className="absolute top-[14px] left-[5px] font-medium text-sm">
                  From kWh
                </div>
                <div className="absolute w-[40px] h-[52px] -top-0.5 left-[82px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#00308726" }}
                  />
                </div>
              </div>
              <div
                className="relative w-[122px] h-[52px] bg-white rounded-[8px] border cursor-pointer "
                style={{ borderColor: "#003087", color: "#003087" }}
              >
                <div className="absolute top-[14px] left-[5px] font-medium text-sm">
                  Up To kWh
                </div>
                <div className="absolute w-[40px] h-[52px] -top-0.5 left-[82px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#00308726" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className="text-base font-bold ml-2  cursor-pointer mt-4 underline flex justify-end mr-5"
            style={{ color: "#EF2C2E" }}
          >
            More
          </p>
        </div>
        <hr
          className="w-[234px] h-[0px] mt-5 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <div className="ml-2 mt-3 ">
          <p
            className="text-base font-bold ml-2 mt-2  "
            style={{ color: "#1E1E1E" }}
          >
            Exterior Colour
          </p>
          <img
            src="colors.png"
            alt="Exterior colors"
            className=" mt-5 ml-1 h-[60px] w-[230px] cursor-pointer"
          />
        </div>
        <hr
          className="w-[234px] h-[0px] mt-5 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <div className="ml-2 mt-2 ">
          <p
            className="text-base font-bold ml-2  "
            style={{ color: "#1E1E1E" }}
          >
            Wheel set
          </p>
          <div className="bg-white flex justify-start  items-center ml-4 mt-4 gap-2  cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              One set of wheels
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-2 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Two wheel sets
            </p>
          </div>
        </div>
        <hr
          className="w-[234px] h-[0px] mt-5 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <div className="ml-2 mt-2 ">
          <p
            className="text-base font-bold ml-2  "
            style={{ color: "#1E1E1E" }}
          >
            Equipment
          </p>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2  cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
              style={{ color: "#003087", borderColor: "#003087" }}
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Towbar
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Engine Heater
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Navigation system
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Radio DAB+
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Leather Interior
            </p>
          </div>
        </div>
        <hr
          className="w-[234px] h-[0px] mt-5 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <div className="ml-2 mt-2 ">
          <p
            className="text-base font-bold ml-2  "
            style={{ color: "#1E1E1E" }}
          >
            Area
          </p>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2  cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
              style={{ color: "#003087", borderColor: "#003087" }}
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Agder
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Inland
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              More and Romsdal
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Nordland
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Oslo
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Rogaland
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Troms and Finnmark
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Trondelag
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Vestfold and Telemark
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Westland
            </p>
          </div>
          <div className="bg-white flex justify-start  items-center ml-4 mt-3 gap-2 cursor-pointer">
            <img
              src="rectangle.png"
              alt="rectangle"
              className="w-[18px] h-[18px]"
            />
            <p className="text-sm font-medium " style={{ color: "#444444" }}>
              Viken
            </p>
          </div>
        </div>
        <hr
          className="w-[234px] h-[0px] mt-2 ml-2 "
          style={{ color: "#B8B8B8" }}
        />
        <h4
          className="font-semibold text-[22px] pt-2 pl-3 mb-4 flex justify-start items-center ml-3"
          style={{ color: "#EF2C2E" }}
        >
          Detailed Search
        </h4>
      </aside>
      <main className="flex-grow flex-col relative rounded-xl shadow-lg p-2 ">
        <div className="   flex flex-row  gap-2">
          <div className="  w-1/3 space-y-5 shadow-2xl">
            <img className="w-full h-[208px]" alt="car JPEG" src="car1.png" />
            <div className="px-3 ">
              <p className=" text-[23px] h-23 font-poppins font-semibold leading-[22.7px]">
                Volkswagen Tiguan
              </p>
            </div>
            <div className="  px-3 py-0 text-14 h-23 w-[91.73px] h-[26.22px] left-[729.13px] font-poppins text-41 font-semibold leading-[22.7px] text-left text-[#EF2C2E]">
              <p className=" text-[20px] font-poppins font-semibold  leading-[22.7px]">
                20,300€
              </p>
            </div>

            <div className="  flex">
              <div className="flex flex-row  gap-3 pb-3 pl-5 w-full ">
                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    year
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    2019
                  </div>
                </div>
                <div className=" w-[2px]  left-400 top-260 border border-gray-300"></div>

                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Kilometers
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    185.000
                  </div>
                </div>
                <div className=" w-[2px]  left-400 top-260 border border-gray-300"></div>

                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Engine
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    Petrol
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/3 shadow-2xl space-y-5">
            <img className="w-full h-[208px]" alt="car JPEG" src="car2.png" />
            <div className="px-3 ">
              <p className=" text-[23px] h-23 font-poppins font-semibold leading-[22.7px]">
                Ford Mondeo ST
              </p>
            </div>
            <div className="  px-3 py-0 text-14 h-23 w-[91.73px] h-[26.22px] left-[729.13px] font-poppins text-41 font-semibold leading-[22.7px] text-left text-[#EF2C2E]">
              <p className=" text-[20px] font-poppins font-semibold  leading-[22.7px]">
                20,300€
              </p>
            </div>

            <div className="  flex px-3">
              <div className="flex flex-row  gap-3 pb-3 pl-5  w-full ">
                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    year
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    2019
                  </div>
                </div>
                <div className=" w-[2px]  left-400 top-260 border border-gray-300"></div>

                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Kilometers
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    185.000
                  </div>
                </div>
                <div className=" w-[2px]  left-400 top-260 border border-gray-300"></div>

                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Engine
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    Petrol
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 shadow-2xl space-y-5">
            <img className="w-full h-[208px]" alt="car JPEG" src="car1.png" />
            <div className="px-3">
              <p className="text-[23px] h-23 font-poppins font-semibold leading-[22.7px]">
                Volkswagen Tiguan
              </p>
            </div>
            <div className="px-3 py-0 text-14 h-23 w-[91.73px] h-[26.22px] left-[729.13px] font-poppins text-41 font-semibold leading-[22.7px] text-left text-[#EF2C2E]">
              <p className="text-[20px] font-poppins font-semibold leading-[22.7px]">
                20,300€
              </p>
            </div>
            <div className="flex px-3">
              <div className="flex flex-row   gap-3 pb-3 pl-5 w-full ">
                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    year
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center text-black">
                    2019
                  </div>
                </div>
                <div className="w-[2px] left-400 top-260 border border-gray-300"></div>
                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Kilometers
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center text-black">
                    185.000
                  </div>
                </div>
                <div className="w-[2px] left-400 top-260 border border-gray-300"></div>
                <div className="flex flex-col">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Engine
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center text-black">
                    Petrol
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex gap-2 absolute -bottom-32 -right-8 ">
          <img
            src="leftarrow.png"
            alt="leftarrow jpg"
            className="h-[40px] w-[40px]  cursor-pointer"
          />
          <img
            src="rightarrow.png"
            alt="rightarrow jpg"
            className="h-[40px] w-[40px]  cursor-pointer"
          />
        </div>
        <div className=" border-2 rounded-xl mt-4 bg-white p-4 ">
          <div className=" gap-3 flex flex-row  bg-white pr-14  ">
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-1/2 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444]">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24   text-black">
                    <s> 20,300 €</s>
                  </h1>
                </div>

                <div className="w-102 h-18 top-654 left-1045 font-poppins text-12 font-normal leading-18 text-left text-black">
                  + Omregistrering
                </div>

                <div className="flex flex-row gap-3 my-5  ">
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Vehicle Type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Sedan
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        HP/kW
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        55/75
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Gearbox type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Auto
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Doors number
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        4
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Kilometers
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        150,000 km
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        cm3
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2000
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Manufacture year
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2019
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Fuel type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Diesel
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4  my-9 flex flex-row  gap-2 w-full">
                <div className="flex flex-row  my-2 gap-3   ">
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Damaged
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className=" text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      (Not)Registered
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2  text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Guarantee
                    </h1>
                  </div>
                </div>

                <div className=" first-letter:  gap-1 flex flex-row right-1   space-x-2">
                  <div>
                    <HiOutlineLocationMarker className=" h-[30px] w-[30px]" />
                  </div>

                  <div className=" top-1158 left-1452 w-60 h-18">
                    <p className="font-poppins text-12 font-normal leading-18 text-left text-black">
                      Prigrevica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-2 rounded-xl mt-4 bg-red-200 p-4 ">
          <div className=" gap-3 flex flex-row  bg-red-200 pr-14  ">
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-1/2 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444]">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24   text-black">
                    <s> 20,300 €</s>
                  </h1>
                </div>

                <div className="w-102 h-18 top-654 left-1045 font-poppins text-12 font-normal leading-18 text-left text-black">
                  + Omregistrering
                </div>

                <div className="flex flex-row gap-3 my-5  ">
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Vehicle Type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Sedan
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        HP/kW
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        55/75
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Gearbox type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Auto
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Doors number
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        4
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Kilometers
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        150,000 km
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        cm3
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2000
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Manufacture year
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2019
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Fuel type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Diesel
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4  my-9 flex flex-row  gap-2 w-full">
                <div className="flex flex-row  my-2 gap-3   ">
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Damaged
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className=" text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      (Not)Registered
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2  text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Guarantee
                    </h1>
                  </div>
                </div>

                <div className=" first-letter:  gap-1 flex flex-row right-1   space-x-2">
                  <div>
                    <HiOutlineLocationMarker className=" h-[30px] w-[30px]" />
                  </div>

                  <div className=" top-1158 left-1452 w-60 h-18">
                    <p className="font-poppins text-12 font-normal leading-18 text-left text-black">
                      Prigrevica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-2 rounded-xl mt-4 bg-white p-4 ">
          <div className=" gap-3 flex flex-row  bg-white pr-14  ">
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-1/2 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444]">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24   text-black">
                    <s> 20,300 €</s>
                  </h1>
                </div>

                <div className="w-102 h-18 top-654 left-1045 font-poppins text-12 font-normal leading-18 text-left text-black">
                  + Omregistrering
                </div>

                <div className="flex flex-row gap-3 my-5  ">
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Vehicle Type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Sedan
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        HP/kW
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        55/75
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Gearbox type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Auto
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Doors number
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        4
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Kilometers
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        150,000 km
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        cm3
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2000
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Manufacture year
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2019
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Fuel type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Diesel
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4  my-9 flex flex-row  gap-2 w-full">
                <div className="flex flex-row  my-2 gap-3   ">
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Damaged
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className=" text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      (Not)Registered
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2  text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Guarantee
                    </h1>
                  </div>
                </div>

                <div className=" first-letter:  gap-1 flex flex-row right-1   space-x-2">
                  <div>
                    <HiOutlineLocationMarker className=" h-[30px] w-[30px]" />
                  </div>

                  <div className=" top-1158 left-1452 w-60 h-18">
                    <p className="font-poppins text-12 font-normal leading-18 text-left text-black">
                      Prigrevica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-2 rounded-xl mt-4  p-4 "
          style={{ backgroundColor: "#00308726" }}
        >
          <div
            className=" gap-3 flex flex-row  pr-14  "
            style={{ backgroundColor: "#00308726" }}
          >
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-1/2 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444]">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24   text-black">
                    <s> 20,300 €</s>
                  </h1>
                </div>

                <div className="w-102 h-18 top-654 left-1045 font-poppins text-12 font-normal leading-18 text-left text-black">
                  + Omregistrering
                </div>

                <div className="flex flex-row gap-3 my-5  ">
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Vehicle Type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Sedan
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        HP/kW
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        55/75
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Gearbox type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Auto
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Doors number
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        4
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Kilometers
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        150,000 km
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        cm3
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2000
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Manufacture year
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2019
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Fuel type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Diesel
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4  my-9 flex flex-row  gap-2 w-full">
                <div className="flex flex-row  my-2 gap-3   ">
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Damaged
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className=" text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      (Not)Registered
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2  text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Guarantee
                    </h1>
                  </div>
                </div>

                <div className=" first-letter:  gap-1 flex flex-row right-1   space-x-2">
                  <div>
                    <HiOutlineLocationMarker className=" h-[30px] w-[30px]" />
                  </div>

                  <div className=" top-1158 left-1452 w-60 h-18">
                    <p className="font-poppins text-12 font-normal leading-18 text-left text-black">
                      Prigrevica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-2 rounded-xl mt-4 bg-white p-4 ">
          <div className=" gap-3 flex flex-row  bg-white pr-14  ">
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-1/2 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444]">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24   text-black">
                    <s> 20,300 €</s>
                  </h1>
                </div>

                <div className="w-102 h-18 top-654 left-1045 font-poppins text-12 font-normal leading-18 text-left text-black">
                  + Omregistrering
                </div>

                <div className="flex flex-row gap-3 my-5  ">
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Vehicle Type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Sedan
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        HP/kW
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        55/75
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Gearbox type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Auto
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Doors number
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        4
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Kilometers
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        150,000 km
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        cm3
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2000
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Manufacture year
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2019
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Fuel type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Diesel
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4  my-9 flex flex-row  gap-2 w-full">
                <div className="flex flex-row  my-2 gap-3   ">
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Damaged
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className=" text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      (Not)Registered
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2  text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Guarantee
                    </h1>
                  </div>
                </div>

                <div className=" first-letter:  gap-1 flex flex-row right-1   space-x-2">
                  <div>
                    <HiOutlineLocationMarker className=" h-[30px] w-[30px]" />
                  </div>

                  <div className=" top-1158 left-1452 w-60 h-18">
                    <p className="font-poppins text-12 font-normal leading-18 text-left text-black">
                      Prigrevica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-2 rounded-xl mt-4 bg-white p-4 ">
          <div className=" gap-3 flex flex-row  bg-white pr-14  ">
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-1/2 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444]">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24   text-black">
                    <s> 20,300 €</s>
                  </h1>
                </div>

                <div className="w-102 h-18 top-654 left-1045 font-poppins text-12 font-normal leading-18 text-left text-black">
                  + Omregistrering
                </div>

                <div className="flex flex-row gap-3 my-5  ">
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Vehicle Type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Sedan
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        HP/kW
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        55/75
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Gearbox type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Auto
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Doors number
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        4
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Kilometers
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        150,000 km
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        cm3
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2000
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/4 flex flex-col  gap-3">
                    <div className="flex-flex-col gap-2">
                      <h1 className="  w-62 h-15 top-690 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Manufacture year
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        2019
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="w-33 h-15 top-736 left-1045 font-poppins text-[14px] font-normal leading-15 text-left bg-#444444">
                        Fuel type
                      </h1>
                      <h1 className="  w-62 h-18 top-707 left-1045 font-poppins text-[14px] font-bold leading-18 text-left text-black">
                        Diesel
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4  my-9 flex flex-row  gap-2 w-full">
                <div className="flex flex-row  my-2 gap-3   ">
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Damaged
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className=" text-[#035afcee] px-4 py-2 text-[16px] font-2xl font-semibold   leading-15 text-left">
                      (Not)Registered
                    </h1>
                  </div>
                  <div className=" rounded-2xl bg-gray-300   left-[1045px] py-2 px-2">
                    <h1 className="  text-[#035afcee] px-4 py-2  text-[16px] font-2xl font-semibold   leading-15 text-left">
                      Guarantee
                    </h1>
                  </div>
                </div>

                <div className=" first-letter:  gap-1 flex flex-row right-1   space-x-2">
                  <div>
                    <HiOutlineLocationMarker className=" h-[30px] w-[30px]" />
                  </div>

                  <div className=" top-1158 left-1452 w-60 h-18">
                    <p className="font-poppins text-12 font-normal leading-18 text-left text-black">
                      Prigrevica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="h-[3420px] w-full"  style={{ backgroundColor:"#EDEEF0"}}>
      <div className="flex h-[40px] w-[110px] bg-red-500 rounded-xl text-white justify-center cursor-pointer items-center mt-[1000px] ml-6">
          <ChevronUp />
          <p className="text-sm">Back to Top</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
