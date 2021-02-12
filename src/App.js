import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Home} from './components/home/home.component';
import {Lesson} from "./components/lesson/lesson.component";
import {Footer} from "./components/footer/footer.component";
import {getWebStorage} from "./share/utils";
import {useDispatch} from "react-redux";
import {loadCourses} from "./store/actions/courses.action";

export default function App() {
    const dispatch = useDispatch();
    const coursesCache = getWebStorage('courses');

    if (coursesCache) dispatch(loadCourses(coursesCache));

    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/lesson" component={Lesson}/>

                    <Route>
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </HashRouter>
            <Footer/>
        </>
    );
}
