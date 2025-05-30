import HiringCards from './HiringCards';

export default function WeAreHiring(props) {
    const cardData = props.cardData || [];

    // Storing cards in variables safely
    const job1 = cardData.find(job => job.id === '1');
    const job2 = cardData.find(job => job.id === '2');
    const job3 = cardData.find(job => job.id === '3');
    const job4 = cardData.find(job => job.id === '4');
    const job5 = cardData.find(job => job.id === '5');

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                <div>
                    <div className="flex flex-row justify-center mr-10 sm:flex-col w-80 lg:w-[28rem] font-[Inter] text-5xl md:text-7xl font-extrabold lg:pl-6 lg:mr-8">
                        <div className="bg-contain text-transparent bg-clip-text bg-gradient-to-r from-[#CCE3ED] via-[#4D75B5] to-[#AB1C4E] pb-8 pl-4 text-center lg:text-start">
                            <div>We</div>
                            Are Hiring!
                        </div>
                    </div>
                    <div className='text-xl text-cyan-500 ml-12 font-[Inter] hover:text-cyan-400'>
                        <a href='https://forms.office.com/r/X4mxHugR6X'>Link to Apply &#8594;</a>
                    </div>
                </div>

                {job1 && <HiringCards {...job1} />}
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-3 sm:mt-8">
                {job2 && <HiringCards {...job2} />}
                {job3 && <HiringCards {...job3} />}
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-3 sm:mt-8">
                {job4 && <HiringCards {...job4} />}
                {job5 && <HiringCards {...job5} />}
            </div>
        </div>
    );
}
