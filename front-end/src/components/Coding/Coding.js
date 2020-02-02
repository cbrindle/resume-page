import React, { Component } from 'react'
import brindleCoding from '../../images/brindle-coding.png';


export default class Coding extends Component {
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.center}>
                    <h1 style={styles.title}>Coding Stack</h1>
                </div>

                <div style={styles.imgArea}>
                    <img src={brindleCoding} style={styles.rightImg} alt="Bitmoji of Brindle at coding at a laptop" />
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
        width: '75%',
        height: '40%',
        margin: '0 3% 0 0'
    }
}
