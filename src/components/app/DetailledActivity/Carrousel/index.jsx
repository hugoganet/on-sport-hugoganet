/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import './style.scss';

import { Image } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
function Carrousel({ photos }) {
  for (const photo of photos) {
    console.log(photo.name);
  }

  return (

    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >

      {(() => {
        const arr = [];
        // eslint-disable-next-line no-plusplus
        for (const photo of photos) {
          arr.push(
            // eslint-disable-next-line react/jsx-props-no-spreading
            <SwiperSlide key={photo.name}><Image src={`http://ronaldfk-server.eddi.cloud:8080/api/activity/16/photo/${photo.name}`} /></SwiperSlide>,
          );
        }
        return arr;
      })()}

    </Swiper>

  // <CarouselProvider
  //   naturalSlideWidth={50}
  //   naturalSlideHeight={50}
  //   totalSlides={3}

  // >
  //   <Slider>
  //     <Slide index={0}><Image src="/img/autre_bg.jpg" /></Slide>
  //     <Slide index={0}><Image src="/img/fitness_bg.jpg" /></Slide>
  //     <Slide index={0}><Image src="/img/glisse_montagne_bg.jpg" /></Slide>
  //   </Slider>
  //   <DotGroup />
  //   <div className="carousel__buttons">
  //     <ButtonBack>Back</ButtonBack>
  //     <ButtonNext>Next</ButtonNext>
  //   </div>
  // </CarouselProvider>
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

Carrousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,

};

export default Carrousel;
