import React from 'react';
import {Link} from "react-router-dom";
import './nav.component.css';
import {SearchCourses} from "../search-courses/search-courses.component";

export function Nav({title = 'LC', subtitle}) {
    return (
        <header id="header">
            <div className="container d-flex justify-content-between">

                <div className="logo" style={{width: subtitle ? '50%' : null}}>
                    <h1 className="text-light"><Link to="/"><span>{title}</span></Link></h1>
                    {
                        subtitle ?
                            (<>
                                <hr/>
                                <span>{subtitle}</span>
                            </>)
                            : null
                    }
                </div>
                {
                    subtitle ? null : <SearchCourses/>
                }

                <nav className="nav-menu d-lg-block">
                    <ul>
                        <li className=""><Link to="/">Home</Link></li>

                        {/*<li className="drop-down"><a href="#">About</a>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href="about.html">About Us</a></li>*/}
                        {/*        <li><a href="team.html">Team</a></li>*/}

                        {/*        <li className="drop-down"><a href="#">Drop Down 2</a>*/}
                        {/*            <ul>*/}
                        {/*                <li><a href="#">Deep Drop Down 1</a></li>*/}
                        {/*                <li><a href="#">Deep Drop Down 2</a></li>*/}
                        {/*                <li><a href="#">Deep Drop Down 3</a></li>*/}
                        {/*                <li><a href="#">Deep Drop Down 4</a></li>*/}
                        {/*                <li><a href="#">Deep Drop Down 5</a></li>*/}
                        {/*            </ul>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}

                        {/*<li><a href="#">Services</a></li>*/}
                        {/*<li><a href="#">Portfolio</a></li>*/}
                        {/*<li><a href="#">Pricing</a></li>*/}
                        {/*<li><a href="#">Blog</a></li>*/}
                        {/*<li><a href="#">Contact</a></li>*/}

                    </ul>
                </nav>

            </div>
        </header>
    )
}
