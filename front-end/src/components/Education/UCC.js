import React, { Component } from 'react';
import ReactModal from 'react-modal';
import uccLogo from '../../images/uccLogo.png';

export default class UCC extends Component {
    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.props.open}
                    style={{
                        overlay: {
                            top: 25,
                            left: 150,
                            bottom: 25,
                            right: 150,
                            backgroundColor: 'rgba(0,0,0,0.3)'
                        }
                    }}
                >
                    <div style={styles.main}>
                        <div style={styles.title}>
                            <h1 style={styles.shadow}>Union County College</h1>
                        </div>
                        <div style={styles.contentLeft}>
                            <div>
                                <p><u>Date Attended</u></p>
                                <p>Sep 2015 to Dec 2017</p>
                            </div>
                            <div>
                                <p><u>Degree</u></p>
                                <p>Associate's Degree of Science in Criminal Justice</p>
                            </div>
                            <div>
                                <p><u>Accomplishments</u></p>
                                <p>4.0 GPA, <i>Summa Cum Laude</i></p>
                            </div>
                        </div>
                        <div style={styles.contentRight}>
                            Right
                        </div>
                        <div style={styles.closeArea}>
                            <button id="showUCC" type="button" onClick={this.props.closeModal} style={styles.closeButton}>Close</button>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        gridTemplateRows: '20% 70% 10%',
        gridTemplateColumns: '50% 50%',
        height: '100%',
        width: '100%',
        backgroundImage: `url(${uccLogo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    title: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 2',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5em'
    },
    contentLeft: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 1 / span 1 / span 1',
        fontWeight: 'bold',
        fontSize: '1.3em',
    },
    contentRight: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        fontWeight: 'bold',
        fontSize: '1.3em',
        borderLeft: '2px solid black',
        padding: '0 0 0 4%'
    },
    closeArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridArea: '3 / 1 / span 1 / span 2'
    },
    closeButton: {
        height: '80%',
        width: '10%',
        border: '1px solid black',
        borderRadius: '3px',
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        fontSize: '0.8em'
    },
    shadow: {
        textShadow: '3px 3px gray'
    }
}