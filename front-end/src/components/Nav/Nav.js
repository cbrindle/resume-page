import React, { Component } from 'react';
import NavLinks from './NavLinks';
import BrindleIcon from '../../images/brindle-icon.png';

export default class Nav extends Component {
    render() {
        return (
            <>
            <div style={styles.main}>
                <div style={styles.top}>
                    <img src={BrindleIcon} style={styles.icon} alt="Bitmoji of Christopher Brindle" />
                </div>
                <div style={styles.bottom}>
                    <NavLinks />
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        flexDirection: 'column',
        height: '100vh',
        width: '15vw',
        backgroundColor: '#b7ffb7',
        gridTemplateColumns: '100%',
        gridTemplateRows: '20% 80%'
    },
    top: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        gridArea: '2 / 1 / span 1 / span 1'
    },
    icon: {
        height: '100%',
        width: '80%%'
    }
}