import React, { Component } from 'react';
import Freelance from './Freelance';
import Army from './Army';
import TagHeuer from './TagHeuer';
import SIS from './SIS';
import brindleCoffee from '../../images/brindle-coffee.png';


export default class WorkExp extends Component {

    state = {
        job: '',
        freelance: true,
        sis: false,
        army: false,
        tag: false
    }

    showJob = (event) => {
        const data = event.target.id;
        this.setState({
            [data]: !this.state[data]
        })
    }

    render() {
        return (
            <>
            <div style={styles.main}>
                <div style={styles.center}>
                    <h1 style={styles.title}>Work Experience</h1>
                    <br />
                    <h2 id="freelance" style={styles.jobClick} onClick={this.showJob}>--- Full-Stack Web Developer ---</h2>
                        {this.state.freelance ?
                        <Freelance />
                        :
                        ''
                        }
                    
                    <h2 id="sis" style={styles.jobClick} onClick={this.showJob}>--- Security Operations Supervisor ---</h2>
                        {this.state.sis ?
                        <SIS />
                        :
                        ''
                        }

                    <h2 id="army" style={styles.jobClick} onClick={this.showJob}>--- Infantry Paratrooper ---</h2>
                        {this.state.army ?
                        <Army />
                        :
                        ''
                        }

                    <h2 id="tag" style={styles.jobClick} onClick={this.showJob}>--- E-Learning Administrator ---</h2>
                        {this.state.tag ?
                        <TagHeuer />
                        :
                        ''
                        }
                </div>
                <div style={styles.imgArea}>
                    <img style={styles.rightImg} src={brindleCoffee} alt='' />
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        height: '100vh',
        width: '85vw',
        gridTemplateColumns: '10% 60% 30%',
        gridTemplateRows: '10% 85% 5%',
        overflowY: 'scroll'
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        alignItems: 'center',
        overflowY: 'scroll'
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 3 / span 3 / span 1',
        alignItems: 'center'
    },
    title: {
        fontSize: '3em'
    },
    jobClick: {
        cursor: 'pointer',
        fontWeight: '300',
    },
    rightImg: {
        width: '100%'
    }
}