import Image from 'next/image';
const Footer = () => {
    return (
        <div className="flex flex-col bg-specialgrey mb-0 mt-12 bottom-0">
            <div className=" flex flex-col lg:flex-row justify-evenly  pt-8">
                <div className=" flex flex-col  basis-1 lg:basis-1/3">
                    <div className="font-Inter pl-8 text-2xl md:text-6xl xl:text-6xl leading-tight md:text-center">Get in touch! <p className="hidden lg:inline">&nbsp;</p></div>
                    <div className="flex justify-around my-4">
                        <div className="flex flex-col">
                            <div className="flex text-greyuse">SWC, New SAC</div>
                            <div className="flex text-greyuse">IIT Guwahati</div>
                            <div className="flex text-greyuse">Assam 781039</div>
                        </div>
                        <div className="flex flex-col pr-4">
                            <div className="flex text-greyuse">swc@iitg.ac.in</div>
                            <div className="flex text-greyuse">+91 807 9083 829</div>
                        </div>
                    </div>
                </div>
                <div className="lg:border-l-[1px] lg:border-white"></div>
                <div className="justify-around lg:basis-2/5 flex">
                    <div className="flex flex-col">
                        <div className="flex font-Inter text-lg sm:text-xl font-bold leading-6 tracking-wider mb-3">Gitbooks</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Docs</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Open Source</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Timelines</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Outsourcing</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex font-Inter text-lg sm:text-xl font-bold leading-6 tracking-wider mb-3">Resources</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Blogs</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Case Studies</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Guidelines</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex font-Inter text-lg sm:text-xl font-bold leading-6 tracking-wider mb-3">Products</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Placement Portal</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Election Portal</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">One Stop</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Vaccination Portal</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Journeys</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Shodh</div>
                    </div>
                    {/* <div className="flex flex-col">
                        <div className="flex font-Inter text-lg sm:text-xl font-bold leading-6 tracking-wider mb-3">Teams</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Frontend</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Backend</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Design</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">App</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Growth</div>
                        <div className="flex text-greyuse sm:text-sm text-xs font-normal leading-6">Management</div>
                    </div> */}
                </div>
            </div>
            <div className="flex justify-center basis-1/3 mt-8 mb-6">
                <div className="flex justify-between w-4/5  border-t border-greyuse">
                    <div className="flex pl-3 pt-4 font-Inter font-normal text-xs leading-4 text-greyuse">@ 2023 Students Web Committee</div>
                    <div className="flex pt-4">
                        <div className="flex mr-3">
                            <a href='https://www.facebook.com/swciitg/' target="_blank">
                            <Image src="/../public/Icons/Facebook.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                                </a>
                        </div>
                        <div className="flex mr-3">
                            <a href='https://www.instagram.com/swc_iitg/' target="_blank">
                            <Image src="/../public/Icons/Instagram.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                                </a>
                        </div>
                        <div className="flex mr-3">
                            <a href='https://in.linkedin.com/company/student-s-web-committee-iitg' target="_blank">
                            <Image src="/../public/Icons/LinkedIn.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                                </a>
                        </div>
                        {/* <div className="flex mr-3">
                            <Image src="/../public/Icons/Pinterest.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                        </div> */}
                        <div className="flex">
                            <a href='https://twitter.com/swciitghy' target="_blank">
                            <Image src="/../public/Icons/Twitter.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                                </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;