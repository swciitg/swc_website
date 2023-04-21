import Image from 'next/image';

const CoreTeamCard = ({pfp, name}) => { 
    return (
        <div className="w-[40%] md:w-1/5 bg-black flex flex-col my-3 mx-3 rounded-xl md:rounded-2xl relative overflow-hidden">
            <div className="flex justify-center items-center overflow-hidden bg-gradient-to-b from-cyan-300">
                <Image src="/../public/team-photos/kunal-edit.png" height={200} width={200} className='aspect-auto'/>
            </div>
            <span className="flex absolute bottom-0 h-[15%] bg-white opacity-40 backdrop-blur-md w-full justify-center items-center text-black text-xl font-['Inter'] font-bold">
                Kunal Pal
            </span>
        </div>
        
    );
}

export default CoreTeamCard;