import React, { Component } from 'react'

export default class Freelance extends Component {


    render() {
        return (
            <div style={styles.main}>
                <div style={styles.title}>
                    <p style={{ padding: '0 0 0 2vw' }}><b>Full-Stack Web Developer</b></p>
                    <p style={{ padding: '0 0 0 2vw' }}><i>Freelance - May 2019 to Present</i></p>
                </div>
                <div style={styles.description}>
                    <p>Description</p>
                </div>
                <div style={styles.descriptionRight}>
                    <p>Proficient in both front and back-end coding. Primary responsibilities include designing user interactions on websites, developing servers and databases for website functionality, and coding for mobile platforms.</p>
                </div>
                <div style={styles.duties}>
                    <p>Duties</p>
                </div>
                <div style={styles.dutiesRight}>
                    <ul style={{ margin: 'auto' }}>
                        <li>Utilizes MERN (MongoDB, Express.js, React, Node.js) stack, create pixel-perfect custom web pages and apps that are fully responsive to both desktop and mobile viewing.</li>
                        <br />

                        <li>Implements expert level of knowledge and application of Javascript, HTML, and CSS when developing projects.</li>
                        <br />

                        <li>Conducts meetings with clients to determine their web application needs, translates them into clean, modern, and visually appealing code, and maintains the product to optimize its effectiveness in the ever-evolving field of technology.</li>
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