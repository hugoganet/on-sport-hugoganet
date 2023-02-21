import Footer from "../Footer";
import Header from "../Header";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

import 'pure-react-carousel/dist/react-carousel.es.css';


import sports from "../../../datas/sport";
import { Container, Header as HeaderUi } from "semantic-ui-react";
import Filtered from "../FilteredActivities";

function DetailledActivity() {
    console.log(sports);
    return (
        <>
            <Header />
            <div className="Carousel">
            <CarouselProvider
            naturalSlideWidth={20}
            naturalSlideHeight={30}
            totalSlides={3}
            >
                <Slider>
                    <Slide index={0}> First Slide</Slide>
                    <Slide index={1}> Second Slide</Slide>
                    <Slide index={3}> Third Slide</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            <HeaderUi as="h1" textAlign="center">Titre de l'activité</HeaderUi>
            </div>            {/* <div className="cards">
                {
                    sports.map((sport) => < {...sport} />)
                }
            </div> */}
            <div className="filteredActivities">
                <Filtered />
            </div>
            <Footer />
        </>
    );
}

export default DetailledActivity;