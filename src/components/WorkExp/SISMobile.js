import React, { Component } from 'react'

export default class SISMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.jobTitle}>
                    <h3 style={{ margin: '0' }}>Security Operations Supervisor</h3>
                    <p style={{ margin: '0' }}><i>Security Industry Specialists</i></p>
                    <p style={{ margin: '0' }}><i>August 2018 - March 2019</i></p>
                </div>
                <div style={styles.jobDescription}>
                    <p>SIS provides tailored security solutions for Fortune 500 companies and high level executives. A Security Operations Supervisor maintains client relations, hires, trains, schedules, and deploys Security Specialists, and processes all administrative actions for all Specialists in their ward.</p>
                </div>
                <div style={styles.jobBullets}>
                    <ul>
                        <li>Responsible for the hiring, training, scheduling, deployment, and management of an 80 person unarmed securit specialist team across multiple luxury boutiques and Fortune 500 retail clients</li>
                        <br />

                        <li>Maintained relationships with client management teams to ensure services being provided comply with the company’s quality standards, needs, and operational picture.</li>
                        <br />

                        <li>Identify needs for, and provide, professional development training in areas such as basic and advanced security skills, leadership, loss prevention, and client specific policies and procedures.</li>
                    </ul>
                </div>
                <div style={styles.closeSection}>
                    <button type="button" id="showSIS" name="button" style={styles.closeButton} onClick={this.props.close}>Close</button>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        height: '105vh',
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
