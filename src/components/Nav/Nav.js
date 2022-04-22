import React from "react";
import Logo from '../../images/logo.svg'

const navList = [
    {name: 'About'},
    {name: 'Career'},
    {name: 'Events'},
    {name: 'Products'},
    {name: 'Support'},
]

export const Navigation = () => {
    return (
        <div className="nav">
            <div className="nav__logo-box-img">
                <img alt='logo' className="nav__logo-box-img--img" src={Logo} />
            </div>

            <div className="nav__links-box">
                {navList.map(link => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a className="nav__links-box--link" href="#">{ link.name}</a>
                ))}
            </div>
        </div>
    )
}