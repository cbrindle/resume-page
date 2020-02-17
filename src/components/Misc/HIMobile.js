import React, { Component } from 'react';
import homeImprovement from '../../images/home-improvement.jpg';

export default class HIMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.descriptionSection}>
                    <h3 style={{ marginBottom: '0' }}>Home Improvement:</h3>
                    <p>Closing on my home purchase was only the first chapter. On top of a number of out-dated aesthetic design choices, the home inspection during the contract process revealed a number of significant electrical issues. Half of the first floor and the entire second floor had to be gutted, removing all the old plaster and lath walls to expose and remedy the problems. The amount of work that needed to be done was quickly becoming expensive. Fortunately, I was able to get a HUGE amount of help and know-how from my father and a few of his friends. Slowly but surely, I was able to do the majority of work myself, keeping costs down and eventually transforming the house into my <i>home.</i></p>
                </div>
                <div style={styles.imageSection}>
                    <img src={homeImprovement} style={styles.hobbyImg} alt="Brindle sitting on the stoop of his home after a long project" />
                </div>
                <div style={styles.closeSection}>
                    <button id="showHI" type="button" onClick={this.props.close} style={styles.closeButton}>Close</button>
                </div>
            </div >
        )
    }
}

const styles = {
    main: {
        height: '110vh',
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