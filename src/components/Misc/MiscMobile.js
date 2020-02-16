import React, { Component } from 'react';
import brindleMisc from '../../images/brindle-misc.png';

export default class MiscMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>
                    Miscellaneous
                </h1>
                <p>A few fun fact to let you get to know me better.</p>



                <img src={brindleMisc} alt="Bitnoji of Brindle parachuting in to cause trouble" />
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