import Image from 'next/image';

const LandingCard = (bgDark, bgLight, textBoxBg, imageSrc, isDesktop, cardTitle, cardSubtitle) => {
    return (
        <div className="w-4/5 sm:w-2/3 md:w-1/3 lg:w-1/4 bg-gradient-45 from-gradgreendark to-gradgreenlight rounded-3xl overflow-hidden flex flex-col m-0">
            <div className="mt-[5%] ml-[10%] rounded-tl-3xl shadow-lg shadow-cardimgshadow overflow-hidden">
            <Image src="/../public/testimgdesktop.png"
                                width={619}
                                height={458}
                                alt="Icon not found" />
            </div>
            <div className="w-inherit h-16 bg-darkgreenbg overflow-hidden m-0 px-[8%] flex flex-col justify-center">
                <div className="flex flex-row-reverse justify-between">
                    <div className="flex grow-0 justify-center items-center">
                        {/* arrow svg */}
                        <svg className="text-white fill-current opacity-50" width="28" height="28">
                            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="font-['Inter'] text-base text-left font-bold">
                            Journeys
                        </span>
                        <span className="font-['Inter'] left-0 font-normal text-sm text-left font-light">
                            Open Source
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default LandingCard;