import React from 'react'

const CardCarousel = (props) => {
    var ImgSrc = props.ImgSrc ? props.ImgSrc : "./Images/team_photos/kunal.png";
    var Title = props.Title ? props.Title : "Kunal Pal";
    var Designation = props.Designation ? props.Designation : "General Secretary";
    var Content = props.Content ? "“"+props.Content+"“" : "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.”";

  return (
    <div className="Carousel-card m-[2px] [width:inherit] [height:inherit] top-0 left-0 right-0 bottom-0 flex flex-col justify-between rounded-xl shadow p-6 sm:pr-[2rem] space-y-3 space-x-0 sm:space-x-3 sm:space-y-0 sm:flex-row bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-300 to-violet-300">
      <div className="mt-auto sm:h-full sm:w-auto  w-full basis-[100px] grow-0 sm:basis-auto bottom -0 sm:grow">
             <img src={ImgSrc} alt="Carousel-Image" className="Carousel-img h-30
             w-30 sm:h-full sm:w-full rounded-lg mx-auto sm:mx-none sm:object-cover" />
        </div>
        
        <div className="border-solid shadow-[1px] border-[2px] border-white-600 drop-shadow p-4 mt-0 ext-left rounded-lg sm:h-full sm:w-auto w-full font-['Inter']">
             <h3 className="Carousel-title block text-white-900 font-extrabold sm:text-3xl text-xl ">{Title}</h3>
            <h3 className="Carousel-designation block text-white-600 font-semibold sm:text-0.6lg text-[0.8rem]  ">{Designation}</h3>
            <p className="Carousel-content block font-normal sm:text-[0.9rem] text-[0.8rem] mt-2 text-slate-100 sm:block ">{Content}</p>
        </div>
    </div>
  )
}

export default CardCarousel