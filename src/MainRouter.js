import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import background from './images/main-bg3-mod.png';
import Spinner from './components/Spinner/Spinner';

const Home = React.lazy(() => import('./components/Home/Home'));
const Education = React.lazy(() => import('./components/Education/Education'));
const WorkExp = React.lazy(() => import('./components/WorkExp/WorkExp'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Misc = React.lazy(() => import('./components/Misc/Misc'));
const CodingAlt = React.lazy(() => import('./components/Coding/CodingAlt'));
const HomeMobile = React.lazy(() => import('./components/Home/HomeMobile'));

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <div style={styles.main}>
                    {typeof window.orientation !== "undefined" ? '' : <Nav />}
                    <React.Suspense fallback={<Spinner />}>
                        <Switch>
                            {typeof window.orientation !== "undefined" ? <Route exact path="/" component={HomeMobile} /> : <Route exact path="/" component={Home} />}
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