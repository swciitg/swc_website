import React from 'react'
{/* <div className="flex h-40 md:h-72 justify-center items-center overflow-hidden bg-gradient-to-b from-teambg1 h-[70%]">
                <Image src={pfp} height={200} width={200}/>
            </div> */}

const CardCarousel = (props) => {
    var ImgSrc = props.ImgSrc ? props.ImgSrc : "./Images/team_photos/kunal.png";
    var Title = props.Title ? props.Title : "Kunal Pal";
    var Designation = props.Designation ? props.Designation : "General Secretary";
    var Content = props.Content ? "“"+props.Content+"“" : "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.”";

  return (
    <div className="Carousel-card m-[2px] w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 flex flex-col justify-between rounded-xl shadow p-6 sm:pr-[2rem] space-y-3 space-x-0 sm:space-x-3 sm:space-y-0 sm:flex-row bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-300 to-violet-300">
      <div className="my-auto sm:h-full sm:w-auto  w-full basis-[100px] grow-0 sm:basis-auto bottom -0 sm:grow">
             <img src={ImgSrc} alt="Carousel-Image" className="Carousel-img h-40
             w-40 sm:h-200 sm:w-200 rounded-lg mx-auto my-auto py-auto sm:object-contain" />
        </div>
        
        <div className="border-solid shadow-[1px] border-[2px] border-white-600 drop-shadow p-4 mt-0 ext-left rounded-lg sm:h-full sm:w-auto w-full font-['Inter']">
             <h3 className="Carousel-title block text-white-900 font-extrabold sm:text-3xl text-xl ">{Title}</h3>
            <h3 className="Carousel-designation block text-white-600 font-semibold sm:text-2xl text-lg  ">{Designation}</h3>
            <p className="Carousel-content block font-normal sm:text-xl text-[1rem] mt-2 text-slate-100 sm:block ">{Content}</p>
        </div>
    </div>
  )
}

export default CardCarousel