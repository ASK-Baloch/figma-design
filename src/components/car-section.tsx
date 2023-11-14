"use server";
import React from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Sidebar from "./aside-section";
import DropDown from "@/components/dropdown";
const Cars = () => {

  return (
    <div className="flex gap-2 w-fit">
      <div className="lg:block hidden ml-14">
        <Sidebar />
      </div>
      <div className="lg:hidden z-50 absolute top-[31rem]">
        <DropDown />
      </div>
      <main className="flex-grow flex-col relative rounded-xl shadow-lg py-2 px-1 z-10">
        <div className="flex flex-row  gap-2">
          <div className="lg:w-1/3 lg:space-y-5 shadow-2xl sm:w-28  ">
            <img className="w-full h-[208px]" alt="car JPEG" src="car1.png" />
            <div className="px-3 ">
              <p className=" lg:text-[23px] h-23 font-poppins font-semibold lg:leading-[22.7px] sm:flex  sm:justify-end lg:block">
                Volkswagen Tiguan
              </p>
            </div>
            <div className="  px-3 py-0 text-14 h-23 w-[91.73px] h-[26.22px] left-[729.13px] font-poppins text-41 font-semibold leading-[22.7px] text-left text-[#EF2C2E]">
              <p className=" text-[20px] font-poppins font-semibold  leading-[22.7px]">
                20,300€
              </p>
            </div>

            <div className="  flex">
              <div className="flex sm:flex-col lg:flex-row  gap-3 pb-3 pl-5 w-full ">
                <div className="flex flex-col sm:-ml-9 lg:ml-0">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    year
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    2019
                  </div>
                </div>
                <div className="lg:w-[2px]  lg:left-400 lg:top-260 border sm:w-16  border-gray-300">
                </div>

                <div className="flex flex-col sm:-ml-7 lg:ml-0">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Kilometers
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    185.000
                  </div>
                </div>
                <div className=" lg:w-[2px]  lg:left-400 lg:top-260 sm:w-16 border border-gray-300"></div>

                <div className="flex flex-col sm:-ml-9 lg:ml-0">
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
          <div className="lg:w-1/3 lg:space-y-5 shadow-2xl sm:w-28">
            <img className="w-full h-[208px]" alt="car JPEG" src="car2.png" />
            <div className="px-3 ">
              <p className="lg:text-[23px] h-23 font-poppins font-semibold lg:leading-[22.7px] sm:flex sm:text-sm sm:font-bold sm:leading-[22.7px] sm:justify-end lg:block">
                Ford Mondeo ST
              </p>
            </div>
            <div className="  px-3 py-0 text-14 h-23 w-[91.73px] h-[26.22px] left-[729.13px] font-poppins text-41 font-semibold leading-[22.7px] text-left text-[#EF2C2E]">
              <p className=" text-[20px] font-poppins font-semibold  leading-[22.7px]">
                20,300€
              </p>
            </div>

            <div className="  flex px-3">
              <div className="flex sm:flex-col lg:flex-row  gap-3 pb-3 pl-5  w-full">
                <div className="flex flex-col sm:-ml-9 lg:ml-0">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    year
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    2019
                  </div>
                </div>
                <div className="lg:w-[2px]  lg:left-400 lg:top-260 border sm:w-16 sm:-ml-3  lg:ml-0 border-gray-300"></div>

                <div className="flex flex-col sm:-ml-7 lg:ml-0">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Kilometers
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    185.000
                  </div>
                </div>
                <div className=" lg:w-[2px]  lg:left-400 lg:top-260 border sm:w-16 sm:-ml-3 lg:ml-0 border-gray-300"></div>

                <div className="flex flex-col sm:-ml-9 lg:ml-0">
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
          <div className="lg:w-1/3 lg:space-y-5 shadow-2xl sm:w-28  ">
            <img className="w-full h-[208px]" alt="car JPEG" src="car1.png" />
            <div className="px-3 ">
              <p className=" lg:text-[23px] h-23 font-poppins font-semibold lg:leading-[22.7px] sm:flex  sm:justify-end lg:block">
                Volkswagen Tiguan
              </p>
            </div>
            <div className="  px-3 py-0 text-14 h-23 w-[91.73px] h-[26.22px] left-[729.13px] font-poppins text-41 font-semibold leading-[22.7px] text-left text-[#EF2C2E]">
              <p className=" text-[20px] font-poppins font-semibold  leading-[22.7px]">
                20,300€
              </p>
            </div>

            <div className="  flex">
              <div className="flex sm:flex-col lg:flex-row  gap-3 pb-3 pl-5 w-full ">
                <div className="flex flex-col sm:-ml-9 lg:ml-0">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    year
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    2019
                  </div>
                </div>
                <div className="lg:w-[2px]  lg:left-400 lg:top-260 border sm:w-16  border-gray-300">
                </div>

                <div className="flex flex-col sm:-ml-7 lg:ml-0">
                  <div className="w-29.32 h-11.92 top-498.6 left-731.02 font-poppins text-9 font-normal leading-14 text-center text-black">
                    Kilometers
                  </div>
                  <div className="w-25.53 h-14.3 top-513.7 left-732.92 font-poppins text-11 font-semibold leading-17 text-center  text-black">
                    185.000
                  </div>
                </div>
                <div className=" lg:w-[2px]  lg:left-400 lg:top-260 sm:w-16 border border-gray-300"></div>

                <div className="flex flex-col sm:-ml-9 lg:ml-0">
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
        </div>
        <div className=" border-2 rounded-xl mt-4 bg-white p-4 ">
          <div className=" gap-3 flex flex-row  bg-white pr-14  ">
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-3/4 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black float-left">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444] flex justify-end float-right">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24 flex justify-center items-center -mt-1  text-black">
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
                  <h1 className=" w-3/4 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black float-left">
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
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24  -mt-1 text-black">
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
                  <h1 className="  w-3/4 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black float-left">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444] flex justify-end float-right">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24 flex justify-center items-center -mt-1  text-black">
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
        <div
          className=" border-2 rounded-xl mt-4  p-4  "
          style={{ backgroundColor: "#00308726" }}
        >
          <div className=" gap-3 flex flex-row  pr-14  ">
            <div className=" w-1/3 ">
              <img className="w-full h-full" alt="car JPEG" src="car2.png" />
            </div>
            <div className=" w-3/4">
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <h1 className="  w-3/4 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black float-left">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className="  w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444] flex justify-end float-right">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24 -mt-1  text-black">
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
                  <h1 className="  w-3/4 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black float-left">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444] flex justify-end float-right">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24 flex justify-center items-center -mt-1  text-black">
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
                  <h1 className="  w-3/4 h-[30px] font-poppins text-2xl font-semibold leading-[30px] text-left  text-black float-left">
                    Volkswagen Polo 1.2 TDI
                  </h1>
                  <p className=" w-1/2  h-[18px] font-poppins text-[14px] font-normal leading-[18px] text-Second text-[#444444] flex justify-end float-right">
                    Date Published: 12/10/2023
                  </p>
                </div>

                <div className="flex flex-row  py-4   gap-4 ">
                  <div className="  text-[24px]  h-[26.22px] left-[729.13px] font-poppins  font-semibold leading-[22.7px]   text-[#EF2C2E]">
                    <p className=" text-[28px] font-poppins font-bold  leading-[22.7px]">
                      20,300€
                    </p>
                  </div>
                  <h1 className="   h-[26.22px]  left-[729.13px]  font-poppins text-[20px] font-normal leading-24 flex justify-center items-center -mt-1  text-black">
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
        <div className=" flex gap-2 relative float-right pr-14 top-28 ">
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
      <div
        className="h-[4240px] w-full -mt-20 "
        style={{ backgroundColor: "#EDEEF0" }}
      >
        <div className="flex h-[40px] w-[110px] bg-red-500 rounded-xl text-white justify-center cursor-pointer items-center mt-[1000px] ml-1 mr-3">
          <ChevronUp />
          <p className="text-sm">Back to Top</p>
        </div>
      </div>
    </div>
  );
};

export default Cars;
