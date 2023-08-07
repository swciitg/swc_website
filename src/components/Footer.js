import Image from 'next/image';
import Link from 'next/link';
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
                            <div className="flex text-greyuse">+91 730 374 4997</div>
                        </div>
                    </div>
                </div>
                <div className="lg:border-l-[1px] lg:border-white"></div>
                <div className="justify-around lg:basis-2/5 flex">
                    <div className="flex flex-col">
                        <div className="flex font-Inter text-lg sm:text-xl font-bold leading-6 tracking-wider mb-3">Important Links</div>
                        <a href="https://github.com/swciitg" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Github</a>
                        <Link href="/team" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Team</Link>
                        <Link href="/products" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Products</Link>
                        <Link href="/hiring" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Apply Now!</Link>
                    </div>
                    <div className="flex flex-col">
                        <a href="" className="flex font-Inter text-lg sm:text-xl font-bold leading-6 tracking-wider mb-3">Gymkhana Sites</a>
                        <a href="https://intranet.iitg.ac.in/sa/" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">SA Portal</a>
                        <a href="https://swc.iitg.ac.in/hab/" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">HAB Portal</a>
                        <a href="https://swc.iitg.ac.in/sports_board/" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Sports Board</a>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex font-Inter text-lg sm:text-xl font-bold leading-6 tracking-wider mb-3">Our Products</div>
                        <a href="https://online.iitg.ac.in/tnp/" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Placement Portal</a>
                        <a href="https://swc.iitg.ac.in/election_portal/" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Election Portal</a>
                        <a href="https://play.google.com/store/apps/details?id=com.swciitg.onestop2" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">One Stop</a>
                        <a href="https://swc.iitg.ac.in/journeys/" className="flex text-greyuse sm:text-sm text-xs font-normal leading-6 hover:underline">Journeys</a>
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
                            <Image src="/swc/Icons/Facebook.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                                </a>
                        </div>
                        <div className="flex mr-3">
                            <a href='https://www.instagram.com/swc_iitg/' target="_blank">
                            <Image src="/swc/Icons/Instagram.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                                </a>
                        </div>
                        <div className="flex mr-3">
                            <a href='https://in.linkedin.com/company/student-s-web-committee-iitg' target="_blank">
                            <Image src="/swc/Icons/LinkedIn.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                                </a>
                        </div>
                        {/* <div className="flex mr-3">
                            <Image src="/swc/Icons/Pinterest.png"
                                width={15}
                                height={15}
                                alt="Icon not found" />
                        </div> */}
                        <div className="flex">
                            <a href='https://twitter.com/swciitghy' target="_blank">
                            <Image src="/swc/Icons/Twitter.png"
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