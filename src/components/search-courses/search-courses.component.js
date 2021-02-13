import React, {useContext, useRef} from 'react';
import {HomeContext} from "../../context/home.context";
import {useSelector} from "react-redux";
import searchSvg from '../../assets/img/search-solid.svg';
import {paginate} from "../../share/utils";

export function SearchCourses() {

    const homeContext = useContext(HomeContext);
    const courses = useSelector(state => state.courses);
    const {setCourses} = homeContext;
    const searchRef = useRef();

    function search(e) {
        e.preventDefault();
        const toSearch = searchRef.current?.value?.trim().toLowerCase();
        setCourses(paginate(courses.filter(c => c.name.toLowerCase().indexOf(toSearch) > -1), {page: 1}))
    }

    function handleBlur(e) {
        if (!e.target.value) setCourses(paginate(courses, {page: 1}));
    }

    return (
        <div className="blog search-container">
            <div className="sidebar">
                <div className="sidebar-item search-form">
                    <form onSubmit={search}>
                        <input onBlur={handleBlur} ref={searchRef} name="inputText" type="text"/>
                        <button type="submit">
                            <img src={searchSvg} alt="search" style={{width: '14px'}}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
