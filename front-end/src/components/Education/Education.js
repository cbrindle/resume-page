import React, { Component } from 'react';
import brindleSchool from '../../images/brindle-school.png';
import CodeImmersives from './CodeImmersives';
import SetonHall from './SetonHall';
import UCC from './UCC';
import ReactModal from 'react-modal';


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
                <CodeImmersives open={this.state.showCodeImmersives} />
                
                {/* {this.state.showCodeImmersives && <CodeImmersives />}
                {this.state.showSetonHall && <SetonHall />}
                {this.state.showUCC && <UCC />} */}
            </div>
            <div style={styles.main}>
                <div style={styles.centerTop}>
                    <h1 style={styles.title}>Education</h1>
                </div>
                <div style={styles.centerContent}>
                    <h2 id="showCodeImmersives" onClick={this.showSchool}>Code Immersives placeholder</h2>
                    <h2 id="showSetonHall" onClick={this.showSchool}>Seton Hall placeholder</h2>
                    <h2 id="showUCC" onClick={this.showSchool}>UCC placeholder</h2>
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
    rightImg: {
        width: '85%'
    }
}