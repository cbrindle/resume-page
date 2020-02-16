import React, { Component } from 'react';
import ciLogo from '../../images/ciLogo.png';
import shMobile from '../../images/shMobile.png';
import uccMobile from '../../images/uccMobile.png';
import brindleSchool from '../../images/brindle-school.png';
import CImobile from './CImobile';
import SetonMobile from './SetonMobile';
import UccMobile from './SetonMobile';

export default class EducationMobile extends Component {

    state = {
        showCI: true,
        showSetonHall: false,
        showUCC: false
    }

    showSchool = (event) => {
        this.setState({
            [event.target.id]: !this.state[event.target.id]
        })
    }


    render() {
        return (
            <div style={styles.main}>
                <h1 style={styles.title}>Education</h1>

                <p>Having both a certification as a Full Stack Web Developer and a Bachelor's of Arts / Associate's of Science Degree in Criminal Justice, my well-rounded education gives me the technical, social, practical know-how to deliver high quality products. Click below to get more information...</p>
                <br />
                <br />

                <div style={{ textAlign: 'center' }}>
                    <p><b>Code Immersives - NYC</b></p>
                    <p>Full Stack Web Development</p>
                    <img id="showCI" src={ciLogo} style={styles.schoolLogo} onClick={this.showSchool} alt='Code Immersives logo' />
                </div>
                <div style={styles.schoolMain}>
                    {this.state.showCI ? <CImobile close={this.showSchool} /> : null}
                </div>


                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '10vh 0 0 0' }}><b>Seton Hall University</b></p>
                    <p>BA in Criminal Justice</p>
                    <img id="showSetonHall" src={shMobile} alt="Seton Hall University logo" style={styles.schoolLogo} onClick={this.showSchool} />
                </div>
                <div>
                    {this.state.showSetonHall ? <SetonMobile close={this.showSchool} /> : null}
                </div>


                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '10vh 0 0 0' }}><b>Union County College</b></p>
                    <p style={{ marginBottom: '0' }}>AS in Criminal Justice</p>
                    <img id="showUCC" src={uccMobile} style={styles.schoolLogo} onClick={this.showSchool} alt="Union County College logo" />
                </div>
                <div>
                    {this.state.showUCC ? <UccMobile /> : null}
                </div>

                <br />
                <br />
                <img src={brindleSchool} alt="Bitmoji of Brindle in school attire" />
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
    title: {
        textAlign: 'center'
    },
    schoolLogo: {
        height: '30vh',
        width: '70vw',
    },
    schoolMain: {
        display: 'grid',

    }
}