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
                        <p>Top text</p>
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
        gridArea: '1 / 2 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomText: {
        display: 'flex',
        gridArea: '2 / 1 / span 1 / span 2',
        alignItems: 'center',
        justifyContent: 'center'
    }
}