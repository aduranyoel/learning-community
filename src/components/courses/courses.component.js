import React, {useContext, useEffect, useState} from 'react';
import {CourseCard} from "../card/course-card.component";
import {http} from '../../share/utils';
import {useDispatch} from "react-redux";
import {loadCourses} from "../../store/actions/courses.action";
import serverDown from '../../assets/img/undraw_server_down_s4lk.svg';
import empty from '../../assets/img/undraw_empty_xct9.svg';
import {v4 as uuid} from 'uuid';
import {HomeContext} from "../../context/home.context";
import {Paginator} from "../paginator/paginator.component";

export function Courses() {

    const context = useContext(HomeContext);
    const {courses, setCourses} = context;
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getCourses() {
            try {
                const fetch = await http('courses');
                const {response} = await fetch.json();
                const coursesRandom = response.sort(() => Math.round(Math.random() * 10) > 5 ? -1 : 1);
                dispatch(loadCourses(coursesRandom));
                setCourses(coursesRandom);
            } catch (e) {
                setError(true);
            }
        }

        getCourses();
    }, []);

    return (
        <>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>What learn now</h2>
                    </div>

                    <div className="row">
                        {
                            !error && courses && courses.length ? courses.map(
                                course => (
                                    <div key={uuid()}
                                         className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
                                        <CourseCard {...course}/>
                                    </div>
                                )) : null
                        }
                        {
                            !error && courses && !courses.length ?
                                <img src={empty} style={{width: '22rem', margin: '0 auto'}} alt="server down"/>
                                : null
                        }
                        {
                            error ?
                                <img src={serverDown} style={{width: '22rem', margin: '0 auto'}} alt="server down"/>
                                : null
                        }

                    </div>

                </div>
            </section>

            {
                !error && courses && courses.length ? <Paginator/> : null
            }
        </>
    )
}
