import React, { Component } from 'react';
import Freelance from './Freelance';
import Army from './Army';
import TagHeuer from './TagHeuer';
import SIS from './SIS';
import brindleCoffee from '../../images/brindle-coffee.png';
import fullStackJob from '../../images/fullStackJobMod.jpg';
import sisJob from '../../images/sisJob.png';
import armyJob from '../../images/armyJob.jpg';
import tagJob from '../../images/tagJob.jpg';


export default class WorkExp extends Component {

    state = {
        job: '',
        freelance: false,
        sis: false,
        army: false,
        tag: false
    }

    showJob = (event) => {
        const data = event.target.id
        this.setState({
            [data]: !this.state[data]
        })
    }

    closeButton = (job) => {
        this.setState({
            [job]: !this.state[job]
        })
    }

    render() {
        return (
            <>
            <div style={styles.main}>
                <div style={styles.center}>
                    <h1 style={styles.title}>Work Experience</h1>
                    <br />
                    <img id="freelance" src={fullStackJob} alt="A dog sitting at a lap top coding" onClick={this.showJob} style={styles.jobClick}/>
                    {/* <h2 id="freelance" style={styles.jobClick} onClick={this.showJob}>--- Full-Stack Web Developer ---</h2> */}
                        {this.state.freelance ?
                        <Freelance
                            closeButton={this.closeButton}
                            id={"freelance"}
                        />
                        :
                        ''
                        }
                    
                    <img id="sis" src={sisJob} alt="SIS company logo with job title" onClick={this.showJob} style={styles.jobClick} />
                        {this.state.sis ?
                        <SIS
                            closeButton={this.closeButton}
                            id={"sis"}
                        />
                        :
                        ''
                        }

                    <img id="tag" src={tagJob} alt="TAG Heuer company logo with job title" onClick={this.showJob} style={styles.jobClick} />
                        {this.state.tag ?
                        <TagHeuer
                            closeButton={this.closeButton}
                            id={"tag"}
                        />
                        :
                        ''
                        }

                    <img id="army" src={armyJob} alt="Brindle in combat uniform with job title" onClick={this.showJob} style={styles.jobClick} />
                        {this.state.army ?
                        <Army
                            closeButton={this.closeButton}
                            id={"army"}
                        />
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
        margin: '5vh 0 5vh 0'
    },
    rightImg: {
        width: '100%'
    }
}