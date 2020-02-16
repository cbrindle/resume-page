import React, { Component } from 'react'

export default class ProjectsMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <p>Projects mobile</p>
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