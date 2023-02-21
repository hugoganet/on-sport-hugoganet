import Footer from "../Footer";
import Header from "../Header";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';


import sports from "../../../datas/sport";
import { Container, Header as HeaderUi } from "semantic-ui-react";
import Filtered from "../FilteredActivities";

import './style.scss';

function DetailledActivity() {
    return (
        <>
            <Header />
            <CarouselProvider 
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            >
                <ButtonBack>Back</ButtonBack>
                <Slider>
                    <Slide index={0}> First Slide</Slide>
                    <Slide index={1}> Second Slide</Slide>
                    <Slide index={3}> Third Slide</Slide>
                </Slider>
                <ButtonNext>Next</ButtonNext>
                <div className="carousel__buttons">
                </div>
            </CarouselProvider>
            <div className="title__activity">
                <HeaderUi as="h1" textAlign="center">Titre de l'activité</HeaderUi>
            </div>

            <div className="filteredActivities">
                <Filtered />
            </div>
            <Footer />
        </>
    );
}

export default DetailledActivity;