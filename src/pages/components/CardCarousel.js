import React from 'react'

const CardCarousel = (props) => {
    var ImgName = props.ImgName ? props.ImgName : "./Manav.png";
    var Title = props.Title ? props.Title : "Manav";
    var Designation = props.Designation ? props.Designation : "Design Systems Lead";
    var Content = props.Content ? props.Content : "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.”";

    //sm:max-w-xl max-h-5xl w-60 h-70 sm:w-auto sm:h-auto 
  return (
    <div className="Carousel-card m-[2px] [width:inherit] [height:inherit] top-0 left-0 right-0 bottom-0 flex flex-col justify-between rounded-lg shadow p-6 sm:pr-[2rem] space-y-3 space-x-0 sm:space-x-3 sm:space-y-0 sm:flex-row bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-200 to-violet-300">
      <div className="mt-auto sm:h-full sm:w-auto  w-full basis-[100px] grow-0 sm:basis-auto my-auto sm:grow">
             <img src={ImgName} alt="Carousel-Image" className="Carousel-img h-30
             w-30 sm:h-full sm:w-full rounded-[20%] sm:rounded-lg mx-auto sm:mx-none sm:object-cover" />
        </div>
        
        <div className="border-solid shadow-[1px] border-[2px] border-white-600 drop-shadow p-4 mt-0 ext-left rounded-lg sm:h-full sm:w-auto w-full font-['Inter']">
             <h3 className="Carousel-title block text-white-900 font-extrabold sm:text-4xl text-xl ">{Title}</h3>
            <h3 className="Carousel-designation block text-white-600 font-semibold sm:text-0.9lg text-[0.9rem]  ">{Designation}</h3>
            <p className="Carousel-content block font-normal sm:text-[1rem] text-[0.8rem] mt-2 text-slate-100 sm:block ">{Content}</p>
        </div>
    </div>
  )
}

export default CardCarousel