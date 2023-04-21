
import Image from 'next/image';

const ExploreBrowseTags = () => {
    return (
        <div className="h-fit w-4/5 sm:w-3/4 md:w-full lg:w-full flex flex-col space-y-3 pb-[10%] pt-[4%]">
            <div className="bg-explorebg rounded-2xl flex h-12 flex-row w-full items-center justify-center space-x-2 hover:bg-opacity-50 transition-all duration-300 hover:cursor-pointer">
                <span className="font-semibold">
                    Explore all Products
                </span>
            </div>
            <div className="bg-browsebg rounded-2xl flex h-12 flex-row w-full items-center justify-center space-x-2 hover:invert transition-all duration-300 hover:cursor-pointer">
                <span className="font-semibold">
                    Browse open Positions
                </span>
            </div>
        </div>
        
    );
}

export default ExploreBrowseTags;