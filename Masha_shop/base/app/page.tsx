import CategorySection from "@/components/modules/MainPage/Categories/Categories";
import Hero from "@/components/modules/MainPage/Hero/Hero";
import HeroContext from "@/components/modules/MainPage/Hero/Hero-context";
import React from "react";

const MainPage = () => {
    return (
        <main>
            <Hero />
            <HeroContext />
            <CategorySection />
        </main>
    );
}

export default MainPage;
