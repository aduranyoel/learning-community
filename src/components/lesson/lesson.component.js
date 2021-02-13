import React, {useEffect, useState} from 'react';
import {childrenSorted, http, useQuery} from "../../share/utils";
import './lesson.component.css';
import {useSelector} from "react-redux";
import {selectCourse} from "../../store/reducers/courses.reducer";
import {Nav} from "../nav/nav.component";
import {Spinner} from "../spinner/spinner.component";
import {AccordionItemCourse} from "../course-content/accordion-item-course.component";
import {v4 as uuid} from 'uuid';
import {Redirect} from "react-router-dom";
import {GoTop} from "../go-top/go-top.component";

export function Lesson() {
    const query = useQuery();
    const [active, setActive] = useState(query.get('a'));
    const nodeId = active?.split('/')[1];
    const [video, setVideo] = useState('');
    const course = useSelector(selectCourse(nodeId));
    const [loading, setLoading] = useState(true);
    const contentLoading = Array(3).fill({
        name: 'loading',
        children: Array(3).fill({
            name: 'loading'
        })
    });
    const currentCourseSession = active?.split('/').slice(-2, -1).join();

    useEffect(() => {
        if (!active) return;

        async function getVideo() {
            try {
                const fetch = await http(`courses/embed?path=${active}`);
                const {response, error} = await fetch.json();
                if (error) {
                    setActive(null);
                } else {
                    setVideo(response);
                }
            } catch (e) {
                setActive(null);
            }
        }

        setLoading(true);
        window.scrollTo(0, 0);
        getVideo();
    }, [active]);

    if (!active) return <Redirect to="/"/>;

    const getNodePath = nodeId => active.slice().split('/').slice(0, -2).concat(nodeId).join('/');

    return (
        <>
            <Nav subtitle={course ? course.name : null}/>
            <section>
                <div className="row">
                    <div className="col-lg-8 video-content">
                        {
                            video ?
                                <iframe
                                    allowFullScreen
                                    frameBorder="0"
                                    style={{width: '100%', height: '100%', opacity: loading ? 0 : 1}}
                                    src={video} title={nodeId}
                                    onLoad={() => setLoading(false)}
                                />
                                : null
                        }
                        <div className="spinner-container">
                            <Spinner active={loading}/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="container">
                            <h2>Content</h2>
                            <div className="accordion" id="accordionCourse">
                                {
                                    course && Array.isArray(course.children) ?
                                        childrenSorted(course.children).map(c =>
                                            <AccordionItemCourse key={uuid()}
                                                                 id={uuid()}
                                                                 expanded={c.nodeId === currentCourseSession}
                                                                 idAccordion="accordionCourse"
                                                                 title={c.name}
                                                                 children={c.children}
                                                                 pathCourse={getNodePath(c.nodeId)}
                                                                 setActive={setActive}
                                            />)
                                        : contentLoading.map((c, i) =>
                                            <AccordionItemCourse key={uuid()}
                                                                 id={uuid()}
                                                                 expanded={i === 0}
                                                                 idAccordion="accordionCourse"
                                                                 title={c.name}
                                                                 loading={true}
                                            />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GoTop/>
        </>
    )
}
