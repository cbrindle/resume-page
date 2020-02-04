import React, { Component } from 'react';
import ReactModal from 'react-modal';


export default class CodeImmersives extends Component {
    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.props.open}
                    style={{
                        overlay: {
                            top: 25,
                            left: 50,
                            bottom: 25,
                            right: 50,
                            backgroundColor: 'rgba(0,0,0,0)'
                        }
                    }}
                >
                    <p>TEST</p>
                </ReactModal>
            </div>
        )
    }
}
