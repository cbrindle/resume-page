import React, { Component } from 'react';
import brindleContact from '../../images/brindle-contact.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GiCastle } from 'react-icons/gi';

export default class ContactMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>Contact</h1>

                <p style={{ textAlign: 'center' }}><b><u>Email:</u></b> <a href="mailto:cbrindleusa@gmail.com?Subject=Resume%20Page%20Email"><i>cbrindleusa@gmail.com</i></a></p>

                <p>Thank you for visiting my resume page. Feel free to contact me anytime at the contact information listed above. If you want to learn more about me in the meantime, you can follow the links at the bottom of the page to my LinkedIn page, Github Repo, and to Tales from Swiftfell (a browser-based role-playing game I created).</p>

                <p style={{ textAlign: 'center' }}>You can also <a href="https://drive.google.com/open?id=1xJBu1GWLXfmCE0WeWbP_KxTE_4n3tjqB" download>Click Here</a> to download a one-page, PDF version of my resume.</p>

                <div style={styles.iconSection}>
                    <FaLinkedin size={48} color={'blue'} onClick={() => window.open('https://www.linkedin.com/in/christopherbrindle/', "_blank")} />
                    <FaGithub size={48} onClick={() => window.open('https://github.com/cbrindle', "_blank")} />
                    <GiCastle size={48} color={'maroon'} onClick={() => window.open('https://tfs-chapter1.herokuapp.com/', "_blank")} />
                </div>


                <br />
                <br />
                <img src={brindleContact} alt="Bitmoji of Brindle holding a tin can and string to his ear" />
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
    iconSection: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '5vh 0 0 0',
        border: '1px solid black',
        padding: '3vh 2vw',
        borderRadius: '5px',
        backgroundImage: 'linear-gradient(to right, lightgray, white)'
    }
}