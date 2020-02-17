import React, { Component } from 'react';
import rugbyTackle from '../../images/rugbyTackle.jpg';

export default class RugbyMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.descriptionSection}>
                    <h3 style={{ marginBottom: '0' }}>Union County Rugby Football Club:</h3>
                    <p>Founded in the Fall of 1974, by Boston College Alumni Jerry Rotella and Hank Hanson, together with a contingent of local novices wearing uniforms of blue and orange, Union County Rugby Football Club finished its inaugural season 5-0-1. The mission of this Club is to continue this tradition of excellence and advance the sport of rugby to any and all that have a desire to join the Club regardless of race, sex, religion, color, creed, social standing, sexual orientation or physical ability.</p>
                </div>
                <div style={styles.imageSection}>
                    <img src={rugbyTackle} style={styles.hobbyImg} alt="Brindle about to get tackled" />
                </div>
                <div style={styles.closeSection}>
                    <button id="showRugby" type="button" onClick={this.props.close} style={styles.closeButton}>Close</button>
                </div>
            </div >
        )
    }
}

const styles = {
    main: {
        height: '90vh',
        width: '98%',
        display: 'grid',
        gridTemplateRows: '60% 30% 10%',
        gridTemplateColumns: '100%',
        border: '1px solid black',
        backgroundImage: 'linear-gradient(to right, lightgray, rgba(255,255,255,0.3))',
        borderRadius: '5px'
    },
    descriptionSection: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2vw 0 2vw',
    },
    imageSection: {
        gridArea: '2 / 1 / span 1 / span 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hobbyImg: {
        height: '100%',
        width: '55%',
        borderRadius: '20%'
    },
    closeSection: {
        gridArea: '3 / 1 / span 1 / span 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        height: '50%',
        width: '40%',
        border: '1px solid black',
        borderRadius: '3px',
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        fontSize: '0.8em',
        cursor: 'pointer'
    },
}