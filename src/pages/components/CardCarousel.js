import React from 'react'

const CardCarousel = (props) => {
    var ImgSourcePath = "./";  // Assuming the image is in public folder
    var ImgName = props.ImgName ? ImgSourcePath + props.ImgName : ImgSourcePath+ "Manav.png";
    var Title = props.Title ? props.Title : "Manav";
    var Designation = props.Designation ? props.Designation : "Design Systems Lead";
    var Content = props.Content ? props.Content : "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.”";

  return (
    <div className="Carousel-card flex flex-col justify-between border border-gray-200 rounded-lg shadow p-6 sm:max-w-xl max-h-5xl w-60 h-70 sm:w-auto sm:h-auto space-y-3 space-x-0 sm:space-x-3 sm:space-y-0 sm:flex-row bg-gradient-to-r from-orange-200 to-violet-300">
      <div className="z-400 mt-auto sm:h-full sm:w-auto  w-full basis-[100px] grow-0 sm:basis-auto sm:grow">
             <img src={ImgName} alt="Carousel-Image" className="Carousel-img h-30
             w-30 sm:h-full sm:w-full rounded-lg mx-auto sm:mx-none sm:object-cover" />
        </div>
        
        <div className="border-solid shadow-[1px] border-[2px] border-white-600 drop-shadow p-4 mt-0 ext-left rounded-lg z-400 sm:h-full sm:w-auto w-full font-['Inter']">
             <h3 className="Carousel-title block text-white-900 font-extrabold sm:text-4xl text-xl ">{Title}</h3>
            <h3 className="Carousel-designation block text-white-600 font-semibold sm:text-0.9lg text-[0.9rem]  ">{Designation}</h3>
            <p className="Carousel-content block font-normal sm:text-[1rem] text-[0.8rem] mt-2 text-slate-100 sm:block ">{Content}</p>
        </div>
    </div>
  )
}

export default CardCarousel