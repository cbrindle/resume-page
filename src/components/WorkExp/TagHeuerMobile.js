import React, { Component } from 'react'

export default class TagHeuerMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.jobTitle}>
                    <h3 style={{ margin: '0' }}>E-Learning Administrator</h3>
                    <p style={{ margin: '0' }}><i>TAG Heuer</i></p>
                    <p style={{ margin: '0' }}><i>July 2016 - May 2018</i></p>
                </div>
                <div style={styles.jobDescription}>
                    <p>In order for a jeweler or retailer to be able to sell TAH Heuer luxury time pieces, sales associates must undergo professional training concerning product knowledge, history, marketing, and customer service. The E-Learning Administrator is responsible for overseeing that program.</p>
                </div>
                <div style={styles.jobBullets}>
                    <ul>
                        <li>Responsible for building and maintaining a user database for an online retail training platform that services the United States and Canada, containing over 7,000 users.</li>
                        <br />

                        <li>Provide prompt and effective trouble-shooting solutions to user-end issues with platform interaction and website interfacing.</li>
                        <br />

                        <li>Advise and assist management elements in the improvement of the training program by developing and implementing innovative procedures.</li>
                    </ul>
                </div>
                <div style={styles.closeSection}>
                    <button type="button" id="showTAG" name="button" style={styles.closeButton} onClick={this.props.close}>Close</button>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        height: '115vh',
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