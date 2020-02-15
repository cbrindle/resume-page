import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import background from './images/main-bg3-mod.png';
import Spinner from './components/Spinner/Spinner';

const Home = React.lazy(() => import('./components/Home/Home'));
const Education = React.lazy(() => import('./components/Education/Education'));
const WorkExp = React.lazy(() => import('./components/WorkExp/WorkExp'));
const Coding = React.lazy(() => import('./components/Coding/Coding'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Misc = React.lazy(() => import('./components/Misc/Misc'));
const CodingAlt = React.lazy(() => import('./components/Coding/CodingAlt'));

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
                            <Route exact path="/coding" component={CodingAlt} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/misc" component={Misc} />
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