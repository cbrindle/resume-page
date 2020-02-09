import React, { Component } from 'react';
import brindleSchool from '../../images/brindle-school.png';
import CodeImmersives from './CodeImmersives';
import SetonHall from './SetonHall';
import UCC from './UCC';


export default class Education extends Component {

    state = {
        showCodeImmersives: false,
        showSetonHall: false,
        showUCC: false,
    }

    showSchool = (event) => {
        const id = event.target.id
        this.setState({
            [id]: !this.state[id]
        })
    }


    render() {
        return (
            <>
            <div>
                <CodeImmersives open={this.state.showCodeImmersives} closeModal={this.showSchool} />
                <SetonHall open={this.state.showSetonHall} closeModal={this.showSchool} />
                <UCC open={this.state.showUCC} closeModal={this.showSchool} />
            </div>
            <div style={styles.main}>
                <div style={styles.centerTop}>
                    <h1 style={styles.title}>Education</h1>
                </div>
                <div style={styles.centerContent}>
                    <div id="showCodeImmersives" style={styles.cursor} onClick={this.showSchool}>
                        <h2 id="showCodeImmersives" onClick={this.showSchool}>--- Code Immersives NYC ---</h2>
                        <p id="showCodeImmersives" onClick={this.showSchool} style={styles.description}>Web Developer Certification</p>
                    </div>
                    <div id="showSetonHall" style={styles.cursor} onClick={this.showSchool}>
                        <h2 id="showSetonHall" onClick={this.showSchool}>--- Seton Hall University ---</h2>
                        <p id="showSetonHall" onClick={this.showSchool} style={styles.description}>BA in Criminal Justice</p>
                    </div>
                    <div id="showUCC" style={styles.cursor} onClick={this.showSchool}>
                        <h2 id="showUCC" onClick={this.showSchool}>--- Union County College ---</h2>
                        <p id="showUCC" onClick={this.showSchool} style={styles.description}>AS in Criminal Justice</p>
                    </div>
                </div>
                <div style={styles.imgArea}>
                    <img src={brindleSchool} style={styles.rightImg} alt="Bitmoji of Brindle at school" />
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        height: '100vh',
        width: '85vw',
        gridTemplateColumns: '10% 60% 30%',
        gridTemplateRows: '10% 15% 70% 5%'
    },
    centerTop: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gridArea: '3 / 2 / span 1 / span 1',
        fontSize: '1.2em',
        overflowY: 'scroll'
    },
    title: {
        fontSize: '3em'
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 3 / span 3 / span 1',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    description: {
        textAlign: 'center'
    },
    rightImg: {
        width: '85%'
    },
    cursor: {
        cursor: 'pointer',
        margin: '2vh 0 2vh 0',
        backgroundImage: 'linear-gradient(to right, green, rgba(182,215,234,0.3)',
        borderRadius: '3px',
        borderLeft: '1px black solid',
    }
}