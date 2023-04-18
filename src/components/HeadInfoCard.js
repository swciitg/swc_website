import Image from 'next/image';
import { Cedarville_Cursive } from 'next/font/google'
const cedar = Cedarville_Cursive({subsets:['latin'], weight:['400']})

const HeadInfoCard = ({pfp, por, name, degree, phno}) => { 
    return (
        <div className="w-full bg-black flex flex-row my-4">
            <div className="w-1/3 md:w-1/5 flex justify-center items-center rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-b from-cyan-300">
                <Image src="/../public/team-photos/kunal-edit.png" height={200} width={200} className='aspect-auto'/>
            </div>
            <div className="flex flex-col ml-[5%] md:ml-[10%] h-inherit justify-between">
                <span className="flex font-['Inter'] font-bold text-xl md:text-4xl whitespace-nowrap">
                    General Secretary
                </span>
                <span className={`flex font-${cedar.className} text-xl md:text-4xl whitespace-nowrap my-2`}>
                    Kunal Pal
                </span>
                <span className="flex font-['Inter'] font-medium text-xl md:text-4xl whitespace-nowrap">
                    Btech, Civil
                </span>
                <span className="flex font-['Inter'] font-medium text-xl md:text-4xl whitespace-nowrap">
                    +91 6969696969
                </span>
            </div>
        </div>
        
    );
}

export default HeadInfoCard;