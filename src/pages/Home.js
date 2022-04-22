import React from "react";
import { Footer } from "../components/footer/footer";
import { HomeHeader } from "../components/headers/Home-Header";
import { MainContent } from "../components/home/Main_content";
import { OurCreationList } from "../components/home/OurCreationList";



export const Home = () => {
    return (
        <div>
            <HomeHeader />
            <MainContent />
            <OurCreationList />
            <Footer />
        </div>
    )
}