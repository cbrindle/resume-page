import React, { Component } from 'react'

export default class EducationMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <p>EDUCATION MOBILE</p>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '80vh'
    }
}