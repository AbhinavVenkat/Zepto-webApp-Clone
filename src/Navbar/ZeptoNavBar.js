import React, { Component } from 'react';
import "./NavBar.css"

function NavBar(){
        return (
             <div className="navBody">
                
                    <a className="w-nav-brand">
                        <img id="zeptoImg" src="https://uploads-ssl.webflow.com/60be6e42ecea08f815b762c3/60d63a5e002c46ace40429f6_logo.svg"/>
                    </a>
                    <nav id="nav-menu">
                            <a className="menu-item">Home</a>
                            <a className="menu-item">Delivery Areas</a>
                            <a className="menu-item">Careers</a>
                            <a className="menu-item">Press</a>
                            <a className="menu-item">Customer Support</a>
                    </nav>
             
             </div>
        );
    
}


export default NavBar;