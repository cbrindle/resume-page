import React, { Component } from 'react'

export default class NavLinks extends Component {
    render() {
        return (
            <>
            <div style={styles.main}>
                NavLinks
                <br />
                    NavLinks
                <br />
                    NavLinks
                <br />
                    NavLinks
                <br />
                    NavLinks
                <br />
                    NavLinks
                <br />
                    NavLinks
                <br />
            </div>
            </>
        )
    }
}


const styles = {
    main: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
}