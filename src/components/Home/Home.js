import React, { Component } from 'react';
import brindleHi from '../../images/brindle-hi.png';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';

export default class Home extends Component {

    state = {
        notBottom: false
    }

    bottomCheck = () => {
        const area = document.querySelector(`#scrollArea`);
        const areaA = area.scrollTop;
        const areaB = area.scrollHeight - area.clientHeight;
        const areaC = areaA / areaB;
        console.log(areaC);
        if (areaC > 0.9) {
            this.setState({
                notBottom: true
            })
        } else {
            this.setState({
                notBottom: false
            })
        }
    }

    render() {
        return (
            <div style={styles.main}>
                <div style={styles.centerArea}>
                    <div style={styles.centerTop}>
                        <p>Christopher Brindle</p>
                    </div>
                    <div style={styles.centerMiddle}>
                        <p>Full-Stack Web Developer</p>
                    </div>
                    <div id="scrollArea" onScroll={this.bottomCheck} style={styles.centerBottom} >
                        <br />
                        <p>I learned early on in life that amateurs work at something until they get it right; professionals will work at it until they can't get it wrong.</p>

                        <p>After spending 11 years in the United States Army as an Infantry Paratrooper, with combat deployments to  both Iraq and Afghanistan, I was looking to start a new chapter of my life. While earning my BA in Criminal Justice, I was able to maintain a 4.0 GPA and work part-time for TAG Heuer as an E-Learning Administrator / Data Analysis. I continued my education by enrolling in Code Immersives NYC, an 11 month Web Development program that teaches modern development techniques and standards of practice that go well beyond a typical, 12-week "boot-camp."</p>

                        <p>What I love most about Web Development is the ability to solve problems in a creative, and almost artistic, manner. The sense of satisfaction one gets from being able to transform a basic concept into a full-fledged, tangible product is one that keeps me motivated and always looking to learn more.</p>

                        <p>What I offer is a modern understanding of not only the core elements of Web Development but the importance of User Interface and Experience. Bottom line, if your product looks lack-luster or is difficult to navigate, no one will care how fancy your code is on the back-end. I always ask myself, "Is this something I would want to use" when working on any project.</p>

                        <p>To see more, please feel free to follow the link to my Github to have a look at what I'm working on, or email me anytime.</p>
                        {!this.state.notBottom ? <FaArrowAltCircleDown size={32} style={styles.showArrow} /> :
                        <FaArrowAltCircleUp size={32} style={styles.showArrow} />}
                    </div>
                </div>
                <div style={styles.rightArea}>
                    <img src={brindleHi} alt='' style={styles.rightImg} />
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
        gridTemplateRows: '5% 85% 10%',
        gridTemplateColumns: '10% 60% 30%'
    },
    centerArea: {
        display: 'grid',
        gridArea: '2 / 2 / span 1 / span 1',
        gridTemplateRows: '20% 10% 70%',
        gridTemplateColumns: '100%'
    },
    centerTop: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3em'
    },
    centerMiddle: {
        display: 'flex',
        gridArea: '2 / 1 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4em',
        fontStyle: 'italic'
    },
    centerBottom: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '3 / 1 / span 1 / span 1',
        alignItems: 'center',
        overflowY: 'scroll',
        fontSize: '1.2em'
    },
    rightArea: {
        display: 'flex',
        gridArea: '1 / 3 / span 3 / span 1',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rightImg: {
        height: '50%',
        width: '85%'
    },
    showArrow: {
        position: 'absolute',
        top: '87%'
    }
}