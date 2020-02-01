import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div style={styles.main}>
                HOME PAGE
            </div>
        )
    }
}


const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '85vw'
    }
}