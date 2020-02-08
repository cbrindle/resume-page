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
                        <img src={homeImprovement} style={styles.hiImage} alt="Brindle sitting outside house" />
                    </div>
                    <div style={styles.topText}>
                        <p>Closing on my home purchase was only the first chapter. On top of a number of out-dated aesthetic design choices, the home inspection during the contract process reviled a number of significant electrical issues. Half of the first floor and the entire second floor had to be gutted, removing all the old plaster and lath walls to expose and remedy the problems.</p>
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
    }
}