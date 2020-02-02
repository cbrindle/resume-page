import React, { Component } from 'react'
import brindleSchool from '../../images/brindle-school.png';


export default class Education extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.center}>
                    <h1 style={styles.title}>Education</h1>
                </div>

                <div style={styles.imgArea}>
                    <img src={brindleSchool} style={styles.rightImg} alt="Bitmoji of Brindle at school" />
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
        gridTemplateRows: '10% 85% 5%'
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        alignItems: 'center'
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
    }
}