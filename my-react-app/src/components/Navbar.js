import React from 'react';

const styles = {
    card: {
        margin: 5,
        background: 'black',
        display: 'flex',
        justifyContent: 'center',

    },
    heading: {
        minHeight: 8,
        fontSize: 16,
        color: 'white',
        padding: '0 20px',
    },
};

function Navbar() {
    return (
        <div style={styles.card}>
            <div style={styles.heading}>Home</div>
            <div style={styles.heading}>About Me</div>
            <div style={styles.heading}>Projects</div>
            <div style={styles.heading}>Contact</div>
            <div style={styles.heading}>Resume</div>
        </div>
    );
}

export default Navbar;