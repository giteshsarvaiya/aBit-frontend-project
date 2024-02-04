import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-white-500 w-full">
      <footer className="justify-center md:justify-center flex h-[40vh]  w-full items-center border-t-2 border-[#D8D8D8] ">
        <div className="md:flex md:flex-row w-[90vw] md:justify-between flex flex-col ">
          <div className="flex flex-col md:items-start items-center gap-2">
            <div>
              <p className="text-black-900 font-bold text-2xl pb-4"> aBit </p>
            </div>
            <div className="text-black-900 md:text-xl text-sm">
              <p className="text-center">
                Changing the way in which <br />
                creators and fans interact.
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-row  flex flex-col gap-6">
            <div className="md:border-l-2 border-t-2 mt-2 border-[#9F9D9D] "></div>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <Link
                className="text-black-900 font-bold md:text-xl text-sm "
                href="#"
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                className="text-black-900 font-bold md:text-xl text-sm"
                href="#"
              >
                {" "}
                Are you a Creator ?{" "}
              </Link>
              <Link
                className="text-black-900 font-bold md:text-xl text-sm"
                href="#"
              >
                {" "}
                Support{" "}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
