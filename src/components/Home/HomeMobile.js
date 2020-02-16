import React, { Component } from 'react';
import brindleIcon from '../../images/brindle-icon.png';
import welcomeMobile from '../../images/welcomeMobile.png';

export default class HomeMobile extends Component {
    render() {
        return (
            <div style={styles.main}>

                <img src={welcomeMobile} style={{ marginTop: '2vh' }} alt="A welcome text logo with Brindle bitmoji leaning against it" />

                <p> I learned early on in life that amateurs work at something until they get it right; professionals will work at it until they can't get it wrong.</p>

                <p>After spending 11 years in the United States Army as an Infantry Paratrooper, with combat deployments to  both Iraq and Afghanistan, I was looking to start a new chapter of my life. While earning my BA in Criminal Justice, I was able to maintain a 4.0 GPA and work part-time for TAG Heuer as an E-Learning Administrator / Data Analysis. I continued my education by enrolling in Code Immersives NYC, an 11 month Web Development program that teaches modern development techniques and standards of practice that go well beyond a typical, 12-week "boot-camp."</p>

                <p>What I love most about Web Development is the ability to solve problems in a creative, and almost artistic, manner. The sense of satisfaction one gets from being able to transform a basic concept into a full-fledged, tangible product is one that keeps me motivated and always looking to learn more.</p>

                <p>What I offer is a modern understanding of not only the core elements of Web Development but the importance of User Interface and Experience. Bottom line, if your product looks lack-luster or is difficult to navigate, no one will care how fancy your code is on the back-end. I always ask myself, "Is this something I would want to use" when working on any project.</p>

                <p>To see more, please feel free to follow the link to my Github to have a look at what I'm working on, or email me anytime.</p>

                <img src={brindleIcon} alt="Brindle bitmoji icon" />

                <p className="mobile-view-text">You are currently viewing this page on a mobile device. Switch to a desk/laptop to see the full version.</p>
            </div >
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
    }
}