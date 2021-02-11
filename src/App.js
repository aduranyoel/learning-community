import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Home} from './components/home/home.component';
import {Lesson} from "./components/lesson/lesson.component";
import {Footer} from "./components/footer/footer.component";
import {config} from "./config";
import {getStorage} from "./share/utils";
import {useDispatch} from "react-redux";
import {loadCourses} from "./store/actions/courses.action";

export default function App() {
    console.log(config);
    const dispatch = useDispatch();
    const coursesCache = getStorage('courses');

    useEffect(() => {
        if (coursesCache) dispatch(loadCourses(coursesCache));
    }, []);

    return (
        <>
            <Router basename="learning-community">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/lesson" component={Lesson}/>

                    <Route>
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}
