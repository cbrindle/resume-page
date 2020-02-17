import React, { Component } from 'react';
import brindleCoding from '../../images/brindle-coding.png';

export default class CodingMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>
                    Coding Stack
                </h1>
                <p>There are many different ways to write code to achieve the goals we set. Learn a little bit more about how I do business!</p>



                <img src={brindleCoding} style={{ height: '30vh', width: '55vw', alignSelf: 'center' }} alt="Bitmoji of Brindle coding at a computer" />
                <p className="mobile-view-text" style={{ marginTop: '1vh' }}>You are currently viewing this page on a mobile device. Switch to a desk/laptop to see the full version.</p>
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