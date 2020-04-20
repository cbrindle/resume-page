import React, { Component } from 'react';
import brindleContact from '../../images/brindle-contact.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GiCastle } from 'react-icons/gi';


export default class Contact extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.centerTop}>
                    <h1 style={styles.title}>Contact</h1>
                </div>
                <div style={styles.centerContent}>
                    <div style={{ textAlign: 'center', fontSize: '1.4em' }}>
                        <p><b><u>Email:</u></b> <a href="mailto:cbrindleusa@gmail.com?Subject=Resume%20Page%20Email"><i>cbrindleusa@gmail.com</i></a></p>
                    </div>
                    <br />
                    <div style={{ textAlign: 'center', fontSize: '1.6em' }}>
                        <p>Thank you for visiting my resume page. Feel free to contact me anytime at the contact information listed above. If you want to learn more about me in the meantime, you can follow the links at the bottom of the page to my LinkedIn page, Github Repo, and to Tales from Swiftfell (a browser-based role-playing game I created).</p>

                        <p>You can also <a href="https://drive.google.com/open?id=14rcJV5oQr3JidlN0aIagzQaBrqt5H1Rb" download>Click Here</a> to download a one-page, PDF version of my resume.</p>
                    </div>
                </div>
                <div style={styles.imgArea}>
                    <img src={brindleContact} style={styles.rightImg} alt="Bitmoji of Brindle holding a tin can and string to his ear" />
                </div>
                <div style={styles.linkArea}>
                    <FaLinkedin size={48} color={'blue'} style={styles.linksIcon} onClick={() => window.open('https://www.linkedin.com/in/christopherbrindle/', "_blank")} />
                    <FaGithub size={48} style={styles.linksIcon} onClick={() => window.open('https://github.com/cbrindle', "_blank")} />
                    <GiCastle size={48} color={'maroon'} style={styles.linksIcon} onClick={() => window.open('https://tfs-chapter1.herokuapp.com/', "_blank")} />
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        height: '100vh',
        width: '85vw',
        gridTemplateColumns: '10% 60% 30%',
        gridTemplateRows: '10% 15% 60% 15%'
    },
    centerTop: {
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
        gridArea: '3 / 2 / span 1 / span 1'
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
    linkArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridArea: '4 / 2 / span 1 / span 1'
    },
    linksIcon: {
        margin: '0 5% 0 5%',
        cursor: 'pointer'
    }
}