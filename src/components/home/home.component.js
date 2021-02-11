import React from 'react';
import {MainSection} from "../main-section/main-section.component";
import {Nav} from "../nav/nav.component";
import {HomeProvider} from "../../context/home.context";
import {Jumbotron} from "../header/jumbotron.component";

export function Home() {
    return (
        <HomeProvider>
            <Nav title="Learning Community"/>
            <Jumbotron/>
            <MainSection/>
        </HomeProvider>
    )
}
