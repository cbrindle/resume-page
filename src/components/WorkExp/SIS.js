import React, { Component } from 'react'

export default class SIS extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.title}>
                    <p style={{ padding: '0 0 0 2vw' }}><b>Security Operations Supervisor</b></p>
                    <p style={{ padding: '0 0 0 2vw' }}><i>Security Industry Specialists - Aug 2018 to March 2019</i></p>
                </div>
                <div style={styles.description}>
                    <p>Description</p>
                </div>
                <div style={styles.descriptionRight}>
                    <p>SIS provides tailored security solutions for Fortune 500 companies and high level executives. A Security Operations Supervisor maintains client relations, hires, trains, schedules, and deploys Security Specialists, and processes all administrative actions for all Specialists in their ward.</p>
                </div>
                <div style={styles.duties}>
                    <p>Duties</p>
                </div>
                <div style={styles.dutiesRight}>
                    <ul style={{ margin: 'auto' }}>
                        <li>Was responsible for the hiring, training, scheduling, deployment, and management of an 80-person unarmed Security Specialist team across multiple luxury boutiques and Fortune 500 retail clients.</li>
                        <br />

                        <li>Maintained relationships with client management teams to ensure services provided comply with the company’s quality standards, needs, and operational picture.</li>
                        <br />

                        <li>Identified needs for, and provide, professional development training in areas such as basic and advanced security skills, leadership, loss prevention, and client specific policies and procedures.</li>
                    </ul>
                </div>
                <div style={styles.buttonArea}>
                    <button style={styles.close} onClick={() => this.props.closeButton(this.props.id)}>Close</button>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        width: '98%',
        height: '80vh',
        alignItems: 'center',
        gridTemplateRows: '20% 20% 50% 10%',
        gridTemplateColumns: '30% 70%',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2))',
        borderRadius: '5px',
        border: '1px solid black',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 1 / span 1 / span 2',
        alignItems: 'flex-start'
    },
    description: {
        display: 'flex',
        height: '100%',
        gridArea: '2 / 1 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid black',
        borderTop: '1px solid black',
        fontSize: '1.2em'
    },
    descriptionRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gridArea: '2 / 2 / span 1 / span 1',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
        borderTop: '1px solid black',
        padding: '0 5% 0 5%'
    },
    duties: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridArea: '3 / 1 / span 1 / span 1',
        fontSize: '1.2em'
    },
    dutiesRight: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderLeft: '1px solid black'
    },
    buttonArea: {
        display: 'flex',
        gridArea: '4 / 1 / span 1 / span 2',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid black'
    },
    close: {
        width: '7vw',
        height: '5vh',
        border: '1px solid darkgray',
        borderRadius: '3px',
        fontSize: '0.9em'
    }
}