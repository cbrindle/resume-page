import React, { Component } from 'react';
import brindleCoding from '../../images/brindle-coding.png';
import mernStack from '../../images/mernStackLogo.jpg';

export default class CodingMobile extends Component {
    render() {
        return (
            <div style={styles.main}>
                <h1 style={{ textAlign: 'center' }}>
                    Coding Stack
                </h1>
                <p style={{ marginBottom: '5vh' }}>There are many different ways to write code to achieve the goals we set. Learn a little bit more about how I do business!</p>

                <img src={mernStack} style={styles.mernLogo} alt="MERN coding stack logo" />

                <p style={styles.mernDescription}><b>MERN</b> Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of namely 4 technologies: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.</p>

                <p style={styles.mernDescription}>Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies plays a big part in the development of web applications.</p>

                <h3 style={styles.codeTitle}>MongoDB:</h3>
                <p style={styles.codePara}>"MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era."</p>

                <p style={styles.codePara}>What I like about MongoDB is that it is not a relational database. Typical SQL databases organize their data into tables and rows. I feel this can be constricting when you are trying to create a database to serve your exact needs. MongoDB, instead, organizes its data into JSON documents, making querying the data much more dynamic.</p>



                <h3 style={styles.codeTitle}>Express:</h3>
                <p style={styles.codePara}>"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."</p>

                <p style={styles.codePara}>Express.js makes routing quite simple. When making GET, POST, or any other kind of XML request, Express allows for responding to client requests a breeze. In addition, Express allows me to easily use Middleware, a function carried out before data is returned to the client, to ensure whatever XML request being made is carried out with extreme precision.</p>



                <h3 style={styles.codeTitle}>React:</h3>
                <p style={styles.codePara}>"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."</p>

                <p style={styles.codePara}>React is all about putting the user experience first. By loading and switching out components, rather than making an entirely new request to a server to display content, React provides a cleaner, seamless, and overall more pleasant user experience.</p>



                <h3 style={styles.codeTitle}>Node.js:</h3>
                <p style={styles.codePara}>"Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."</p>

                <p style={styles.codePara}>Node allows me to work with CRUD (Create, Read, Update, Delete) apps in a much more manageable way.</p>

                <img src={brindleCoding} style={{ height: '30vh', width: '55vw', alignSelf: 'center' }} alt="Bitmoji of Brindle coding at a computer" />
                <p className="mobile-view-text" style={{ marginTop: '1vh' }}>You are currently viewing this page on a mobile device. Switch to a desk/laptop to see the full version.</p>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 5vw 0 5vw',
        fontSize: '1.2em',
        overflowY: 'scroll'
    },
    mernLogo: {
        height: '30%',
        width: '95%',
        margin: 'auto'
    },
    mernDescription: {
        fontSize: '1em',
        textAlign: 'center'
    },
    codeTitle: {
        alignSelf: 'start',
        textDecoration: 'underline',
        margin: '5vh 0 2vh 0'
    },
    codePara: {
        alignSelf: 'start',
        margin: '0vh 0 4vh 0',
        fontSize: '1.1em'
    }
}