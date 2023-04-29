import Link from 'next/link'

const ExploreBrowseTags = () => {
    return (
        <div className="h-fit w-4/5 sm:w-3/4 md:w-full lg:w-full flex flex-col space-y-3 pb-[10%] pt-[4%]">
            <Link target='_blank' href='/products' className="bg-explorebg rounded-2xl flex h-12 flex-row w-full items-center justify-center space-x-2 hover:bg-opacity-50 transition-all duration-150 hover:cursor-pointer">
                <span className="font-semibold">
                    Explore all Products
                </span>
            </Link>
            <Link target='_blank' href='/hiring' className="bg-browsebg rounded-2xl flex h-12 flex-row w-full items-center justify-center space-x-2 hover:invert transition-all duration-300 hover:cursor-pointer">
                <span className="font-semibold">
                    Browse open Positions
                </span>
            </Link>
        </div>
        
    );
}

export default ExploreBrowseTags;