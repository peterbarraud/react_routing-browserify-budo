import ReactDOM from 'react-dom';
// also include lazy to lazy load components
// and Suspense while you're waiting for the lazy components to load
import React, { lazy, Suspense } from 'react';

// MemoryRouter in place of BrowserRouter
import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom'

// of course, these components will probably go into their own .js file and maybe even their own folder
const Nav = () =>
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/contactus"><li>Contact us</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/lazybones"><li>Lazy bones</li></Link>
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

// let's also have a lazy loaded components and let's call it LazyBones
const LazyBones = () =>
    <div>
        <h2>Lazy bones</h2>
    </div>


const App = () =>
    <Router>
        <div>
            <h1>Hello World</h1>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/about" component={About} />
                <Route path="/lazybones" component={WaitForLoad(LazyBones)} />
            </Switch>
        </div>
    </Router>    
    
const WaitForLoad = (Component) => {
    return props => (
        <Suspense fallback={<div>Lazy loading bones...</div>}>
          <Component {...props} />
        </Suspense>
      );
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)