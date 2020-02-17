import React, { Component } from 'react';
import brindleCoffee from '../../images/brindle-coffee.png';
import fullStackJob from '../../images/fullStackJobMod.jpg';
import sisJob from '../../images/sisJob.png';
import tagJob from '../../images/tagJob.jpg';
import armyJob from '../../images/armyJob.jpg';
import FreelanceMobile from './FreelanceMobile';
import SISMobile from './SISMobile';

export default class WorkExpMobile extends Component {


    state = {
        showFreelance: true,
        showSIS: false,
        showTAG: false,
        showArmy: false
    }

    showJob = (event) => {
        this.setState({
            [event.target.id]: !this.state[event.target.id]
        })
    }


    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>
                    Work Experience
                </h1>
                <p style={{ marginBottom: '7vh' }}>Find out more about my past work experience and professional achievements.</p>

                <img id="showFreelance" onClick={this.showJob} src={fullStackJob} style={styles.jobImg} alt="Full stack job experience logo" />

                {this.state.showFreelance ? <FreelanceMobile close={this.showJob} /> : null}


                <img id="showSIS" onClick={this.showJob} src={sisJob} style={styles.jobImg} alt="SIS job experience logo" />

                {this.state.showSIS ? <SISMobile close={this.showJob} /> : null}


                <img src={tagJob} style={styles.jobImg} alt="TAG Heuer job experience logo" />



                <img src={armyJob} style={styles.jobImg} alt="Army job experience logo" />



                <img src={brindleCoffee} alt="Bitmoji of Brindle leaning against a wall drinking coffee" />
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
    jobImg: {
        height: '30vh',
        width: '100%',
        borderRadius: '5px',
        marginBottom: '8vh'
    }
}