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
      link:"https://linktr.ee/HackStackflutter",
    },
  {
    name: "HTML, CSS, JavaScript",
    img: "/swc/html.png",
    description:
      "The foundational trinity of web development: HTML for structure, CSS for styling, and JavaScript for interactivity.",
      link:"https://tinyurl.com/hackstack-25",
    },
  {
    name: "ReactJs",
    img: "/swc/react.png",
    description:
      " A JavaScript library by Facebook for building dynamic user interfaces, emphasizing component-based architecture and efficient rendering.",
      link:"https://sun-suggestion-564.notion.site/HeackStack25-ReactWorkShop-1f90dde15273803caba1dd6e438ae039?source=copy_link",
    },
  {
    name: "NodeJs",
    img: "/swc/node.png",
    description:
      " A server-side runtime for executing JavaScript, renowned for its non-blocking, event-driven architecture and scalability.",
      link:"https://www.notion.so/Node-js-Workshop-2025-1f979e7e67d380f7a12cd987fd73de0b?source=copy_link",
    },
  {
      name: "Django",
      img: "/swc/django.png",
      description:
        " A high-level Python web framework, renowned for its rapid development, built-in features, and scalability.",
        link:"https://sprinkle-curio-a28.notion.site/Django-HackStack-2025-21443139e33d8028b76ec806e164f1bc",
    },
  {
    name: "UI/UX",
    img: "/swc/figma.png",
    description:
      " UI (User Interface) focuses on design and the aesthetics of a product, while UX (User Experience) emphasizes its functionality and the overall experience of the user.",
      link:"https://obvious-subway-33b.notion.site/Hackstack-UI-UX-Workshop-20cf46435438803082bbe5e37d603da8?source=copy_link",
    },
  {
    name: "Viscom",
    img: "/swc/viscom.svg",
    description:
      " The art of crafting visual narratives through images, metaphors, and design — focused on clarity, storytelling, and intent.",
      link:"https://screeching-belief-78d.notion.site/Visual-Communication-Design-1b36678d35d6806cb4a8db788c0cbb57",
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
            <img className=" object-contain md:h-40"  src={item.img} ></img>
            </div>
          </div>
        ))}


      </div>
    </>
  );
}
