import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import mountains from '../../images/mountains.jpeg';

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
                        <FaWindowClose id="showTravel" size={32} style={styles.closeButton} onClick={this.props.closeModal} />
                        <div style={styles.imgArea}>
                            <img src={mountains} style={styles.travelImage} alt="An apple blossom tree with a snow capped mountain in the background" />
                        </div>
                        <div style={styles.topText}>
                            <p>I found myself stationed in Vicenza, Italy during the last four years of my enlistment in the US Army. This northern Italian locale was essentially a central hub for me to the rest of Europe, perfect for exploration. I was able to experience the sites, cultures, and cuisine of many different nations, including Germany, France, Poland, Prague, Czech Republic, Croatia, Japan, Thailand, Budapest, and many more.</p>
                        </div>
                        <div style={styles.bottomText}>
                            <p>What I enjoyed most about travel is the exposure to different people and cultures. Getting a chance to see the world through another individual's perspective and way of live has shaped me into someone who takes into account empathy of others when determining a solution to a problem.</p>
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
    travelImage: {
        height: '100%',
        width: '100%'
    },
    closeButton: {
        position: 'absolute',
        left: '95%',
        cursor: 'pointer'
    }
}