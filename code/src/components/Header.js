import React from "react";

function Header() {
    const styles = {
        header: {
            backgroundColor: '#151722',
            width: "100vw",
            padding: '5px',
            objectFit: 'contain',
            borderRadius: "10px",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            justifyContent: 'flex-end',
            margin: '0',
            marginBottom: '0px',
        },
        headingStyle: {
            fontSize: 100,
            color: 'lightgray',
            textAlign: 'center',
        }
    };
    return (
        <header style={styles.header} className="header">
            <h1 style={styles.headingStyle}>The Code Quiz</h1>
        </header>
    );
}

export default Header;
