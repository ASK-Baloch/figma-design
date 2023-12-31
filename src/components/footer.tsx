import React from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="relative flex flex-col  "
      style={{ backgroundColor: "#003087" , width:"100vw"}}
    >
      <section
        className="mt-2 flex  w-100% lg:h-[779px] sm:h-[1600px] text-white w-full  sm:flex-col lg:flex-row
      "
        style={{ backgroundColor: "#003087" }}
      >
        <div className="flex flex-col ">
          <h4 className="h-[82px] w-[398px] lg:ml-20 font-semibold text-2xl mt-14 sm:ml-1 ">
            The most wanted makes and models
          </h4>
          <div className="lg:ml-20 w-[410px] mt-5 flex flex-wrap justify-between sm:ml-2 ">
            <Button
              className="flex h-[61px] w-[190px] shadow-md justify-center items-center text-white rounded my-2 mr-3"
              style={{ backgroundColor: "#264F99" }}
            >
              Audi A4
            </Button>
            <Button
              className="flex h-[61px] w-[190px] shadow-md justify-center items-center text-white rounded my-2 mr-3"
              style={{ backgroundColor: "#264F99" }}
            >
              Volkswagen
            </Button>
            <Button
              className="flex h-[61px] w-[190px] shadow-md justify-center items-center text-white rounded my-2 mr-3"
              style={{ backgroundColor: "#264F99" }}
            >
              Skada Octavia
            </Button>
            <Button
              className="flex h-[61px] w-[190px] shadow-md justify-center items-center text-white rounded my-2 mr-3"
              style={{ backgroundColor: "#264F99" }}
            >
              BMW 5 Series
            </Button>
            <Button
              className="flex h-[61px] w-[190px] shadow-md justify-center items-center text-white rounded my-2 mr-3"
              style={{ backgroundColor: "#264F99" }}
            >
              Fiant Punto
            </Button>
            <Button
              className="flex h-[61px] w-[190px] shadow-md justify-center items-center text-white rounded my-2 mr-3"
              style={{ backgroundColor: "#264F99" }}
            >
              Renault Clio
            </Button>
          </div>
          <div className="flex lg:ml-20 sm:ml-12 sm:mt-16 lg:mt-52">
            <div className="flex items-center justify-between w-[156px] h-[40px] bg-white rounded-3xl">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] ml-2"
                  src="translate.png"
                  alt="translatelogo"
                />
                <p className="ml-2" style={{ color: "#003087" }}>
                  English
                </p>
              </div>
              <ChevronDown
                className="cursor-pointer"
                style={{ color: "#003087", marginRight: "10px" }}
              />
            </div>
            <div className="flex items-center justify-center  ml-10 w-[95px] h-[40px] bg-white rounded-3xl">
              <img
                className="w-[20px] h-[20px] ml-1 mx-2"
                src="blue-dot.png"
                alt="bluedot"
              />
              <p
                className="flex justify-center items-center"
                style={{
                  color: "#003087",
                  height: "18px",
                  width: "29px",
                }}
              >
                light
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-20 flex flex-col sm:flex sm:justify-center  sm:items-center lg:block ">
          <h4 className="h-[82px] w-[181px]  font-semibold text-3xl mt-14">
            Quick Links
          </h4>
          <div className="h-[468px] w-[296px] sm:flex sm:flex-col sm:mt-24 lg:mt-0 sm:justify-center  sm:items-center lg:block ">
            <Link
              className="text-white font-normal text-lg "
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Vehicle assessment
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Safe,scan-free used car shopping
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Email ads
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Book of impressions
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Advantages of advertising
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Frequently asked questions
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Digital Advertising
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              About us
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Terms of use
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Privacy notice
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              You provide car services
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Mobile applications
              <br />
            </Link>
            <Link
              className="text-white font-normal text-lg my-2"
              href="/"
              style={{
                fontFamily: "Lora-Regular, Helvetica",
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0",
                lineHeight: "36px",
              }}
            >
              Friends of the site
              <br />
            </Link>
          </div>
        </div>
        <div className="ml-14  ">
          <h4 className="h-[41px] w-[221px] text-wrapper text-3xl lg:mt-14 sm:mt-32 text-end pl-3 sm:ml-4 sm:flex sm:justify-center  sm:items-center lg:block">
            Let`s connect
          </h4>
          <div className="flex lg:justify-start lg:text-start img lg:mt-14 sm:mt-5 twitter-x gap-5 text-xl sm:justify-start sm:ml-4">
            <img src="FB.png" alt="fb" />
            <img src="IG.png" alt="ig" />
            <img src="Lin.png" alt="lin" />
            <img src="YT.png" alt="yt" />
            <img
              src="twitter.png"
              alt="twitter"
              className="layer rounded-full"
            />
          </div>
          <div className=" absolute top-15  mt-12  flex text-start justify-start ">
            <img
              src="googleplay.png"
              alt="googleplay"
              className="w-[133px] h-[37px]"
            />
            <img
              src="appstore.png"
              alt="applestore"
              className="w-[118px] h-[37px]"
            />
          </div>
        </div>
        {/* <div className="flex flex-col">
     <hr
          className=" h-[696px] mt-10 ml-7 "
          style={{ color: "#FFFFFF" }}
        />  
     </div> */}
      </section>
      <section
        className="mt-2  w-100% h-min   text-white
      "
        style={{ color: "#FFFFFF" }}
      >
        <hr
          className="w-[370px] lg:w-[1060px] h-[0px] mt-10 lg:ml-7 sm:-ml-2 border absolute bottom-32 left-9"
          style={{ color: "#B8B8B8" }}
        />
        <p
          className="text-center text-white relative bottom-24 flex justify-center items-center"
          style={{
            fontFamily: "Lora",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "36px",
          }}
        >
          Copyright 2023 Endrobil.no All rights reserved
        </p>
      </section>
    </div>
  );
};

export default Footer;