
import Image from 'next/image';

const LandingCard1 = () => { 
    return (
        <div className="group w-4/5 sm:w-3/4 md:w-full lg:w-full bg-gradient-45 from-gradbluedark to-gradbluelight rounded-3xl overflow-hidden flex flex-col m-0 hover:opacity-50 transition-all duration-300 hover:cursor-pointer">
            <div className="max-h-50 md:max-h-64 mx-[20%] md:mx-auto mt-[8%] w-fit rounded-t-2xl shadow-lg shadow-cardimgshadow overflow-hidden">
                <Image src="/../public/one-stop-screen.png" width={250} height={1000}/>
            </div>
            <div className="w-inherit h-16 bg-bluebg overflow-hidden m-0 px-[8%] flex flex-col justify-center">
                <div className="flex flex-row-reverse justify-between">
                    <div className="flex grow-0 justify-center items-center">
                        {/* arrow svg */}
                        <svg className="text-white fill-current opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" width="28" height="28">
                            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="font-['Inter'] text-base text-left font-bold">
                            One Stop
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default LandingCard1;