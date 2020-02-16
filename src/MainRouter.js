// TODO: Fix SPA routing to be in compliance with Netlify

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import NavMobile from './components/Nav/NavMobile';
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
const EducationMobile = React.lazy(() => import('./components/Education/EducationMobile'));
const WorkExpMobile = React.lazy(() => import('./components/WorkExp/WorkExpMobile'));
const CodingMobile = React.lazy(() => import('./components/Coding/CodingMobile'));
const ContactMobile = React.lazy(() => import('./components/Contact/ContactMobile'));
const MiscMobile = React.lazy(() => import('./components/Misc/MiscMobile'));

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <div style={typeof window.orientation !== "undefined" ? styles.mainMobile : styles.main}>
                    {typeof window.orientation !== "undefined" ? <NavMobile /> : <Nav />}
                    <React.Suspense fallback={<Spinner />}>
                        <Switch>
                            {typeof window.orientation !== "undefined" ?
                                (
                                    <>
                                        <Route exact path="/" component={HomeMobile} />
                                        <Route exact path="/education-mobile" component={EducationMobile} />
                                        <Route exact path="/work-experience-mobile" component={WorkExpMobile} />
                                        <Route exact path="/coding-mobile" component={CodingMobile} />
                                        <Route exact path="/contact-mobile" component={ContactMobile} />
                                        <Route exact path="/mics-mobile" component={MiscMobile} />
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/education" component={Education} />
                                        <Route exact path="/work-experience" component={WorkExp} />
                                        <Route exact path="/coding" component={CodingAlt} />
                                        <Route exact path="/projects" component={Projects} />
                                        <Route exact path="/contact" component={Contact} />
                                        <Route exact path="/misc" component={Misc} />
                                    </>
                                )
                            }
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
    },
    mainMobile: {
        display: 'grid',
        gridTemplateRows: '10% 90%',
        gridTemplateColumns: '100%',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }
}