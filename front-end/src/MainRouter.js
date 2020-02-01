import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import background from './images/main-bg3-mod.png';

// import UserProfile from './components/UserProfile/UserProfile';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const Home = React.lazy(() => import('./components/Home/Home'))
// const Signin = React.lazy(() => import('./components/Signin/Signin'))
// const Signup = React.lazy(() => import('./components/Signup/Signup'))

export default class MainRouter extends Component {
    render() {
        return (
            <>
            <div style={styles.main}>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
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