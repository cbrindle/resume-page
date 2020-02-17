import React, { Component } from 'react'

export default class FreelanceMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.jobTitle}>
                    job title
                </div>
                <div style={styles.jobDescription}>
                    description area
                </div>
                <div style={styles.jobBullets}>
                    <ul>
                        <li>Bullet points</li>
                    </ul>
                </div>
                <div style={styles.closeSection}>
                    <button type="button" id="showFreelance" name="button" onClick={this.props.close}>Close</button>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        height: '80vh',
        width: '98%',
        display: 'grid',
        gridTemplateRows: '20% 20% 50% 10%',
        gridTemplateColumns: '100%',
        backgroundImage: 'linear-gradient(to right, lightgray, rgba(255,255,255,0.3))',
        margin: '0 0 5vh 0'
    },
    jobTitle: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    jobDescription: {
        gridArea: '2 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
        justifyContent: 'center'
    }
}