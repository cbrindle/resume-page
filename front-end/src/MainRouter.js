import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import background from './images/main-bg3-mod.png';
import Spinner from './components/Spinner/Spinner';

// import UserProfile from './components/UserProfile/UserProfile';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const Home = React.lazy(() => import('./components/Home/Home'));
const Education = React.lazy(() => import('./components/Education/Education'));
const WorkExp = React.lazy(() => import('./components/WorkExp/WorkExp'));
const Coding = React.lazy(() => import('./components/Coding/Coding'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

export default class MainRouter extends Component {
    render() {
        return (
            <>
            <div style={styles.main}>
                <Nav />
                <React.Suspense fallback={<Spinner />}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/education" component={Education} />
                    <Route exact path="/work-experience" component={WorkExp} />
                    <Route exact path="/coding" component={Coding} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                </React.Suspense>
            </div>
            </>
        )
    }
}


const styles = {
    main: {
        display: 'flex',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
}