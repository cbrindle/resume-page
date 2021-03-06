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
                    <br />
                    Full-Stack Web Developer
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
        // background: 'linear-gradient(#B7C9DF, white)',
        gridTemplateColumns: '100%',
        gridTemplateRows: '30% 70%'
    },
    top: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 1 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        gridArea: '2 / 1 / span 1 / span 1'
    },
    icon: {
        height: '60%',
        width: '40%%'
    }
}