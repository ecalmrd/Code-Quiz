import React from "react";

function NavBar() {
    const styles = {
        navStyle: {
            background: "#FCFBF4",
            width: "100vw",
            height: "50px",
            padding: "5px",
            objectFit: 'contain',
            borderRadius: "10px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            margin: "5px",
            marginTop: "5px",
            borderTop: "solid",
            borderBottom: "solid",
            borderColor: "#151722"
        },

        navTextAlign: {
            textAlign: "center",
        },

        navText: {
            display: "inline",
            margin: "10px",
            fontSize: 30,
            color: "black",
            listStyle: "none"
        },

        navLinkSelection: {
            background: "transparent",
            textDecoration: "none",
            color: "inherit"
        }

    };
    return (
        <nav style={styles.navStyle} className="navbar">
            <ol className="navTextContainer" style={styles.navTextAlign}>
                <li className="nav-item" style={styles.navText}>
                    <a href="/" style={styles.navLinkSelection}> Home </a>
                </li>
                <li className="nav-item" style={styles.navText}>
                    <a href="/quiz" style={styles.navLinkSelection}> Quiz </a>
                </li>
                <li className="nav-item" style={styles.navText}>
                    <a href="/about" style={styles.navLinkSelection}> About </a>
                </li>
            </ol>
        </nav>
    );
}

export default NavBar;
