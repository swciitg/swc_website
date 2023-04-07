import { Public_Sans } from 'next/font/google';
import styles from '../src/styles/WhoAreWe.module.css'
import Image from 'next/image';
const WhoAreWe = () => {
    return ( 
        <main className="flex flex-col  mx-auto justify-center lg:flex-row items-center lg:flex-wrap">
           <div className=" basis-1 mt-4 flex flex-col lg:basis-1/3 lg:mr-20">
            <div className="ml-5 flex flex-col lg:mx-auto">
                <div className="font-['Inter'] font-black text-2xl color-custom mb-5">Who are We?</div>
                <div className="font-['Inter'] text-lg text-gray-400 mb-4">We are a squad of experienced devs and creatives, driving web and apps for IIT Guwahati.</div>
            </div>
            <div className="ml-5 flex flex-col lg:mx-auto ">
                <div className="font-['Inter'] font-black text-2xl color-custom mb-5">Growth at SWC</div>
                <div className="font-['Inter'] text-lg text-gray-400 mb-4">We bring together product, design, engineering, data and management to inculcate a growth culture.</div>
            </div>
            <div className=" ml-5 flex flex-col mx-auto lg:mx-auto">
                <div className="font-['Inter'] font-black text-2xl color-custom mb-5">Products at SWC</div>
                <div className="font-['Inter'] text-lg text-gray-400 mb-4">We create products, and strive to continually improve them.Our team has the zeal to make a product or service better, and continually adopt to changing tech, delivering quality products.</div>
            </div>
           </div>
           <div className="basis-1 flex flex-col lg:basis-2/5">
            <div className="ml-5 mr-5 mx-auto flex flex-col lg:mr-28 lg:mb-2">
                <div className="font-['Inter'] font-black text-2xl color-custom mb-5">How to join?</div>
                <div className="font-['Inter'] text-lg text-gray-400 mb-4">We have a simple hiring process. You can apply for specific product roles or in general apply as a manager, designer or developer.</div>
            </div>
            <div className="flex flex-col">
                <div className="ml-5 mr-5 flex flex-row mb-3">
                    <div className={`flex justify-center items-center font-['Inter'] basis-1/3 py-10 mr-4 rounded-3xl  text-base font-semibold ${styles.developer}`}><p className="text-center mr-2">Developer</p><Image src="/../public/Icons/arrow--up.png"
                                width={15}
                                height={15}
                                alt="Icon not found" /></div>
                    <div className={` flex font-['Inter'] basis-3/5 justify-center  items-center rounded-3xl text-base bg-specialgrey font-semibold ${styles.product}`}><p className="text-center mr-2">Product Designer</p><Image src="/../public/Icons/arrow--up.png"
                                width={15}
                                height={15}
                                alt="Icon not found" /></div>
                </div>
                <div className="mb-5 ml-5 mr-5 flex flex-row">
                    <div className={` flex justify-center  items-center font-['Inter'] basis-3/5  mr-4  rounded-3xl  text-base bg-specialgrey font-semibold ${styles.manager}`}><p className="text-center mr-2">Product Manager </p><Image src="/../public/Icons/arrow--up.png"
                                width={15}
                                height={15}
                                alt="Icon not found" /></div>
                    <div className={` flex justify-center items-center font-['Inter'] basis-1/3 py-10  font-semibold rounded-3xl  text-base bg-specialgrey ${styles.growth}`}><p className="text-center mr-2">Growth</p><Image src="/../public/Icons/arrow--up.png"
                                width={15}
                                height={15}
                                alt="Icon not found" /></div>
                </div>
            </div>
           </div>
        </main>
     );
}

export default WhoAreWe;