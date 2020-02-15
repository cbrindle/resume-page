import React, { Component } from 'react';
import brindleProjects from '../../images/brindle-projects.png';
import underConstruction from '../../images/underConstruction.png';


export default class Projects extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.centerTitle}>
                    <h1 style={styles.title}>Projects</h1>
                </div>

                <div style={styles.centerContent}>
                    <img src={underConstruction} style={styles.constructionImg} alt="Bitmoji of Brindle with a jackhammer doing construction on the page"/>
                    <h1>Under Construction</h1>
                    <p>Please follow <a href="https://github.com/cbrindle" target="_blank" rel="noopener noreferrer"><b>THIS LINK</b></a> to my Github page in the mean time. Thank you!</p>
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
    },
    constructionImg: {
        height: '70%',
        width: '60%'
    }
}