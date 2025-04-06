import React, { useState, useEffect } from "react";
import { useRide } from "../../context/RiderContext";
import horse from "../../assets/icons/horse.png";
import water from "../../assets/icons/water.png";
import swing from "../../assets/icons/wheel.png";

const Sidebar = () => {
  const [bg, setBg] = useState(
    "conic-gradient(from 0deg, rgb(232, 233, 241) 45deg, rgb(250, 213, 0) 115deg, rgb(250, 213, 0) 165deg, rgb(232, 233, 241) 235deg, rgb(232, 233, 241))"
  );

  const { activeTab, setActiveTab } = useRide();

  useEffect(() => {
    let gradient = "";

    if (activeTab === "Water") {
      gradient = `conic-gradient(
        from 0deg,
        rgb(232, 233, 241) -5deg,
        rgb(250, 213, 0) 65deg,
        rgb(250, 213, 0) 115deg,
        rgb(232, 233, 241) 185deg,
        rgb(232,233,241)
      )`;
    } else if (activeTab === "Land") {
      gradient = `conic-gradient(
        from 0deg,
        rgb(232, 233, 241) -55deg,
        rgb(250, 213, 0) 15deg,
        rgb(250, 213, 0) 65deg,
        rgb(232, 233, 241) 135deg,
        rgb(232, 233, 241)
      )`;
    } else if (activeTab === "Kids") {
      gradient = `conic-gradient(
        from 0deg,
        rgb(232, 233, 241) 45deg,
        rgb(250, 213, 0) 115deg,
        rgb(250, 213, 0) 165deg,
        rgb(232, 233, 241) 235deg,
        rgb(232, 233, 241)
      )`;
    }

    setBg(gradient);
  }, [activeTab]);

  return (
    <div className="relative mt-6 h-[800px] w-[380px] overflow-visible rounded-xl flex" style={{ minWidth: "380px" }}>
      <div className="relative h-full w-[300px]" style={{ background: "#1e2a47" }}>
        <div
          className="absolute right-[40px] top-0 w-[550px] h-[550px] rounded-full"
          style={{ background: bg }}
        >
          <div
            className="absolute left-[80px] top-[80px] w-[390px] h-[390px] rounded-full"
            style={{ background: "rgb(34, 48, 74)" }}
          />
        </div>

        <div
          className={`absolute w-[135px] h-[135px] rounded-full border-[10px] border-yellow-400 bg-white transition-all duration-500 ease-in-out ${activeTab === "Land"
            ? "left-[54px] top-[22px]"
            : activeTab === "Water"
              ? "left-[150px] top-[202px]"
              : "left-[37px] top-[409px]"
            }`}
        />
      </div>

      <div className="relative h-full flex-1 pl-4" style={{ minWidth: "80px" }}>

        <div className="relative -left-[221px] top-[58px]">
          <img
            src={swing}
            className={`h-[54px] transition-transform duration-300 ${activeTab === "Land" ? "scale-125" : "scale-100"
              }`}
            onClick={() => setActiveTab("Land")}
          />
        </div>
        <div
          className="absolute left-[-90px] top-[35px] group cursor-pointer transition-all duration-300 flex items-center text-white"
          onClick={() => setActiveTab("Land")}
        >
          <div className="mr-3 flex flex-col gap-1 transition-all duration-300 opacity-90 group-hover:opacity-100">
            <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">
              Land
            </span>
            <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-[#788beb] px-3">
              73 Rides
            </span>
          </div>
        </div>


        <div className="relative -left-[123px] top-[190px]">
          <img
            src={water}
            className={`h-[54px] transition-transform duration-300 ${activeTab === "Water" ? "scale-125" : "scale-100"
              }`}
            onClick={() => setActiveTab("Water")}
          />
        </div>
        <div
          className="absolute left-[-10px] top-[240px] group cursor-pointer transition-all duration-300 flex items-center text-white"
          onClick={() => setActiveTab("Water")}
        >
          <div className="mr-3 flex flex-col gap-1 transition-all duration-300 opacity-90 group-hover:opacity-100">
            <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">
              Water
            </span>
            <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-[#788beb] px-3">
              54 Rides
            </span>
          </div>
        </div>


        <div className="relative -left-[240px] top-[338px]">
          <img
            src={horse}
            className={`h-[54px] transition-transform duration-300 ${activeTab === "Kids" ? "scale-125" : "scale-100"
              }`}
            onClick={() => setActiveTab("Kids")}
          />
        </div>
        <div
          className="absolute left-[-75px] top-[470px] group cursor-pointer transition-all duration-300 flex items-center text-white"
          onClick={() => setActiveTab("Kids")}
        >
          <div className="mr-3 flex flex-col gap-1 transition-all duration-300 opacity-90 group-hover:opacity-100">
            <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">
              Kids
            </span>
            <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-[#788beb] px-3">
              35 Rides
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
