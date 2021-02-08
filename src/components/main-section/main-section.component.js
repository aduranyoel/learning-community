import './main-section.component.css';
import {CardComponent} from "../card/card.component";
import img1 from "../../assets/img/udemy.jpg";

export function MainSectionComponent() {
    return (
        <main>
            {/*{!-- ======= Featured Section ======= --}*/}
            <section id="featured" className="featured">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="icon-box">
                                <i className="icofont-learn"></i>
                                <h3>Learn</h3>
                                <p>Enjoy courses shared by others</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="icofont-brainstorming"></i>
                                <h3>Knowledge</h3>
                                <p>Reach your goals</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="icofont-gift"></i>
                                <h3>Share</h3>
                                <p>Lets others grow</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/*{!-- ======= Services Section ======= --}*/}
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>What learn now</h2>
                    </div>

                    <div className="row">

                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                            <CardComponent img={img1}/>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                            <CardComponent img={img1}/>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                            <CardComponent img={img1}/>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                            <CardComponent img={img1}/>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                            <CardComponent img={img1}/>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                            <CardComponent img={img1}/>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                            <CardComponent img={img1}/>
                        </div>


                    </div>

                </div>
            </section>


        </main>
    )
}
