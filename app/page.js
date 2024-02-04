'use client'
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Videocard from "@/components/videocard";
import { Image } from 'next/image';
import {NextUIProvider} from "@nextui-org/react";
import {Card, CardHeader, CardFooter, Button} from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <NextUIProvider>
    <div className="bg-white-500 h-[100vh]">
      <Navbar />
      <main className="w-full" >
        <img className=" object-cover h-[20vh] md:h-[40vh] w-full " src="https://s3-alpha-sig.figma.com/img/476d/21b6/b66d780a7fbb10091dc98cfc3c3974b4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOLFGBWgO7o7xtyUWi78HlhehDSr2qpDvGXjNaNzO~BjdmAu~ZfVUiaFPrh6WWi7nfn88vbAazOYERqxqCaPvo1v31riwj9qINM~ZaCiyxj9-eSOXod9YzpxEyGM0icddt-xjd0VMaHK4FH9VqJKCjpG4W4laY1ir9PZ9GCv-GpyLKTQNZ-hrBFlvaJ2qtnTvc5v6VOgtM-X4koEgzJKkkDE2kwXRM8mh9QXP8~wn0CwH3Leph9LUXvHyQBB~EOwajo2TTd4QMc22wbDUtl2l2LCaJ349vaPshvIAOeCbuq4OxuK~uX1JBqt0OKq1ln4lLxU5P-BMn8iIQX4auuFSg__">
        </img>
        <div className="z-10 absolute md:left-[5vw] md:top-[50vh] left-[8vw] top-[30vh]">
        <div className="flex w-20 md:w-[450px] md:h-40 h-30 rounded-xl bg-gray-500 ">
<div><img className="md:h-40 md:w-[220px] h-30 w-20 z-10 bg-cover rounded-xl border-2 md:rounded-tl-xl md:rounded-tr-none md:rounded-br-none md:border-l-0 md:border-t-0 md:border-b-0 md:rounded-bl-xl border-r-2" src="https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__"></img></div>
<div className=" hidden md:flex md:flex-col p-4 items-start justify-between gap-2 md:gap-0 ">
    <div className="flex justify-between w-full items-center"> <p className="font-bold uppercase Md:text-2xl text-sm" >DAN MACE</p> <p className="text-sm text-gray-650">/Johny_Films/</p> </div>
    <div className=" flex-col items-start py-2 hidden md:flex md:flex-col"><p className="text-sm text-gray-650 font-bold" >Bio</p> <p className="text-sm text-gray-650" >Bio
Simply a film fan creating original content for YouTube. Let’s Collaborate.
</p> </div>
<div className="flex border-2 w-full rounded-md" >
  <div className="flex justify-center items-center border-r-2 w-full" > <p className="text-sm text-[#313131]" >Creator</p> </div>
  <div className="w-full bg-gray-900 h-full"></div>
</div>
</div>

</div>
        </div>
        <div className="bg-[#292828] h-[40px] text-white-500 flex justify-center items-center">
          <p className=" text-sm md:text-2xl overflow-hidden whitespace-nowrap" >John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</p>
        </div>
{/* bio and name card for mobile deviceses starts here */}
        <div className=" flex justify-center md:hidden md:pt-36 pt-20 pb-4">
          <div className="w-[90vw] flex flex-col px-4 gap-2">
            <div className="flex justify-start items-center gap-2"><p className="font-bold uppercase text-lg" >DAN MACE</p> <p className="text-sm text-gray-650">/Johny_Films/</p></div>
            <div className=" flex items-center justify-start md:hidden"> <p className="text-start text-sm text-gray-650" >
Simply a film fan creating original content for YouTube. Let’s Collaborate.
</p>   </div>
            </div>
        </div>
{/* bio and name card for mobile deviceses end here */}
<div className="md:hidden">
        <div className="md:border-l-2 border-t-2 mt-2 border-[#9F9D9D] w-full "></div>
        </div>
        <div className=" flex justify-center ">
          <div className='w-[90vw] md:pt-36 md:pb-10'>


          <div className="md:flex-row flex flex-col justify-between w-full text-sm md:text-2xl">
            <div className="flex flex-col gap-2 md:justify-start justify-center p-4 md:p-0"><p className="text-start md:text-start text-3xl">Releases</p> <p className="text-start md:text-start text-[#565656] text-base ">Videos that you upload in collaboration with aBit appear here.</p></div>
            <div className="flex gap-2 justify-center md:gap-20 p-4 md:p-0">
            <div className='flex  text-sm '>
            <div className='border-l-2 border-[#9F9D9D]'></div>
              <div className="flex flex-col items-start justify-center pl-2">
                <p className="text-[#565656] font-bold">1</p>
                <p className="whitespace-pre-line text-[#696969] ">Shared <br></br>
                  videos</p>
              </div>
            </div>
            <div className='flex  text-sm'>
            <div className='border-l-2 border-[#9F9D9D]'></div>
              <div className="flex flex-col items-start justify-center pl-2">
                <p className="text-[#565656] font-bold">$9510</p>
                <p className="whitespace-pre-line text-[#696969] ">Funds <br></br>
                  Raised</p>
              </div>
            </div>
            <div className='flex  text-sm'>
            <div className='border-l-2 border-[#9F9D9D]'></div>
              <div className="flex flex-col items-start justify-center pl-2">
                <p className="text-[#565656] font-bold">317</p>
                <p className="whitespace-pre-line text-[#696969] ">Co-owner <br></br>
                  Community</p>
              </div>
            </div>
            <div className='flex  text-sm'>
            <div className='border-l-2 border-[#9F9D9D]'></div>
              <div className="flex flex-col items-start justify-center pl-2">
                <p className="text-[#565656] font-bold">$3804</p>
                <p className="whitespace-pre-line text-[#696969] ">Co-owner <br></br>
                  Earnings</p>
              </div>
            </div>
            </div>
          </div>

{/* videos */}
          <div className='py-10 md:pt-20 flex md:flex-row flex-col justify-center items-center md:justify-start md:items-center md:gap-8 gap-4'>
{/* empty card */}
          <Card className=" bg-gray-500 h-[300px] w-[300px] col-span-12 sm:col-span-7 text-white-500">

            <div className="w-full h-full flex flex-col justify-center items-center p-2">
              <div className='text-[#95959591] text-3xl font-bold'>+</div>
            </div>
            <CardFooter className="justify-center before:bg-white/10   overflow-hidden py-1 p-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
            <div className=''> <p className="text-center text-sm text-[#A0A0A0] " >You haven’t uploaded any  <br /> videos with aBit yet. Add now!</p> </div>
      </CardFooter>
    </Card>

{/* non-empty card */}
          <Videocard />
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
    </NextUIProvider>
    </div>
  );
}
