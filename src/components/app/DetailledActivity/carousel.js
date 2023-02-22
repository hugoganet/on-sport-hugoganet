import { Dot } from "pure-react-carousel";
import { DotGroup } from "pure-react-carousel";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';


function Carousel() {
    return (
        <CarouselProvider 
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            >   
                <Slider>
                    <Slide index={0}> First Slide</Slide>
                    <Slide index={1}> Second Slide</Slide>
                    <Slide index={3}> Third Slide</Slide> 
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
