/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import {
  DotGroup, CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image } from 'semantic-ui-react';

function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}><Image src="/img/autre_bg.jpg" /></Slide>
        <Slide index={0}><Image src="/img/fitness_bg.jpg" /></Slide>
        <Slide index={0}><Image src="/img/glisse_montagne_bg.jpg" /></Slide>
      </Slider>
      <DotGroup />
      <div className="carousel__buttons">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </div>
    </CarouselProvider>
  );
}

// // Core modules imports are same as usual
// import { Navigation, Pagination } from 'swiper';
// // Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// // Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

// function Carousel() {
//     return (
//         <Swiper
//         modules={[Navigation, Pagination ]}
//         spaceBetween={50}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log('slide change')}
//         >
//             <SwiperSlide>Slide 1</SwiperSlide>
//             <SwiperSlide>Slide 2</SwiperSlide>
//             <SwiperSlide>Slide 3</SwiperSlide>
//         </Swiper>
//     );
// }

export default Carousel;
