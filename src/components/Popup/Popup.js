import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/94518-ep-expenses-and-movements.json";
import money from "../../assets/lotties/90507-money-saving.json";

function PopupModel() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: money,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="w-full h-screen ">
        <div className=" flex flex-col mx-auto">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="flex flex-col ">
          <Popup
            trigger={
              <button className="button w-1/2 mx-auto rounded-2xl p-2">
                {" "}
                <div>
                  <a class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="relative">ADD YOUR INCOME AND EXPENSES</span>
                  </a>
                </div>
              </button>
            }
            modal
          >
            <div className="w-full h-full">
              <div className="w-full h-[100%]  flex flex-row items-center">
                <div className="w-96  h-full hidden md:block lg:block">
                  <Lottie options={defaultOptions1} height={400} width={400} />
                </div>
                <div className="flex flex-col mx-auto">
                  <a class="rounded-md mb-4 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 ">
                    <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                      <Link to="/portal/tracker" className="">
                        INCOME
                      </Link>
                    </span>
                  </a>
                  <a class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                    <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                      <Link to="/portal/dashboard">EXPENSES</Link>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
}

export default PopupModel;
