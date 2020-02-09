import React, { Component } from 'react';
import ReactModal from 'react-modal';
import codeImmersivesLogo from '../../images/codeImmersivesLogo.png';

export default class CodeImmersives extends Component {
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
                            <h1 style={styles.shadow}>Code Immersives</h1>
                        </div>
                        <div style={styles.contentLeft}>
                            <div>
                                <p><u>Date Attended</u></p>
                                <p>May 2019 to May 2020</p>
                            </div>
                            <div>
                                <p><u>Stack Taught</u></p>
                                <p>M.E.R.N. (MongoDB, Express.js, React, Node.js)</p>
                            </div>
                            <div>
                                <p><u>Certifications</u></p>
                                <p>Full-Stack Web Developer, AWS</p>
                            </div>
                        </div>
                        <div style={styles.contentRight}>
                            <p>The Code Immersive Web Development Intensive program helps students develop the technical skills required to pursue the opportunities that exist in the fast-growing web programming and software development industry. Code Immersive students are in the classroom for 45 weeks over the 900-hour, year-long, three-semester program. Contrast this with the typical coding bootcamp which lasts only 13-17 weeks.</p>

                            <p>Code Immersive is dedicated to providing students with the programming skills they need to enter the digital job market or advance their existing careers.</p>
                        </div>
                        <div style={styles.closeArea}>
                            <button id="showCodeImmersives" type="button" onClick={this.props.closeModal} style={styles.closeButton}>Close</button>
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
        backgroundImage: `url(${codeImmersivesLogo})`,
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
        fontSize: '1.3em'
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