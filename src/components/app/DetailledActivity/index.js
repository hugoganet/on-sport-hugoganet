import Footer from "../Footer";
import Header from "../Header";

import { Image, Header as HeaderUi } from "semantic-ui-react";
import Filtered from "../FilteredActivities";
import Carousel from "./carousel";

import './style.scss';

function DetailledActivity() {
    return (
        <>
            <Header />
            <Carousel />
            <div className="avatar">
            <Image src="/default-image.png" avatar />
            <span>Username</span>
            </div>
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