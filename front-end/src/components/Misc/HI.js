import React, { Component } from 'react';
import ReactModal from 'react-modal';
import cranford from '../../images/cranford.png';
import homeImprovement from '../../images/home-improvement.jpg';
import { FaWindowClose } from 'react-icons/fa';

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
                    <FaWindowClose id="showHI" size={32} style={styles.closeButton} onClick={this.props.closeModal} />
                    <div style={styles.imgArea}>
                        <img src={homeImprovement} style={styles.hiImage} alt="Brindle sitting outside house" />
                    </div>
                    <div style={styles.topText}>
                        <p>Closing on my home purchase was only the first chapter. On top of a number of out-dated aesthetic design choices, the home inspection during the contract process reviled a number of significant electrical issues. Half of the first floor and the entire second floor had to be gutted, removing all the old plaster and lath walls to expose and remedy the problems. The amount of work that needed to be done was quickly becoming expensive. Fortunately, I was able to get a HUGE amount of help and know-how from my father and a few of his friends. Slowly but surely, I was able to do the majority of work myself, keeping costs down and eventually transforming the house into my <i>home.</i></p>
                    </div>
                    <div style={styles.bottomText}>
                        <p>Completing such a huge undertaking filled me with an immense sense of satisfaction. I sometimes find myself sitting in my living room, looking around thinking to myself, "Wow, I made this." As my home was originally constructed in the 1920, it requires a lot of upkeep and improvements. Being able to do them myself is always a challenge, but one that comes with feelings of accomplishment.</p>
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
        justifyContent: 'center',
        padding: '0 3vw 0 3vw'
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