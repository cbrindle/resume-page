import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class Travel extends Component {
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
                    <div style={styles.imgArea}>
                        (image placeholder)
                    </div>
                    <div style={styles.topText}>
                        <p>Top Text</p>
                    </div>
                    <div style={styles.bottomText}>
                        <p>Bottom Text</p>
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
        gridTemplateRows: '50% 50%',
        gridTemplateColumns: '30% 70%',
        height: '100%',
        width: '100%',
        // backgroundImage: `url(${cranford})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontWeight: 'bold',
        fontSize: '1.2em'
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        justifyContent: 'center'
    },
    topText: {
        display: 'flex',
        gridArea: '1 / 2 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 3vw 0 3vw'
    },
    bottomText: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 1 / span 1 / span 2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hiImage: {
        height: '100%',
        width: '65%'
    },
    closeButton: {
        position: 'absolute',
        left: '95%',
        cursor: 'pointer'
    }
}