import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavLinks extends Component {

    render() {
        return (
            <>
            <div style={styles.main}>
                <NavLink to='/' style={styles.hover}>About Me</NavLink>
                <NavLink to='/work-experience' style={styles.hover}>Work Experience</NavLink>
                <NavLink to='/education' style={styles.hover}>Education</NavLink>
                <NavLink to='/coding' style={styles.hover}>Coding Stack / Techniques</NavLink>
                <NavLink to='/projects' style={styles.hover}>Projects</NavLink>
                <NavLink to='/misc' style={styles.hover}>Misc</NavLink>
                <NavLink to='/contact' style={styles.hover}>Contact</NavLink>
            </div>
            </>
        )
    }
}


const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2em'
    },
    hover: {
        cursor: 'pointer',
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'none',
        padding: '10% 0 10% 0'
    }
}