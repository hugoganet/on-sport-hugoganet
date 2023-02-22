import { DotGroup } from "pure-react-carousel";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image } from 'semantic-ui-react'


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
                <div className="carousel__buttons">
                <ButtonBack className="button__back">Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                </div>
                <DotGroup />
            </CarouselProvider>
    );
}

export default Carousel;
