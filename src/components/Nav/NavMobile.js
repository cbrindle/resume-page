import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';

export default class NavMobile extends Component {

    state = {
        showMenu: false
    }

    openMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        return (
            <>
                <div>
                    <div styles={styles.main}>
                        <div style={styles.navBar}>
                            <Menu
                                left
                                isOpen={this.state.showMenu}
                                width={'60%'}
                                // customBurgerIcon={<FaBars size={32} />}
                                styles={menuStyles}
                                bubble
                            >
                                <a id="Home" className="menu-item" style={styles.linkText} href="/">Home</a>
                                <a id="Education" className="menu-item" style={styles.linkText} href="/education">Education</a>
                                <a id="Work Experience" className="menu-item" style={styles.linkText} href="/work-experience">Work Experience</a>
                                <a id="Coding" className="menu-items" style={styles.linkText} href="/coding">Coding Stack</a>
                                <a id="Projects" className="menu-items" style={styles.linkText} href="/projects">Projects</a>
                                <a id="Misc" className="menu-item" style={styles.linkText} href="/misc">Misc</a>
                                <a id="Contact" className="menu-item" style={styles.linkText} href="/contact">Contact</a>
                            </Menu>
                            <p style={{ margin: '0 0 0 20vw' }}>Christopher Brindle - Full Stack Web Developer</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    main: {
        gridArea: '1 / 1 / span 1 / span 1',
        overflowY: 'visible',
    },
    navBar: {
        display: 'flex',
        height: '10vh',
        width: '100vw',
        alignItems: 'center',
        borderBottom: '3px dotted black'
    },
    menuButton: {
        margin: '0 0 0 5vw'
    },
    menuLinksArea: {
        display: 'flex',
        flexDirection: 'column',
        height: '40vh',
        backgroundColor: 'gray'
    },
    linkText: {
        fontSize: '2em',
        margin: '0 0 4vh 0',
        color: 'green'
    }
}

const menuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '5vw',
        top: '3vh'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}