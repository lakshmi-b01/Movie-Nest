import React from "react";
import '../styles.css';

export default function Footer(){
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    const currYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">
                &copy; {currYear} Moviedux, All rights reserved.
            </p>
        </footer>
    );
}