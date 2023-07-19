import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Swipers from "./components/portfolio/swiper";

const App = () => {
    return (
        <>
            <Header/>
            <Nav />
            <About />
            <Skills />
            <Swipers />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
