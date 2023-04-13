
import HiringCards from './HiringCards';
export default function WeAreHiring(props) {
    let cardData=props.cardData;
    // Storing 5 cards in variables
const job1=cardData.find(job1=>job1.id==='1');
const job2=cardData.find(job2=>job2.id==='2');
const job3=cardData.find(job3=>job3.id==='3');
const job4=cardData.find(job4=>job4.id==='4');
const job5=cardData.find(job5=>job5.id==='5');
console.log(cardData);
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                <div className="flex flex-row justify-center  sm:flex-col w-80 lg:w-[28rem] font-[Inter] text-5xl  md:text-7xl font-extrabold lg:pl-6 lg:mr-8">
                    <div className="bg-contain  text-transparent bg-clip-text bg-gradient-to-r from-[#CCE3ED] via-[#4D75B5] to-[#AB1C4E] pb-8 text-center lg:text-start">
                        <div>We</div>
                         Are Hiring!
                         </div>
                </div>   
                <HiringCards id={job1.id} title={job1.title} description={job1.description} eligibility={job1.eligibility} color={job1.color}></HiringCards>
            </div>
            <div className="flex  flex-col md:flex-row justify-center items-center mt-3 sm:mt-8">
            <HiringCards id={job2.id} title={job2.title} description={job2.description} eligibility={job2.eligibility} color={job2.color}></HiringCards>
            <HiringCards id={job3.id} title={job3.title} description={job3.description} eligibility={job3.eligibility} color={job3.color}></HiringCards>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-3 sm:mt-8">
            <HiringCards id={job4.id} title={job4.title} description={job4.description} eligibility={job4.eligibility} color={job4.color}></HiringCards>
            <HiringCards id={job5.id} title={job5.title} description={job5.description} eligibility={job5.eligibility} color={job5.color}></HiringCards>
            </div>
        </div>
    );
}