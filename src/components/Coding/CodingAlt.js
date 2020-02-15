import React, { Component } from 'react';
import brindleCoding from '../../images/brindle-coding.png';
import mernStackLogo from '../../images/mernStackLogo.jpg';

export default class CodingAlt extends Component {
    render() {
        return (
            <div>
                <div style={styles.main}>
                    <div style={styles.centerTitle}>
                        <h1 style={{ fontSize: '3em' }}>Coding Stack</h1>
                    </div>
                    <div style={styles.centerContent}>
                        <img src={mernStackLogo} style={styles.mernImg} alt="MERN coding stack logo" />

                        <p style={styles.mernDescription}><b>MERN</b> Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.</p>

                        <p style={styles.mernDescription}>Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.</p>


                        <h1 style={styles.codeTitle}>MongoDB:</h1>
                        <p style={styles.codePara}>"MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era."</p>

                        <p style={styles.codePara}>What I like about MongoDB is that it is not a relational database. Typical SQL databases organize their data into tables and rows. I feel this can be constricting when you are trying to create a database to serve your exact needs. MongoDB, instead, organizes its data into JSON document, making querying the data much more dynamic.</p>



                        <h1 style={styles.codeTitle}>Express:</h1>
                        <p style={styles.codePara}>"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."</p>

                        <p style={styles.codePara}>Express.js makes routing quite simple. When making GET, POST, or any other kind of XML request, Express allows for responding to client requests a breeze. In addition, Express allows me to easily use Middleware, a function carried out before data is returned to the client, to ensure whatever XML request being made is carried out with extreme precision.</p>



                        <h1 style={styles.codeTitle}>React:</h1>
                        <p style={styles.codePara}>"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."</p>

                        <p style={styles.codePara}>React is all about putting the user experience first. By loading and switching out components rather than making an entirely new request to a server to display content, React provides a cleaner, seamless, and overall more pleasant user experience.</p>



                        <h1 style={styles.codeTitle}>Node.js:</h1>
                        <p style={styles.codePara}>"Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."</p>

                        <p style={styles.codePara}>Node allows me to work with CRUD (Create, Read, Update, Delete) apps in a much more manageable way.</p>
                    </div>
                    <div style={styles.imgArea}>
                        <img src={brindleCoding} style={styles.rightImg} alt="Bitmoji of Brindle at coding at a laptop" />
                    </div>
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
        gridTemplateRows: '10% 15% 70% 5%'
    },
    centerTitle: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 2 / span 1 / span 1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerContent: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '3 / 2 / span 1 / span 1',
        overflowY: 'scroll'
    },
    mernImg: {
        height: '60%',
        width: '80%',
        margin: '5vh 5vw 0 5vw',
        borderRadius: '5px'
    },
    codeTitle: {
        alignSelf: 'start',
        textDecoration: 'underline',
        margin: '4vh 0 2vh 0'
    },
    codePara: {
        alignSelf: 'start',
        margin: '0vh 0 4vh 0',
        fontSize: '1.3em'
    },
    imgArea: {
        display: 'flex',
        gridArea: '1 / 3 / span 3 / span 1',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rightImg: {
        width: '75%',
        height: '40%',
        margin: '0 3% 0 0'
    },
}