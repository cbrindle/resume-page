import React, { Component } from 'react'

export default class TagHeuer extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.title}>
                    <p style={{ padding: '0 0 0 2vw' }}><b>E-Learning Administrator</b></p>
                    <p style={{ padding: '0 0 0 2vw' }}><i>TAG Heuer - July 2016 to May 2018</i></p>
                </div>
                <div style={styles.description}>
                    <p>Description</p>
                </div>
                <div style={styles.descriptionRight}>
                    <p>In order for a jeweler or retailer to be able to sell TAG Heuer luxury time pieces, sales associates must undergo professional training concerning product knowledge, history, marketing, and customer service. The E-Learning Administrator is responsible for overseeing that program.</p>
                </div>
                <div style={styles.duties}>
                    <p>Duties</p>
                </div>
                <div style={styles.dutiesRight}>
                    <ul style={{ margin: 'auto' }}>
                        <li>Was responsible for building and maintaining a user database for an online retail training platform that services the United States and Canada, containing over 7,000 users.</li>
                        <br />

                        <li>Provided prompt and effective trouble-shooting solutions to user-end issues with platform interaction and website interfacing.</li>
                        <br />

                        <li>Advised and assisted management elements in the improvement of the training program by developing and implementing innovative procedures.</li>
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