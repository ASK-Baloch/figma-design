import React from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      className="mt-2 flex  w-100% h-[771px] text-white
      "
      style={{ backgroundColor: "#003087" }}
    >
      <div className="flex flex-col " >
        <h4 className="h-[82px] w-[398px] ml-20 font-semibold text-2xl mt-14">
          The most wanted makes and models
        </h4>
        <div className="ml-20 w-[410px] mt-5 flex flex-wrap justify-between">
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
        <div className="flex mt-52 ml-20">
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
      <div className="ml-20 flex flex-col">
        <h4 className="h-[82px] w-[181px]  font-semibold text-3xl mt-14">
          Quick Links
        </h4>
        <div className="h-[468px] w-[296px] ">
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
     <div className="ml-14 ">
     <h4 className="h-[41px] w-[221px] text-wrapper text-3xl mt-14 text-end pl-3">
          Let`s connect
        </h4>
        <div className="flex justify-start text-start img mt-14 twitter-x gap-5 text-xl">
          <img src="FB.png" alt="fb" />
          <img src="IG.png" alt="ig" />
          <img src="Lin.png" alt="lin" />
          <img src="YT.png" alt="yt" />
          <img src="twitter.png" alt="twitter" className="layer rounded-full" />
        </div>
        <div className=" absolute top-15 right-12 mt-12  flex text-start justify-start ">
          <img src="googleplay.png" alt="googleplay"  className="w-[133px] h-[37px]"/>
          <img src="appstore.png" alt="applestore"  className="w-[118px] h-[37px]"/>
        </div>
     </div>
     {/* <div className="flex flex-col">
     <hr
          className=" h-[696px] mt-10 ml-7 "
          style={{ color: "#FFFFFF" }}
        />  
     </div> */}
    </section>
  );
};

export default Footer;
