import React from "react";
import backgroundImage from '../../assets/img/backgroud.jpg';
import './header.component.css';

export function Jumbotron() {
    return (
        <section className="header">
            <div className="container">
                <img src={backgroundImage} alt="Learning Community"/>
                <div className="slogan d-none d-md-block">
                    <h1>Let's go</h1>
                    <p>Be part of a community that learns and shares its knowledge.</p>
                </div>
            </div>
        </section>
    )
}
