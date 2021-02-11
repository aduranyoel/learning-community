import React from 'react';

export function FeatureSection() {
    return (
        <section id="featured" className="featured">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4">
                        <div className="icon-box">
                            <i className="icofont-learn"/>
                            <h3>Learn</h3>
                            <p>Enjoy courses shared by others</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <i className="icofont-brainstorming"/>
                            <h3>Knowledge</h3>
                            <p>Reach your goals</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <i className="icofont-gift"/>
                            <h3>Share</h3>
                            <p>Lets others grow</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
