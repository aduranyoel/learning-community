import React, {useContext} from 'react';
import {HomeContext} from "../../context/home.context";
import {useSelector} from "react-redux";
import searchSvg from '../../assets/img/search-solid.svg';

export function SearchCourses() {

    const homeContext = useContext(HomeContext);
    const courses = useSelector(state => state.courses);
    const {setCourses} = homeContext;

    function search(e) {
        e.preventDefault();
        const toSearch = e.target[0]?.value?.trim().toLowerCase();
        setCourses(courses.filter(c => c.name.toLowerCase().indexOf(toSearch) > -1))
    }

    return (
        <div className="blog search-container">
            <div className="sidebar">
                <div className="sidebar-item search-form">
                    <form onSubmit={search}>
                        <input name="inputText" type="text"/>
                        <button type="submit">
                            <img src={searchSvg} alt="search" style={{width: '14px'}}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
