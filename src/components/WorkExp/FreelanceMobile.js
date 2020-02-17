import React, { Component } from 'react'

export default class FreelanceMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.jobTitle}>
                    <h3 style={{ margin: '0' }}>Full-Stack Web Developer</h3>
                    <p style={{ margin: '0' }}><i>Freelance</i></p>
                    <p style={{ margin: '0' }}><i>May 2019 - Present</i></p>
                </div>
                <div style={styles.jobDescription}>
                    <p>Proficient in both front and back end coding. Primary responsibilities include designing user interactions on websites, developing servers and databases for website functionality, and coding for mobile platforms.</p>
                </div>
                <div style={styles.jobBullets}>
                    <ul>
                        <li>Utilizes MERN (MongoDB, Express.js, React, Node.js) stack, create pixel-perfect custom web pages and apps that are fully responsive to both desktop and mobile viewing.</li>
                        <br />

                        <li>Implements expert level of knowledge and application of Javascript, HTML, and CSS when developing projects.</li>
                        <br />

                        <li>Conducts meetings with clients to determine their web application needs, translates them into clean, modern, and visually appealing code, and maintains the product to optimize its effectiveness in the ever-evolving field of technology.</li>
                    </ul>
                </div>
                <div style={styles.closeSection}>
                    <button type="button" id="showFreelance" name="button" style={styles.closeButton} onClick={this.props.close}>Close</button>
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