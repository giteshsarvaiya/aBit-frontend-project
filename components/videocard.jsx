"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function Videocard(props) {
  return (
    <Card
      isFooterBlurred
      className=" h-[300px] w-[300px] col-span-12 sm:col-span-7 text-white-500"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className=" text-white/60 uppercase text-2xl font-bold">
          The Sound of Silence
        </p>
        {/* <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4> */}
      </CardHeader>
      <Image
        removeWrapper
        alt="vidheshi aaadmi"
        className="z-0 w-full h-full object-cover"
        src="https://i.ibb.co/p0LLtvC/image-3.png"
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex justify-between w-full p-2">
          <div className="flex flex-col justify-center items-center">
            <p className="text-tiny text-white/80">Shares</p>
            <p className="text-tiny text-white/80 font-bold">317</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-tiny text-white/80">Offered</p>
            <p className="text-tiny text-white/80 font-bold">75%</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-tiny text-white/80">Raised</p>
            <p className="text-tiny text-white/80 font-bold">$9510</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
