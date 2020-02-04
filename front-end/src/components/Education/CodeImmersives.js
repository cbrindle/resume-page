import React, { Component } from 'react';

export default class CodeImmersives extends Component {

    componentDidMount = () => {
        
    }


    render() {
        return (
            <>
            <div style={styles.main}>
                <h1>Code Immersives</h1>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        position: 'absolute',
        zIndex: 5,
        height: '85vh',
        width: '75vw',
        margin: 'auto',
        overflowY: 'scroll',
        backgroundColor: 'white',
        margin: '10vh 0 0 5vw'
    }
}