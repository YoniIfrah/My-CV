import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Swipers from "./components/portfolio/swiper";

const App = () => {
    useEffect(() => {
        // Function to update the page title
        const handleVisibilityChange = () => {
            document.title = document.hidden ? "Looking for me?" : "Portfolio";
        };

        // Attach the event listener for visibility change
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);
    return (
        <>
            <Header />
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
