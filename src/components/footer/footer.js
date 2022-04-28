import React from "react";
import logo from '../../images/logo.svg'
import FB from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import pinterest from '../../images/icon-pinterest.svg'
import twitter from '../../images/icon-twitter.svg'



const socialMediaLogos = [
    { name: 'facebook', logo: FB },
    { name: 'Instagram', logo: instagram },
    { name: 'Pinterest', logo: pinterest },
    { name: 'Twitter', logo: twitter },
]


const navLinks = [
    'About',
    'Careers',
    'Events',
    'Products',
    'Support'
]

export const Footer = () => {

    return (
        <div className="footer">

            <div className="footer__img-container">

                <div className="footer__img-container__logo-box">
                    <img className="footer__img-container__logo-box--logo" src={logo} alt='logo' />
                </div>

                <div className="footer__img-container__social-media-box">
                    {socialMediaLogos.map(link => (
                        <>
                            <img className="footer__img-container__social-media-box--icon" src={link.logo} alt={link.name} />
                        </>
                    ))}
                </div>
            </div>


            <div className="footer__links-and-copyright">
                <div className="footer__links-and-copyright__links-box">
                    {navLinks.map(link => (
                    
                            <a href="https://loopstudios-mu.vercel.app/" className="footer__links-and-copyright__links-box--link">{ link}</a>
            
                    ))}
                  
                </div>

                <p className="footer__links-and-copyright__copyright-text">Copyright 20211 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    )
}