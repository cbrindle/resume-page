import React, { Component } from 'react'

export default class CImobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.title}>
                    <h1>About the Program</h1>
                </div>
                <div style={styles.aboutSection}>
                    <p>The Code Immersive Web Development Intensive program helps students develop the technical skills required to pursue the opportunities that exist in the fast-growing web programming and software development industry. Code Immersive students are in the classroom for 45 weeks over the 900-hour, year-long, three-semester program. Contrast this with the typical coding bootcamp which lasts only 13-17 weeks.</p>
                </div>
                <div style={styles.title2}>
                    <h1>Accomplishments</h1>
                </div>
                <div style={styles.accomplishmentSection}>
                    <ul className="accomplishments">
                        <li>Full-Stack Web Developer (MERN Stack)</li>
                        <li>AWS Certification (May 2020)</li>
                    </ul>
                </div>
                <div style={styles.closeSection}>
                    <button type="button" style={styles.closeButton} onClick={this.props.close} id="showCI">Close</button>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        height: '90vh',
        width: '90vw',
        border: '1px solid black',
        backgroundImage: 'linear-gradient(to right, lightgray, white)',
        gridTemplateRows: '10% 40% 10% 30% 10%',
        gridTemplateColumns: '100%'
    },
    title: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    aboutSection: {
        gridArea: '2 / 1 / span 1 / span 1',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid black',
        padding: '0 2vw 0 2vw',
        textAlign: 'center'
    },
    title2: {
        gridArea: '3 / 1 / span 1 / span 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    accomplishmentSection: {
        gridArea: '4 / 1 / span 1 / span 1',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid black',
        padding: '0 2vw 0 2vw',
    },
    closeSection: {
        gridArea: '5 / 1 / span 1 / span 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        height: '80%',
        width: '40%',
        border: '1px solid black',
        borderRadius: '3px',
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        fontSize: '0.8em',
        cursor: 'pointer'
    },
}