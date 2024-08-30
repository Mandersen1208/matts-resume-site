import React, { useEffect, useState } from "react";
import Navbar from "./base-components/Navbar/navbar";
import Home from "./base-components/home/Home";
import { backgroundImage } from "./Assets";
import Introduction from "./base-components/home/introduction";
import WelcomeBanner from "./base-components/Navbar/WelcomBanner";
import Footer from "./base-components/Footer/footer";
import "./App.css"; // Ensure you have the CSS file imported

function App() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const applicationBackground = {
    background: `rgba(255, 255, 255, 0.5) url(${backgroundImage})`,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  return (
    <div className="App" style={applicationBackground}>
      <WelcomeBanner />
      <Navbar />
      <Home />
      <div className="introduction-container">
        <Introduction />
      </div>
      <Footer className={isFooterVisible ? "footerVisible" : ""} />
    </div>
  );
}

export default App;