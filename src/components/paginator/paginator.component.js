import React, {useState} from 'react';
import './paginator.component.css';
import {useSelector} from "react-redux";
import {selectAllCourses} from "../../store/reducers/courses.reducer";
import {paginate, range} from "../../share/utils";
import {v4 as uuid} from 'uuid';

/**
 * @return {null}
 */
export function Paginator({setCourses}) {

    const courses = useSelector(selectAllCourses);
    const PAGE_LENGTH = 8;
    const pages = range(1, Math.ceil(courses.length / PAGE_LENGTH));
    const [active, setActive] = useState(1);

    function navigate(e, page) {
        e.preventDefault();
        if (page === active) return;
        window.scrollTo(0, 0);
        setActive(page);
        setCourses(paginate(courses, {page}));
    }

    if (pages.length < 2) return null;

    return (
        <div className="blog">
            <div className="blog-pagination">
                <ul className="justify-content-center">
                    <li className={active === 1 ? "disabled" : ''}>
                        <a onClick={(e) => navigate(e, active - 1)} href="/" className="navigate">{'<'}</a>
                    </li>

                    {
                        pages.map((page, idx) => {
                            const isActive = idx + 1 === active;
                            return (
                                <li key={uuid()} className={isActive ? "active" : ""}>
                                    <a onClick={(e) => navigate(e, page)} href="/">{page}</a>
                                </li>
                            )
                        })
                    }


                    <li className={active === pages.length ? "disabled" : ''}>
                        <a onClick={(e) => navigate(e, active + 1)} href="/" className="navigate">{'>'}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
