import React, { Component } from 'react'

export default class CodingMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <p>CODING MOBILE</p>
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
    }
}