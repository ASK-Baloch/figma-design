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
    <section className="relative ">
      <div className="static lg:relative z-0 ">
        <img
          className=" h-[450px] lg:h-[496px] "
          alt="car JPEG"
          src="image-4.png"
        />
      </div>

      <div className="lg:w-[1060px] lg:h-[658px] sm:h-full z-1 relative -top-48 lg:left-14 sm:left-1 rounded-xl bg-white border shadow-lg sm:w-fit sm:mr-2 lg:ml-8">
        <div
          className="ml-1 lg:w-fill h-[68px] rounded-xl flex lg:gap-12 sm:gap-1 mobile-grid sm:h-[135px] lg:h-fit"
          style={{ backgroundColor: "#EBEBEB" }}
        >
          <img
            className="-ml-1 pt-2 pb-3 pl-14 pr-12 rounded-t-xl sm:rounded-xl sm:-ml-4 lg:ml-0"
            style={{ backgroundColor: "#FFFFFF" }}
            alt="layer JPEG"
            src="Layer_1.png"
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
        <div className="flex flex-wrap">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[190px] h-[52px]  rounded-xl border justify-between px-3 items-center lg:ml-6 sm:ml-2 mt-8 mobile-button"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Make
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[190px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8 mobile-button"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Model
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[175px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 mt-8 mobile-button"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Variant
            </DropdownMenuTrigger>
          </DropdownMenu>
          <Button
            className="flex w-[185px] h-[52px] items-center justify-center px-1 ml-2 mt-8 rounded-xl mobile-button"
            style={{ backgroundColor: "#003087", color: "white" }}
          >
            <Plus />
            Add another vehicle
          </Button>
          <Button
            className="flex w-[200px] h-[52px] items-center justify-center sm:px-1 sm:ml-2 lg:ml-12 mt-8 lg: rounded-xl mobile-button"
            style={{ backgroundColor: "#EF2C2E", color: "white" }}
          >
            <Search className="mx-2" />
            5,221,456 results
          </Button>
        </div>
        <div className="flex mobile-grid ">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[139px] h-[52px]  rounded-xl border justify-between px-3 items-center lg:ml-6 sm:ml-2 lg:mt-8 sm:mt-11 mobile-button"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Price from
              <span>€</span>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[139px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 lg:mt-8 sm:mt-1 mobile-button "
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              price to
              <span>€</span>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[135px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 lg:mt-8 sm:mt-1 mobile-button"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Year from
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[135px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 lg:mt-8 sm:mt-1 mobile-button"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Year up to
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[185px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 lg:mt-8 sm:mt-1 mobile-button"
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Vehicle Type
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <Button
            // flex w-[200px] h-[52px] items-center justify-center sm:px-1 sm:ml-2 lg:ml-12 mt-8 lg: rounded-xl mobile-button
            className="flex w-[200px] h-[52px] items-center justify-center px-5 lg:ml-12 sm:ml-2 lg:mt-8 sm:mt-1 rounded-xl border mobile-button"
            style={{
              backgroundColor: "white",
              color: "#003087",
              borderColor: "#003087",
            }}
          >
            Save Search
          </Button>
        </div>
        <div className="flex mobile-grid">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex w-[140px] h-[52px]  rounded-xl border justify-between px-3 items-center lg:ml-6 lg:mt-8 sm:ml-2 sm:mt-12 mobile-button "
              style={{ borderColor: "#B8B8B8", color: "#444444" }}
            >
              Fuel Type
              <ChevronDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
          <div
            className=" flex w-[428px] h-[52px]  rounded-xl border justify-between px-3 items-center ml-2 lg:mt-8 sm:mt-1 py-4 mobile-button "
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
            className=" flex  w-[180px] h-[52px] rounded-xl border justify-between px-3 items-center ml-2 lg:mt-8 sm:mt-1 py-4 mobile-button "
            style={{ borderColor: "#B8B8B8", color: "#444444" }}
            placeholder="City or ZIP Code"
          ></input>
          <Button
            className="flex w-[200px] h-[52px] items-center justify-center px-5 lg:ml-12 lg:mt-8 sm:mt-1 sm:ml-2 rounded-xl border mobile-button "
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
          className="lg:w-[990px] sm:w-[350px] h-[0px] mt-10 ml-7 border"
          style={{ color: "#B8B8B8" }}
        />
        <div className="flex mobile-grid">
          <div className="flex flex-col">
            <h3 className="w-[134px] h-[24px] font-semibold mt-5 sm:-mb-2    sm:flex sm:justify-center sm:items-center sm:ml-28  lg:ml-6  ">
              Number of seats
            </h3>
            <div className="flex mt-2  sm:grid-rows-2 mobile-half">
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[139px] lg:left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button sm:w-[350px] "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[133px] lg:left-[60px]  ">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mobile-grid">
            <h3 className="w-[134px] h-[24px] font-semibold mt-5  ml-6 sm:flex sm:justify-center sm:items-center sm:ml-32 sm:-mb-2  sm:text-md lg:ml-6 lg:text-base">
              Number of Doors
            </h3>
            <div className="flex mt-2">
              <div
                className="relative lg:w-[239px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button sm:w-[365px]"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  4
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[325px] lg:left-[199px] ">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mobile-grid">
            <h3 className="w-[154px] h-[24px] font-semibold mt-5 ml-6 sm:flex sm:justify-center sm:items-center sm:ml-32 sm:-mb-2  sm:text-md lg:ml-6 lg:text-base">
              Type and condition
            </h3>
            <div className="flex mt-2">
              <div
                className="relative lg:w-[239px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button sm:w-[365px]"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  Any
                </div>
                <div className="absolute w-[40px] h-[52px] top-0  sm:left-[325px] lg:left-[199px] ">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mobile-grid">
            <h3 className="w-[50px] h-[24px] font-semibold mt-5 ml-6 sm:-mb-2    sm:flex sm:justify-center sm:items-center sm:ml-40  lg:ml-6">
              power
            </h3>
            <div className="flex mt-2  sm:grid-rows-2 mobile-half">
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[139px] lg:left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button sm:w-[350px] "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[133px] lg:left-[60px]  ">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:mt-10 lg:mt-0 mobile-grid">
          <div className="flex flex-col mobile-grid">
            <h3 className="w-[148px] h-[24px] font-semibold mt-5 ml-6   sm:flex sm:justify-center sm:items-center sm:ml-28  lg:ml-6">
              Leasing Durations
            </h3>
            <div className="flex mt-2  sm:grid-rows-2 mobile-half">
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[139px] lg:left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button sm:w-[350px] "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[133px] lg:left-[60px]  ">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="w-[226px] h-[24px] font-semibold mt-5 ml-6 sm:flex sm:justify-center sm:items-center sm:ml-16  lg:ml-6">
              Leasing Kilometers per Year
            </h3>
            <div className="flex mt-2  sm:grid-rows-2 mobile-half">
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-7 mobile-button "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  From
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[139px] lg:left-[60px]">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
              <div
                className="relative lg:w-[100px] h-[52px] bg-white rounded-[8px] border lg:ml-7 mobile-button sm:w-[350px] "
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  To
                </div>
                <div className="absolute w-[40px] h-[52px] top-0 sm:left-[133px] lg:left-[60px]  ">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="w-[162px] h-[24px] font-semibold mt-5  sm:flex sm:justify-center sm:items-center sm:ml-32  lg:ml-6 ">
              Origin of the Vehicle
            </h3>
            <div className="flex mt-2">
              <div
                className="relative lg:w-[239px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button sm:w-[365px]"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
                  Home Plates
                </div>
                <div className="absolute w-[40px] h-[52px] top-0  sm:left-[325px] lg:left-[199px] ">
                  <ChevronDown
                    className="w-[40px] h-[52px] rounded-xl"
                    style={{ backgroundColor: "#B8B8B8" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="w-[88px] h-[24px] font-semibold mt-5 ml-6">
              Ownership
            </h3>
            <div className="flex mt-2">
              <div
                className="relative lg:w-[239px] h-[52px] bg-white rounded-[8px] border lg:ml-6 mobile-button sm:w-[365px]"
                style={{ borderColor: "#B8B8B8", color: "#444444" }}
              >
                <div className="absolute top-[14px] left-[16px] font-medium text-body-text"></div>
                <div className="absolute w-[40px] h-[52px] top-0  sm:left-[325px] lg:left-[199px] ">
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
          className="lg:w-[990px] h-[0px] mt-10 ml-7 border sm:w-[350px]  sm:mb-16"
          style={{ color: "#B8B8B8" }}
        />
      </div>
    </section>
  );
};

export default Hero;
