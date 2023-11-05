// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ArrowDown, ChevronDown, ChevronUp, Plus, Search } from "lucide-react";
import { FaChevronDown, FaRegSquare } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative z-0">
        <img
          className="w-[1920px] h-[496px]"
          alt="car JPEG"
          src="image-4.png"
        />
      </div>
      <div className="w-[1060px] h-[718px]  z-1 relative -top-48 left-14 rounded-xl bg-white border shadow-lg">
        <div className="ml-1 w-fill h-[68px] rounded-xl flex gap-12"
          style={{ backgroundColor: "#EBEBEB" }}
        >
          <img
            className="-ml-1 pt-2 pb-3 pl-14 pr-12 rounded-t-xl"
            style={{ backgroundColor: "#FFFFFF" }}
            alt="layer JPEG"
            src="layer_1.png"
          />
          <img
            className=" pt-2 pb-3 pl-10 pr-10 rounded-xl"
            alt="bike JPEG"
            src="bike.png"
          />
          <img
            className=" pt-2 pb-3 pl-10 pr-10 rounded-xl"
            alt="bicycle JPEG"
            src="bicycle.png"
          />
          <img
            className=" pt-2 pb-3 pl-10 pr-10 rounded-xl"
            alt="truck JPEG"
            src="truck.png"
          />
          <img
            className=" pt-2 pb-3 pl-10 pr-10 rounded-xl"
            alt="rickshaw JPEG"
            src="rickshaw.png"
          />
          <img
            className=" pt-2 pb-3 pl-10 pr-10 rounded-xl"
            alt="ship JPEG"
            src="ship.png"
          />
        </div>
        <div className="flex ">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[190px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-6 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Make
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[190px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Model
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[175px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Variant
            </DropdownMenuTrigger>
          </DropdownMenu>
          <Button
            className="flex w-[185px] h-[52px] items-center justify-center px-1 ml-2 mt-8 rounded-xl"
            style={{ backgroundColor: "#003087", color: "white" }}
          >
            <Plus />
            Add another vehicle
          </Button>
          <Button
            className="flex w-[200px] h-[52px] items-center justify-center px-5 ml-12 mt-8 rounded-xl"
            style={{ backgroundColor: "#EF2C2E", color: "white" }}
          >
            <Search className="mx-2" />
            5,221,456 results
          </Button>
        </div>
        <div className="flex ">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[139px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-6 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Price from
              <span>€</span>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[139px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              price to
              <span>€</span>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[135px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Year from
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[135px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Year up to
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[185px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Vehicle Type
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <Button
            className="flex w-[200px] h-[52px] items-center justify-center px-5 ml-12 mt-8 rounded-xl border"
            style={{
              backgroundColor: "white",
              color: "#003087",
              borderColor: "#003087",
            }}
          >
            Save Search
          </Button>
        </div>
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[140px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-6 mt-8"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Fuel Type
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <div
            className=" flex w-[428px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8 py-4"
            style={{ borderColor: "#B8B8B8", color: "#444444" }}
          >
            <span
              className="w-[98px] h-[21px] whitespace-nowrap mx-1"
              style={{ color: "#444444" }}
            >
              Payment type
            </span>
            <Button
              className=" w-[152px] h-[52px] rounded-xl px-8"
              style={{
                backgroundColor: "#EF2C2E",
                color: "#FFFFFF",
                borderColor: "#B8B8B8",
              }}
            >
              Buy
            </Button>
            <span
              className="w-[98px] h-[21px] flex justify-center"
              style={{ color: "#003087" }}
            >
              Leasing
            </span>
          </div>
          <input
            className=" flex  w-[180px] h-[52px] rounded-xl border justify-between px-3 items-center ml-2 mt-8 py-4"
            style={{ borderColor: "#B8B8B8", color: "#444444" }}
            placeholder="City or ZIP Code"
          ></input>
          <Button
            className="flex w-[200px] h-[52px] items-center justify-center px-5 ml-12 mt-8 rounded-xl border"
            style={{
              backgroundColor: "white",
              color: "#003087",
              borderColor: "#003087",
            }}
          >
            Close Filter
            <ChevronUp className="mx-2" />
          </Button>
        </div>
        <hr
          className="w-[990px] h-[0px] mt-10 ml-7 border"
          style={{ color: "#B8B8B8" }}
        />      
        <div className="flex">
          <div className="flex flex-col">
            <h3 className="w-[134px] h-[24px] font-semibold mt-5 ml-6">Number of seats</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[100px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative w-[100px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="w-[134px] h-[24px] font-semibold mt-5 ml-6">Number of Doors</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[239px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  4
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[199px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="w-[154px] h-[24px] font-semibold mt-5 ml-6">Type and condition</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[239px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  Any
                </div>
                <div className="absolute w-[40px] h-[52px] top-0  left-[199px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="w-[50px] h-[24px] font-semibold mt-5 ml-6">power</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[100px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative w-[100px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
        <div className="flex flex-col">
            <h3 className="w-[148px] h-[24px] font-semibold mt-5 ml-6">Leasing Durations</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[100px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative w-[100px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="w-[226px] h-[24px] font-semibold mt-5 ml-6">Leasing Kilometers per Year</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[110px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[69px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative w-[110px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[69px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="w-[162px] h-[24px] font-semibold mt-5 ml-6">Origin of the Vehicle</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[239px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  Home plates
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[199px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="w-[88px] h-[24px] font-semibold mt-5 ml-6">Ownership</h3>
            <div className="flex mt-2">
              <div
                className="relative w-[219px] h-[52px] bg-white rounded-[8px] border ml-6"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">

                </div>
                <div className="absolute w-[40px] h-[52px] top-0 left-[179px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          className="w-[990px] h-[0px] mt-10 ml-7 border"
          style={{ color: "#B8B8B8" }}
        />  
      </div>
    </section>
  );
};

export default Hero;
