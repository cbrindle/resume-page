import React, { Component } from 'react';
import mountains from '../../images/mountains.jpeg';

export default class TravelMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.descriptionSection}>
                    <h3 style={{ marginBottom: '0' }}>Travel:</h3>
                    <p>I found myself stationed in Vicenza, Italy during the last four years of my enlistment in the US Army. This northern Italian locale was essentially a central hub for me to the rest of Europe, perfect for exploration. I was able to experience the sites, cultures, and cuisine of many different nations, including Germany, France, Poland, Prague, Czech Republic, Croatia, Japan, Thailand, Budapest, and many more.</p>
                </div>
                <div style={styles.imageSection}>
                    <img id="showTravel" src={mountains} style={styles.hobbyImg} alt="A snow-capped mountain" />
                </div>
                <div style={styles.closeSection}>
                    <button id="showTravel" type="button" onClick={this.props.close} style={styles.closeButton}>Close</button>
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
        borderRadius: '5px',
        marginBottom: '5vh'
    },
    descriptionSection: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
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