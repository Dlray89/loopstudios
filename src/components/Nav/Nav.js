

import React, { useState } from "react";
import Logo from '../../images/logo.svg'
import HamburgerIcon from '../../images/icon-hamburger.svg'
import CloseIcon from '../../images/icon-close.svg'



const navList = [
    { name: 'About' },
    { name: 'Career' },
    { name: 'Events' },
    { name: 'Products' },
    { name: 'Support' },
]

export const Navigation = () => {
    const [openMobileNav, SetOpenMobileNav] = useState(false)

    const openNav = () => SetOpenMobileNav(true)
    const closeNav = () => SetOpenMobileNav(false)


    return (
        <>

            {openMobileNav ? (<>
                <div className="nav__mobile-nav">

                    <div className="nav__mobile-nav__mobile-box">
                        <div className="nav__mobile-nav__mobile-box__logo-box-img">
                            <img alt='logo' className="nav__mobile-nav__mobile-box__logo-box-img--img" src={Logo} />
                        </div>


                        <div className="nav__mobile-nav__mobile-box__cancel-btn">
                            <button onClick={closeNav} className="nav__mobile-nav__mobile-box__cancel-btn--btn">
                                <img src={CloseIcon} />
                            </button>
                        </div>
                    </div>


                    <div className="nav__mobile-nav__links-box">
                        <div className="nav__mobile-nav__links-box__links">
                            {navList.map(link => (
                                <a className="nav__mobile-nav__links-box--link">{link.name}</a>
                            ))}
                        </div>
                    </div>

                </div>

            </>) : (<>

                <div className="nav">
                    <div className="nav__logo-box-img">
                        <img alt='logo' className="nav__logo-box-img--img" src={Logo} />
                    </div>

                    <div className="nav__links-box">
                        {navList.map(link => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a className="nav__links-box--link" href="#">{link.name}</a>
                        ))}
                    </div>

                    <div className="nav__links-box-mobile">
                        <button onClick={openNav} className="nav__links-box-mobile__btn">
                            <img src={HamburgerIcon} alt='mobile menu icon' />
                        </button>
                    </div>

                </div>

            </>)}


        </>

    )
}