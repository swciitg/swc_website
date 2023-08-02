import React from 'react'
import { Navigation } from 'swiper';
import {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs';
import { EffectFlip} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-flip";
import CardCarousel from './CardCarousel';


const CarouselSlides = ({ExperienceData}) => {
    const cardData = ExperienceData['experiences-card'];
    const [_, setInit] = useState(); // To rerender incase of intitialisation as the Ref for button will be null

    const PrevButtonRef = useRef(null);
    const NextButtonRef = useRef(null);

    return (
      <div className='sticky top-0 max-w-max max-h-max pl-[25px] pr-[28px]'>
        <Swiper className='group sm:max-w-3xl max-h-5xl w-60 h-70 sm:w-auto sm:h-auto p-[1px] rounded-lg'
          modules={[Navigation,EffectFlip]}
          effect={"flip"}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          observer={true}
          observeParents={true}
          navigation={{
            prevEl:PrevButtonRef.current,
            nextEl:NextButtonRef.current,
          }}
          onInit={()=>setInit(true)}
        >
          

        {cardData.length !== 0 &&
          cardData.map((cards, ind) => {
          return (
          <SwiperSlide key={ind} className='w-[100%] min-h-max'>
            <CardCarousel ImgSrc={cards.ImgSrc} Title={cards.Title} Designation={cards.Designation} Content={cards.Content}/>
          </SwiperSlide>
          );
        })}
        
        </Swiper>
        <div className="absolute cursor-pointer z-10 top-[50%] sm:top-[45%] left-0 w-[25px] h-[25px] text-white text-md grid place-items-center" ref={PrevButtonRef}><BsChevronLeft className='stroke-[1px] hover:scale-150 duration-500'/></div>
        <div className="absolute cursor-pointer z-10 top-[50%] sm:top-[45%] right-0 w-[25px] h-[25px]  text-white text-md grid place-items-center " ref={NextButtonRef}><BsChevronRight className='stroke-[1px] hover:scale-150 duration-500'/></div>
    
        </div>
      );

}

export default CarouselSlides