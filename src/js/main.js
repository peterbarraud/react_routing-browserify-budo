import ReactDOM from 'react-dom';
import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// of course, these components will probably go into their own .js file and maybe even their own folder
const Nav = () =>
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/contactus"><li>Contact us</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
    </div>

const Home = () =>
    <div>
        <h2>Home</h2>
    </div>

const About = () =>
    <div>
        <h2>About</h2>
    </div>

const ContactUs = () =>
    <div>
        <h2>Contact us</h2>
    </div>


const App = () =>
    <BrowserRouter>
        <div>
            <h1>Hello World</h1>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </BrowserRouter>    
    
ReactDOM.render(
    <App />,
    document.getElementById('app')
)