import React, { Component } from 'react';
import brindleMisc from '../../images/brindle-misc.png';
import hobbyRugby from '../../images/hobbyRugby.jpg';
import hobbyHI from '../../images/hobbyHI.jpg';
import hobbyTravel from '../../images/hobbyTravel.jpg';
import Rugby from './Rugby';
import HI from './HI';
import Travel from './Travel';


export default class Misc extends Component {

    state = {
        showRugby: false,
        showHI: false,
        showTravel: false
    }

    showItem = (event) => {
        const id = event.target.id;
        this.setState({
            [id]: !this.state[id]
        })
    }

    render() {
        return (
            <>
            <div>
                <Rugby open={this.state.showRugby} closeModal={this.showItem} />
                <HI open={this.state.showHI} closeModal={this.showItem} />
                <Travel open={this.state.showTravel} closeModal={this.showItem} />
            </div>
            <div style={styles.main}>
                <div style={styles.centerTitle}>
                    <h1 style={styles.title}>Miscellaneous</h1>
                </div>
                <div style={styles.centerContent}>
                    <div style={{textAlign:'center'}}>
                        <img id="showRugby" onClick={this.showItem} src={hobbyRugby} alt="Brindle playing rugby, putting a step on a fool." style={styles.linkImage} />
                        <img id="showHI" onClick={this.showItem} src={hobbyHI} alt="Brindle standing proudly in front of his home which he would soon learn contained a myriad of electrical issues" style={styles.linkImage} />
                        <img id="showTravel" onClick={this.showItem} src={hobbyTravel} alt="A world map with pins representing all places traveled" style={styles.linkImage} />
                    </div>
                </div>
                <div style={styles.imgArea}>
                    <img src={brindleMisc} style={styles.rightImg} alt="Bitmoji of Brindle at parachuting onto the web page" />
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
    centerTitle: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: '3em'
    },
    centerContent: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '3 / 2 / span 1 / span 1',
        fontSize: '1.2em',
        alignItems: 'center',
        overflowY: 'scroll'
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 3 / span 3 / span 1',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rightImg: {
        width: '75%',
        height: '40%'
    },
    linkImage: {
        borderRadius: '3px',
        cursor: 'pointer',
        margin: '0 0 8vh 0'
    }
}
