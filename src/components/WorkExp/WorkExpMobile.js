import React, { Component } from 'react';
import brindleCoffee from '../../images/brindle-coffee.png';

export default class WorkExpMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>
                    Work Experience
                </h1>
                <p>Find out more about my past work experience and professional achievements.</p>



                <img src={brindleCoffee} alt="Bitmoji of Brindle leaning against a wall drinking coffee" />
                <p className="mobile-view-text">You are currently viewing this page on a mobile device. Switch to a desk/laptop to see the full version.</p>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 5vw 0 5vw',
        fontSize: '1.2em',
        overflowY: 'scroll'
    }
}