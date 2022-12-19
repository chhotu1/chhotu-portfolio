import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaList, FaTwitter } from "react-icons/fa";
const Header = () => {
    const {asPath}=useRouter();
    return (
        <header id="header" className={asPath!=='/'?'header-top':''}>
            <div className="container">
                <h1><Link href="/">Chhotu Sow</Link></h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
                <h2>I'm a passionate <span>Software Engineer</span> from Bihar,India.</h2>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link href="/" className={asPath==='/'?'active':''}>Home</Link></li>
                        <li><Link href="/about" className={asPath==='/about'?'active':''}>About</Link></li>
                        <li><Link href="/resume" className={asPath==='/resume'?'active':''}>Resume</Link></li>
                        <li><Link href="/services" className={asPath==='/services'?'active':''}>Services</Link></li>
                        <li><Link href="/portfolio" className={asPath==='/portfolio'?'active':''}>Portfolio</Link></li>
                        <li><Link href="/contact" className={asPath==='/contact'?'active':''}>Contact</Link></li>
                    </ul>
                    <FaList className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
                <div className="social-links">
                    <a href="#" className="twitter"><FaTwitter /></a>
                    <a href="#" className="facebook"><FaFacebook /></a>
                    <a href="#" className="instagram"><FaInstagram /></a>
                    <a href="#" className="linkedin"><FaLinkedin /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
