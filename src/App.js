import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Home} from './components/home/home.component';
import {Lesson} from "./components/lesson/lesson.component";
import {Footer} from "./components/footer/footer.component";

export default function App() {
    return (
        <>
            <Router>
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
