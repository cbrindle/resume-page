import React, { Component } from 'react';
import ReactModal from 'react-modal';
import rugbyTackle from '../../images/rugbyTackle.jpg';
import rugbyBG from '../../images/rugbyBG.jpg';

export default class Rugby extends Component {
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
                        {/* Rugby Image */}
                    </div>
                    <div style={styles.topText}>
                        <p><p>Founded in the Fall of 1974, by Boston College Alumni Jerry Rotella and Hank Hanson, together with a contingent of local novices wearing uniforms of blue and orange, Union County Rugby Football Club finished its inaugural season 5-0-1. The mission of this Club is to continue this tradition of excellence and advance the sport of rugby to any and all that have a desire to join the Club regardless of race, sex, religion, color, creed, social standing, sexual orientation or physical ability.</p></p>
                    </div>
                    <div style={styles.bottomText}>
                        <p>Up my return from Afghanistan in the spring of 2012, I was introduced to the game of Rugby by a couple of Army buddies. After my first practice, I was hooked. I spent the next two years playing for the Caserma Ederle Rugby Football Club in Vicenza, Italy. During that time, I got a chance to play against a few local Italian teams as well as participate in two international Beach Rugby tournaments for Spain and Fiji.</p>

                        <p>When I moved back to New Jersey, I quickly linked up with Union County Rugby Football club, the Mud Turtles. I was able to meet a group of outstanding individuals who embodied the tenants of rugby: commitment to excellence, comradery, and BEER! I was able to improve my skills and travel throughout the tri-state area competing against other club teams.</p>
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
        backgroundImage: `url(${rugbyBG})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontWeight: 'bold',
        fontSize: '1.2em'
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        backgroundImage: `url(${rugbyTackle})`,
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