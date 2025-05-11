import Image from 'next/image';

const CoreTeamCard1 = ({pfp, name}) => { 
    return (
        <div className="w-[40%] md:w-1/5 bg-black flex flex-col my-3 mx-3 rounded-xl md:rounded-2xl relative overflow-hidden">
            <div className="flex h-40 md:h-72 justify-center items-end overflow-hidden bg-gradient-to-b from-teambg1">
                <Image src={pfp} height={200} width={200} unoptimized/>  
            </div>
            <span className="flex absolute bottom-0 h-fit md:h-[15%] bg-white bg-opacity-40 w-full justify-center items-center text-black text-xl font-['Inter'] font-bold text-center">
                {name}
            </span>
        </div>
        
    );
}

export default CoreTeamCard1;