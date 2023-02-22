import Footer from "../Footer";
import Header from "../Header";

import { Image, Item, Header as HeaderUi } from "semantic-ui-react";
import Filtered from "../FilteredActivities";
import Carousel from "./carousel";

import './style.scss';
import { Rating } from "semantic-ui-react";

function DetailledActivity() {
    return (
        <>
            <Header />
            <Carousel />
            <div className="avatar">
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

            <div className="filteredActivities">
                <Filtered />
            </div>
            <Footer />
        </>
    );
}

export default DetailledActivity;