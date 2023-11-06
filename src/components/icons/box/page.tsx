import { ChevronDown } from "lucide-react";
import React from "react";

const DoubleBoxs = () => {
  return (
    <div className="flex">
      <div className="flex flex-col ">
        <div className="flex mt-2 gap-3">
          <div
            className="relative w-[112px] h-[52px] bg-white rounded-[8px] border cursor-pointer "
            style={{ borderColor: "#003087", color: "#003087" }}
          >
            <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
              From
            </div>
            <div className="absolute w-[40px] h-[52px] -top-0.5 left-[72px]">
              <ChevronDown
                className="w-[40px] h-[52px] rounded-xl"
                style={{ backgroundColor: "#00308726" }}
              />
            </div>
          </div>
          <div
            className="relative w-[112px] h-[52px] bg-white rounded-[8px] border cursor-pointer "
            style={{ borderColor: "#003087", color: "#003087" }}
          >
            <div className="absolute top-[14px] left-[16px] font-medium text-body-text">
              To
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
    </div>
  );
};

export default DoubleBoxs;
