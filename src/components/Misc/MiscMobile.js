import React, { Component } from 'react';
import brindleMisc from '../../images/brindle-misc.png';
import hobbyRugby from '../../images/hobbyRugby.jpg';
import hobbyTravel from '../../images/hobbyTravel.jpg';
import hobbyHI from '../../images/hobbyHI.jpg';
import RugbyMobile from './RugbyMobile';
import HIMobile from './HIMobile';
import TravelMobile from './TravelMobile';

export default class MiscMobile extends Component {

    state = {
        showRugby: false,
        showHI: true,
        showTravel: false
    }

    showHobby = (event) => {
        this.setState({
            [event.target.id]: !this.state[event.target.id]
        }, this.scrollOnClose(event))
    }

    scrollOnClose = (event) => {
        if (this.state[event.target.id] === true) {
            document.querySelector(`#${event.target.id}`).scrollIntoView();
        }
    }

    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>
                    Miscellaneous
                </h1>
                <p>A few fun facts and hobbies of mine to let you get to know me better.</p>

                <img id="showRugby" src={hobbyRugby} style={styles.hobbyImg} onClick={this.showHobby} alt="Brindle playing rugby" />

                {this.state.showRugby ? <RugbyMobile close={this.showHobby} /> : null}


                <img id="showHI" src={hobbyHI} style={styles.hobbyImg} onClick={this.showHobby} alt="Brindle standing in front of his home" />

                {this.state.showHI ? <HIMobile close={this.showHobby} /> : null}


                <img id="showTravel" src={hobbyTravel} style={styles.hobbyImg} onClick={this.showHobby} alt="World map with pins representing places traveled" />

                {this.state.showTravel ? <TravelMobile close={this.showHobby} /> : null}


                <img src={brindleMisc} style={styles.bitImg} alt="Bitnoji of Brindle parachuting in to cause trouble" />
                <p className="mobile-view-text">You are currently viewing this page on a mobile device. Switch to a desk/laptop to see the full version.</p>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 5vw 0 5vw',
        fontSize: '1.2em',
        overflowY: 'scroll'
    },
    bitImg: {
        height: '40%',
        width: '70%',
        alignSelf: 'center'
    },
    hobbyImg: {
        height: '30%',
        width: '100%',
        margin: '5vh 0 5vh 0'
    }
}