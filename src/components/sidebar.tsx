import React from "react";
import Boxs from "./icons/box/page";
import DoubleBoxs from "./icons/box/page";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
const Sidebar = () => {
  return (
    // <div>
    //   <aside className="h-[2336px] w-[296px] flex bg-green-800">somet</aside>
    // </div>
    <div className="flex gap-2">
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
      <main className="flex-grow flex-col relative rounded-xl shadow-lg p-2 w-[846px] h-[2465px] bg-red-500 mr-32">
        <img src="image-4.png" alt="npooo" />
        <div className="flex h-[40px] w-[110px] bg-red-500 rounded-xl text-white justify-center cursor-pointer items-center absolute top-[1160px] -right-[118px]">
          <ChevronUp />
          <p className="text-sm">Back to Top</p>
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
      </main>
    </div>
  );
};

export default Sidebar;
