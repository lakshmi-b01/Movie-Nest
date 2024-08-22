import React from "react";
import '../styles.css'

export default function Header(){
    return(
        <div className="header">
            <img className='logo' src='ticketlogo.png' alt="movie nest" />
            <h2>It's time for popcorn! Find your next movie here</h2>
        </div>
    );
}