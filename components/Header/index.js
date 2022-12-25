import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { FaCross, FaFacebook, FaInstagram, FaLinkedin, FaList, FaTimes, FaTwitter } from "react-icons/fa";
import { Data } from '../../public/Data';
const Header = () => {
    const {asPath}=useRouter();
    const [isMobile,setIsMobile] = useState(false)
    const {aboutMe,icons} = Data;
    return (
        <header id="header" className={asPath!=='/'?'header-top':''}>
            <div className="container">
                <h1><Link href="/">Chhotu Sow</Link></h1>
                {/* Uncomment below if you prefer to use an image logo navbar-mobile  bi mobile-nav-toggle bi-x */}
                {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
                <h2>I'm a passionate <span>Software Engineer</span> from Bihar,India.</h2>
                <nav id="navbar" className={`navbar ${isMobile?'navbar-mobile':''}`}>
                    <ul>
                        <li onClick={()=>setIsMobile(false)}><Link href="/" className={asPath==='/'?'active':''}>Home</Link></li>
                        <li onClick={()=>setIsMobile(false)}><Link href="/about" className={asPath==='/about'?'active':''}>About</Link></li>
                        <li onClick={()=>setIsMobile(false)}><Link href="/resume" className={asPath==='/resume'?'active':''}>Resume</Link></li>
                        <li onClick={()=>setIsMobile(false)}><Link href="/services" className={asPath==='/services'?'active':''}>Services</Link></li>
                        <li onClick={()=>setIsMobile(false)}><Link href="/portfolio" className={asPath==='/portfolio'?'active':''}>Portfolio</Link></li>
                        <li onClick={()=>setIsMobile(false)}><Link href="/contact" className={asPath==='/contact'?'active':''}>Contact</Link></li>
                    </ul>
                    {isMobile?<FaTimes className="bi mobile-nav-toggle bi-x" onClick={()=>setIsMobile(!isMobile)}/>:<FaList onClick={()=>setIsMobile(!isMobile)} className="bi bi-list mobile-nav-toggle" />}
                </nav>{/* .navbar */}
                <div className="social-links">
                    <a className="twitter" target="_blank" href={aboutMe.twitter} rel="noopener noreferrer"><FaTwitter /></a>
                    <a className="facebook" target="_blank" href={aboutMe.facebook} rel="noopener noreferrer">
                        <Image src={icons.facebookIcon} height={30} width={30}/>
                    </a>
                    <a className="instagram" target="_blank" href={aboutMe.instagram} rel="noopener noreferrer"><FaTwitter /></a>
                    <a className="linkedin" target="_blank" href={aboutMe.linkedin} rel="noopener noreferrer"><FaTwitter /></a>
                    {/* <a href="#" className="facebook"><FaFacebook /></a>
                    <a href="#" className="instagram"><FaInstagram /></a>
                    <a href="#" className="linkedin"><FaLinkedin /></a> */}
                </div>
            </div>
        </header>
    )
}

export default Header
