import React, { Component } from 'react'

export default class ArmyMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.jobTitle}>
                    <h3 style={{ margin: '0' }}>Infantry Paratrooper</h3>
                    <p style={{ margin: '0' }}><i>United States Army</i></p>
                    <p style={{ margin: '0' }}><i>October 2004 - August 2015</i></p>
                </div>
                <div style={styles.jobDescription}>
                    <p>Standing on the front lines front lines of combat, the Infantry Paratrooper is charged with defending our nation by parachuting into enemy territory, securing the area.</p>
                </div>
                <div style={styles.jobBullets}>
                    <ul>
                        <li>Exercised sound judgment in the maneuvering and control of team members, successfully accomplishing over 200 combat missions in multiple theaters of operation.</li>
                        <br />

                        <li>Conducted reconnaissance, surveillance, and target acquisition as part of a three-man team responsible for the accurate and timely gathering of intelligence to support larger operations.</li>
                        <br />

                        <li>Reviewed, processed, and supervised accountability of financial, administrative, and personnel actions for up to 220 employees as a Company Operations Manager.</li>
                    </ul>
                </div>
                <div style={styles.closeSection}>
                    <button type="button" id="showArmy" name="button" style={styles.closeButton} onClick={this.props.close}>Close</button>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        height: '120vh',
        width: '98%',
        display: 'grid',
        gridTemplateRows: '17% 23% 53% 7%',
        gridTemplateColumns: '100%',
        backgroundImage: 'linear-gradient(to right, lightgray, rgba(255,255,255,0.3))',
        margin: '0 0 5vh 0',
        border: '1px solid black',
        borderRadius: '5px'
    },
    jobTitle: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 3vw 0 3vw',
        backgroundImage: 'linear-gradient(to bottom right, purple, rgba(255,255,255,0.3))',
        color: 'white',
        fontWeight: 'bold'
    },
    jobDescription: {
        gridArea: '2 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 3vw 0 3vw'
    },
    jobBullets: {
        gridArea: '3 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column'
    },
    closeSection: {
        gridArea: '4 / 1 / span 1 / span 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px dotted black'
    },
    closeButton: {
        height: '80%',
        width: '40%',
        backgroundColor: 'skyblue',
        border: '1px solid black',
        borderRadius: '5px'
    }
}