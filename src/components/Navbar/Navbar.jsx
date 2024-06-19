import React from 'react';
import { Link } from 'react-router-dom';
import chatIcon from "../../assets/icon-chat1.svg";
import phoneIcon from "../../assets/icon-phone1.svg";
import logo from "../../assets/instaastro-logo.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="header">
                <div class="main-logo">
                    <Link to=" / ">
                        <img alt="InstaAstro Logo" src={logo} />
                    </Link>
                </div>
                <div className="auth-buttons">
                    <Link className="contact-btn" to=" /chatwithastrologer/ " onclick={() => { }}>
                        <img alt="Chat_icon_img" src={chatIcon} />Chat with Astrologer
                    </Link>
                    <Link className="contact-btn" to=" /chatwithastrologer/ " onclick={() => { }}>
                        <img alt="Chat_icon_img" src={phoneIcon} />Talk with Astrologer
                    </Link>
                    <Link className="sign-up" to=" /chatwithastrologer/ " onclick={() => { }}
                    >Sign Up
                    </Link>
                </div>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/kundli">Kundli</Link>
                <Link to="/matchmaking">Matchmaking</Link>
                <Link to="/horoscope">Horoscope</Link>
                <Link to="/live">Live</Link>
                <Link to="/panchang">Panchang</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/resource">Resource</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </>
    );
};

export default Navbar;
