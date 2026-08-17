import Image from 'next/image';

const HallOfFameCard = ({ pfp, name, role, index }) => {
    // Cycle through accent colors
    const colors = ['border-teambg1', 'border-teambg2', 'border-teambg3'];
    const accentColor = colors[index % colors.length];

    return (
        <div className={`w-[44%] sm:w-[28%] md:w-[20%] aspect-[3/4] bg-specialgrey flex flex-col mx-2 my-4 rounded-2xl relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border-t-2 ${accentColor}`}>
            <Image src={pfp} fill className="object-cover w-full h-full object-center" unoptimized alt={name} />
            <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end pb-4 px-2 text-center">
                <span className="font-['Inter'] font-bold text-base md:text-lg text-white">
                    {name}
                </span>
                <span className="font-['Inter'] text-xs md:text-sm text-greyuse mt-1">
                    {role}
                </span>
            </div>
        </div>
    );
}

export default HallOfFameCard;
