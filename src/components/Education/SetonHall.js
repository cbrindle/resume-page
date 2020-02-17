import React, { Component } from 'react';
import ReactModal from 'react-modal';
import setonHallLogo from '../../images/setonHallLogo.png';

export default class SetonHall extends Component {
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
                            <h1 style={styles.shadow}>Seton Hall University</h1>
                        </div>
                        <div style={styles.contentLeft}>
                            <div>
                                <p><u>Dates Attended</u></p>
                                <p>Jan 2017 to May 2018</p>
                            </div>
                            <div>
                                <p><u>Degree</u></p>
                                <p>Bachelor's Degree of Arts in Criminal Justice</p>
                            </div>
                            <div>
                                <p><u>Accomplishments</u></p>
                                <p>4.0 GPA, <i>Summa Cum Laude</i></p>
                            </div>
                        </div>
                        <div style={styles.contentRight}>
                            <p>"One of the country's leading Catholic universities, Seton Hall University has been developing students in mind, heart, and spirit since 1856. Home to over 10,000 undergraduate and graduate students and offering more than 90 rigorous majors, Seton Hall's academic excellence has been singled out for distinction by The Princeton Review, U.S. News & World Report and Bloomberg Businessweek."</p>

                            <p>"With a 14:1 student-to-faculty ratio, professors not only teach, but mentor you in your career endeavors. Seton Hall offers more than 17,000 internship opportunities to choose from."</p>
                        </div>
                        <div style={styles.closeArea}>
                            <button id="showSetonHall" type="button" onClick={this.props.closeModal} style={styles.closeButton}>Close</button>
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
        backgroundImage: `url(${setonHallLogo})`,
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
        fontSize: '0.8em',
        cursor: 'pointer'
    },
    shadow: {
        textShadow: '3px 3px gray'
    }
}