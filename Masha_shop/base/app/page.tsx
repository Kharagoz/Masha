import CategorySection from "@/components/modules/MainPage/Categories/Categories";
import Hero from "@/components/modules/MainPage/Hero/Hero";
import {HeroSection} from "@/components/modules/MainPage/Hero/Hero-context";
import PhraseSection from "@/components/modules/MainPage/Phrase/Phrase";
import React from "react";

const MainPage = () => {
    return (
        <main>
            <Hero />
            <HeroSection />
            <CategorySection />
            <PhraseSection />
        </main>
    );
}

export default MainPage;
