import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const RouteExample = () => {
    return (
        <Router>
        <div>
            <ul>
                <li>
                   <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/Topics">Topics</Link>
                </li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>

        </div>
        </Router>
    );
}



const Home = () => {
    return(
    <div>
        <h2>Home</h2>
    </div>
    );
}

const About = () => {
    return(
    <div>
        <h2>About</h2>
    </div>
    );
}

const Topics = ({ match }) => {
    return(
        <div>topics</div>
    );
}



export default RouteExample;