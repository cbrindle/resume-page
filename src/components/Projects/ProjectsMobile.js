import React, { Component } from 'react';
import tfsProjectImg from '../../images/tfsProjectImg.png';
import sincgarsLogo from '../../images/sincgarsLogo.png';
import brindleProjects from '../../images/brindle-projects.png';

export default class ProjectsMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>
                    Projects
                </h1>
                <p>Have a close look at some of the project's I've worked on, both solo and as part of a team.</p>


                <div style={styles.projectContainer}>
                    <div style={styles.projectTop}>
                        <h3><u>Tales from Swiftfell</u></h3>
                        <p>TFS is a fantasy role-playing game built in the style of a classic 16bit console video game. TFS uses the latest RPG Maker MV software, a development tool which utilizes Javascript that is simple enough for a child, but powerful enough for a developer. TFS is designed to run directly from your web browser, meaning no downloads, no installations, just adventure!</p>
                    </div>
                    <div style={styles.projectImgSection}>
                        <img src={tfsProjectImg} style={styles.projectImg} alt="Tales from Swiftfell landing page logo" />
                    </div>
                    <div style={styles.projectBottom}>
                        <ul className="project-listItems">
                            <li>Full Stack Web app - game runs entirely in browser</li>
                            <li>EJS / Javascript Coding for Front-End</li>
                            <li>Database maintained with MongoDB</li>
                        </ul>
                        <p>Website: <a href="http://tfs-chapter1.herokuapp.com" target="_blank" rel="noopener noreferrer">Tales from Swiftfell</a></p>
                        <p>Github Repo: <a href="https://github.com/cbrindle/tales-from-swiftfell" target="_blank" rel="noopener noreferrer">Click Here</a></p>
                    </div>
                </div>

                <div style={styles.projectContainer}>
                    <div style={styles.projectTop}>
                        <h3><u>SINCGARS Streaming</u></h3>
                        <p>Sinc. Streaming is a simple, yet highly adaptable radio streaming app. Built with React, with database support from MongoDB, Sinc. Streaming can utilize any streaming URL and play it. A user can create an account, pick favorite stations, and listen for hours to their customized content.</p>
                    </div>
                    <div style={styles.projectImgSection}>
                        <img src={sincgarsLogo} style={styles.projectImg} alt="SINCGARS Streaming landing page logo" />
                    </div>
                    <div style={styles.projectBottom}>
                        <ul className="project-listItems">
                            <li>Full Stack Web app that plays streaming radio channels</li>
                            <li>React used for Front-End</li>
                            <li>Single Page Application</li>
                        </ul>
                        <p>Website: <a href="https://github.com/doc1atis/RadioApp" target="_blank" rel="noopener noreferrer">SINCGARS Streaming</a></p>
                        <p>Github Repo: <a href="https://github.com/doc1atis/RadioApp" target="_blank" rel="noopener noreferrer">Click Here</a></p>
                    </div>
                    <div style={styles.projectImgSection}>
                        <img src={sincgarsLogo} style={styles.projectImg} alt="SINCGARS Streaming landing page logo" />
                    </div>
                </div>

                <img src={brindleProjects} alt="Bitnoji of brindle working on a project" />
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
    projectContainer: {
        height: '120vh',
        width: '98%',
        display: 'grid',
        gridTemplateRows: '35% 30% 35%',
        gridTemplateColumns: '100%',
        border: '1px solid black',
        margin: '0 0 10vh 0',
        borderRadius: '5px',
        backgroundImage: 'linear-gradient(to right bottom, lightgray, rgba(255,255,255,0.3))'
    },
    projectTop: {
        gridArea: '1 / 1 / span 1 / span 1',
        padding: '0 2vw 0 2vw'
    },
    projectImgSection: {
        gridArea: '2 / 1 / span 1 / span 1'
    },
    projectImg: {
        height: '100%',
        width: '100%'
    },
    projectBottom: {
        gridArea: '3 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}