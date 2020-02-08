import React, { Component } from 'react';
import ReactModal from 'react-modal';
import cranford from '../../images/cranford.png';
import homeImprovement from '../../images/home-improvement.jpg';

export default class HI extends Component {
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
                        {/* Home Improvement Area */}
                    </div>
                    <div style={styles.topText}>

                    </div>
                    <div style={styles.bottomText}>

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
        backgroundImage: `url(${cranford})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontWeight: 'bold',
        fontSize: '1.2em'
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        backgroundImage: `url(${homeImprovement})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    topText: {
        display: 'flex',
        textAlign: 'center',
        gridArea: '1 / 2 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 5vw 0 5vw'
    },
    bottomText: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 1 / span 1 / span 2',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '0 5vw 0 5vw'
    }
}