import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div style={styles.main}>
                NAV BAR
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '15vw',
        border: '1px solid black'
    }
}