import React, { Component } from 'react';
import brindleProjects from '../../images/brindle-projects.png';
import tfsProjectImg from '../../images/tfsProjectImg.png';
import sincgarsLogo from '../../images/sincgarsLogo.png';

export default class Projects extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.centerTitle}>
                    <h1 style={styles.title}>Projects</h1>
                </div>

                <div style={styles.centerContent}>
                    <div style={styles.projectContainer}>
                        <div style={styles.projectTextTop}>
                            <h3><u>Tales from Swiftfell</u></h3>
                            <p>TFS is a fantasy role-playing game built in the style of a classic 16bit console video game. TFS uses the latest RPG Maker MV software, a development tool which utilizes Javascript that is simple enough for a child, but powerful enough for a developer. TFS is designed to run directly from your web browser, meaning no downloads, no installations, just adventure!</p>
                        </div>
                        <div style={styles.projectTextBottom}>
                            <ul className="project-listItems">
                                <li>Full Stack Web app; game runs entirely in browser</li>
                                <li>EJS / Javascript Coding for Front-end</li>
                                <li>Database maintained with MongoDB</li>
                            </ul>
                            <p>Website: <a href="http://tfs-chapter1.herokuapp.com" target="_blank">Tales from Swiftfell</a></p>
                            <p>Github Repo: <a href="https://github.com/cbrindle/tales-from-swiftfell" target="_blank">Click Here</a></p>
                        </div>
                        <div style={styles.projectImgSection}>
                            <img src={tfsProjectImg} style={styles.projectImg} alt="Webpage landing image for Tales from Swiftfell" />
                        </div>
                    </div>


                    <div style={styles.projectContainer}>
                        <div style={styles.projectTextTop}>
                            <h3><u>SINCGARS Streaming</u></h3>
                            <p>Sinc. Streaming is a simple, yet highly adaptable radio streaming app. Built with React, with database support from MongoDB, Sinc. Streaming can utilize any streaming URL and play it. A user can create an account, pick favorite stations, and listen for hours to their customized content.</p>
                        </div>
                        <div style={styles.projectTextBottom}>
                            <ul className="project-listItems">
                                <li>Full Stack Web app that plays streaming radio channels</li>
                                <li>React used for Front-end</li>
                                <li>Single Page Application</li>
                            </ul>
                            <p>Website: <a href="https://github.com/doc1atis/RadioApp" target="_blank">SINCGARS Streaming</a></p>
                            <p>Github Reop: <a href="https://github.com/doc1atis/RadioApp" target="_blank">Click Here</a></p>
                        </div>
                        <div style={styles.projectImgSection}>
                            <img src={sincgarsLogo} style={styles.projectImg} alt="Webpage landing image for SINCGARS Streaming app" />
                        </div>
                    </div>
                </div>
                <div style={styles.imgArea}>
                    <img src={brindleProjects} style={styles.rightImg} alt="Bitmoji of Brindle at a desk, developing projects" />
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
        gridTemplateRows: '10% 15% 75% 5%'
    },
    centerTitle: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        alignItems: 'center'
    },
    centerContent: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '3 / 2 / span 1 / span 1',
        alignItems: 'center',
        overflowY: 'scroll'
    },
    title: {
        fontSize: '3em',
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 3 / span 3 / span 1',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rightImg: {
        width: '85%'
    },
    constructionImg: {
        height: '70%',
        width: '60%'
    },
    projectContainer: {
        height: '80vh',
        width: '98%',
        display: 'grid',
        gridTemplateRows: '50% 50%',
        gridTemplateColumns: '40% 60%',
        margin: '0 0 10vh 0',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundImage: 'linear-gradient(to bottom right, lightgray, rgba(255,255,255,0.3))'
    },
    projectTextTop: {
        gridArea: '1 / 1 / span 1 / span 2',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 2vw 0 2vw',
        fontSize: '1.3em',
        borderBottom: '2px dotted black'
    },
    projectTextBottom: {
        gridArea: '2 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: '2px dotted black'
    },
    projectImgSection: {
        gridArea: '2 / 2 / span 1 / span 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    projectImg: {
        height: '100%',
        width: '100%'
    }
}