import React, { Component } from 'react';
import ReactModal from 'react-modal';
import codeImmersivesLogo from '../../images/codeImmersivesLogo.png';

export default class CodeImmersives extends Component {
    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.props.open}
                    style={{
                        overlay: {
                            top: 25,
                            left: 150,
                            bottom: 25,
                            right: 150,
                            backgroundColor: 'rgba(0,0,0,0.3)'
                        }
                    }}
                >
                    <div style={styles.main}>
                        <div style={styles.title}>
                            <h1> Code Immersives</h1>
                        </div>
                        <div style={styles.contentLeft}>
                            LEFT
                        </div>
                        <div style={styles.contentRight}>
                            RIGHT
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        gridTemplateRows: '20% 80%',
        gridTemplateColumns: '50% 50%',
        height: '100%',
        width: '100%',
        backgroundImage: `url(${codeImmersivesLogo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    title: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 2',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5em'
    },
    contentLeft: {
        display: 'flex',
        gridArea: '2 / 1 / span 1 / span 1'
    },
    contentRight: {
        display: 'flex',
        gridArea: '2 / 2 / span 1 / span 1'
    }
}