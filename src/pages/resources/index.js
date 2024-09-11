import { Inter } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
const click_here = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });
import Image from 'next/image';


/*Update the new Resources here*/
/*Paste the link of resources in link*/
/*Keep the description at least of two lines for better opitmization */

const Resources_Data = [
  {
    name: "Flutter",
    img: "/swc/flutter.png",
    description:
      " An open-source UI toolkit by Google for creating natively compiled applications across mobile, web, and desktop from a single codebase.",
      link:"https://swciitg.notion.site/Flutter-Hackstack-2024-6274025e81d64ac591a38e1ccc034b81?pvs=25",
    },
  {
    name: "HTML, CSS, JavaScript",
    img: "/swc/html.png",
    description:
      "The foundational trinity of web development: HTML for structure, CSS for styling, and JavaScript for interactivity.",
      link:"https://swciitg.notion.site/HackStack-24-HTML-CSS-JavaScript-036b384a13cf4e90a3c786071c3abf31?pvs=25",
    },
  {
    name: "ReactJs",
    img: "/swc/react.png",
    description:
      " A JavaScript library by Facebook for building dynamic user interfaces, emphasizing component-based architecture and efficient rendering.",
      link:"https://swciitg.notion.site/React-Hackstack-2024-b4fee56832de4347aad9c6f182a642cb?pvs=25",
    },
  {
    name: "NodeJs",
    img: "/swc/node.png",
    description:
      " A server-side runtime for executing JavaScript, renowned for its non-blocking, event-driven architecture and scalability.",
      link:"https://swciitg.notion.site/Node-js-Workshop-2024-299346a043124e8f861afe067cdec323?pvs=25",
    },
  {
      name: "Django",
      img: "/swc/django.png",
      description:
        " A high-level Python web framework, renowned for its rapid development, built-in features, and scalability.",
        link:"https://swciitg.notion.site/Django-Hackstack-2024-8f4115ccfbf44bcd9b7898c7c0c75550?pvs=25",
    },
  {
    name: "UI/UX",
    img: "/swc/figma.png",
    description:
      " UI (User Interface) focuses on design and the aesthetics of a product, while UX (User Experience) emphasizes its functionality and the overall experience of the user.",
      link:"https://swciitg.notion.site/UI-UX-Workshop-a4acd98e599946fa8c5ee1f478dba276?pvs=25",
    },
]

export default function Resources() {
  return (
    <>
      <div className=" grid justify-center justify-items-center  items-center ">
        <div className=" text-5xl md:text-6xl  mt-56 mb-16 text-opacity-100 text-white font-bold">
          Resources
        </div>
        
        {/* ---Mapping to the data got from Data variable created above-- */}
        {/* ---Card made for different resources-- */}

        {Resources_Data.map((item,index) => (
          <div className=" --resources--card w-11/12 sm:w-10/12 md:w-9/12 xl:p-8 xl:pr-0 p-6 pr-0 justify-evenly flex m-4 rounded-3xl" key={index}>
            <div><div className="text-white font-bold text-1xl md:text-2xl  mb-2">
              {item.name}
            </div>
            <div className=" text-white lg:text-base  sm:text-sm text-xs font-light mb-4">
              {item.description}
            </div>
            <a
              href={item.link}
              target="_blank"
              className={`bg-clickme rounded-full pl-2 pr-2 pt-1 pb-1 lg:text-sm text-xs ${click_here.className}`}
            >
              Click here
            </a></div>
            <div className="flex ml-2 mr-4 xl:ml-9  lg:ml-4 xl:mr-16 justify-center align-middle ">
            <img className=" object-contain"  src={item.img} ></img>
            </div>
          </div>
        ))}


      </div>
    </>
  );
}
