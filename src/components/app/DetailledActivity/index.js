import Footer from "../Footer";
import Header from "../Header";
import Carousel from "./carousel";
import Comments from "./comment";

import { Image, Item, Header as HeaderUi } from "semantic-ui-react";
import Filtered from "../FilteredActivities";

import './style.scss';
import { Rating } from "semantic-ui-react";

function DetailledActivity() {
    return (
        <>
            <Header />
            <div className="activity__content">
                <Carousel />
                <div className="activity__author">
                    <Image src="/default-image.png" avatar />
                    <span>Username</span>
                </div>
                <div className="activity__title">
                    <HeaderUi as="h1" textAlign="center">Titre de l'activité</HeaderUi>
                </div>
                <div className="rating" >
                    <Rating icon="star" defaultRating={3} maxRating={5} disabled size="massive" />
                </div>
                <div className="activity__description">
                    <p>Description de l'activité</p>
                </div>
                <Comments />
            </div>


            <div className="filteredActivities__title">
                <h1>Autres activités qui pourraient vous intéresser</h1>
            </div>
                <Filtered />
            <Footer />
        </>
    );
}

export default DetailledActivity;