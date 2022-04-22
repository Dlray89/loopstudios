import React from "react";
import { Navigation } from "../Nav/Nav";



export const HomeHeader = () => {
    return (
        <div className="home-header">
            <Navigation />
            <div className="home-header__content">
                Immersive Experiences That Deliver
            </div>
        </div>
    )
}