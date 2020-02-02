import React, { Component } from 'react';
import Freelance from './Freelance';
import Army from './Army';
import TagHeuer from './TagHeuer';
import SIS from './SIS';
import brindleCoffee from '../../images/brindle-coffee.png';


export default class WorkExp extends Component {

    state = {
        job: ''
    }

    showJob = (event) => {
        if (this.state.job === event.target.innerText) {
            this.setState({
                job: ''
            })
        } else {
            this.setState({
                job: event.target.innerText
            })
        }
    }

    render() {
        const showMe = true
        return (
            <div style={styles.main}>
                <div style={styles.center}>
                    <h1 style={styles.title}>Work Experience</h1>
                    <br />
                    <h3 style={styles.jobClick} onClick={this.showJob}>Full-Stack Web Developer</h3>
                        {this.state.job === 'Full-Stack Web Developer' ?
                        <Freelance />
                        :
                        ''
                        }
                    
                    <h3 style={styles.jobClick} onClick={this.showJob}>Security Operations Supervisor</h3>
                        {this.state.job === 'Security Operations Supervisor' ?
                        <SIS />
                        :
                        ''
                        }

                    <h3 style={styles.jobClick} onClick={this.showJob}>Infantry Paratrooper</h3>
                        {this.state.job === 'Infantry Paratrooper' ?
                        <Army />
                        :
                        ''
                        }

                    <h3 style={styles.jobClick} onClick={this.showJob}>E-Learning Administrator</h3>
                        {this.state.job === 'E-Learning Administrator' ?
                        <TagHeuer />
                        :
                        ''
                        }
                </div>
                <div style={styles.imgArea}>
                    <img style={styles.rightImg} src={brindleCoffee} alt='' />
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        height: '100vh',
        width: '85vw',
        gridTemplateColumns: '10% 60% 30%',
        gridTemplateRows: '10% 85% 5%'
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        alignItems: 'center'
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
        cursor: 'pointer'
    },
    rightImg: {
        width: '100%'
    }
}