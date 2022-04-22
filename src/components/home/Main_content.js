import React from "react";
import interactive from '../../images/desktop/image-interactive.jpg'



export const MainContent = () => {
    return (
        <div className="main-content">

            <div className="main-content__img-box">
                <img alt='interactive with vr' className="main-content__img-box--img" src={interactive} />
            </div>


            <div className="main-content__content">
                <h2 className="main-content__content--title">The Leader in interactive VR</h2>
                <p className="main-content__content--subtext">  Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
            </div>
        </div>
    )
}