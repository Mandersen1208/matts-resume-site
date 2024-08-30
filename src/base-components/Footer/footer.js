import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsFooterVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowFooter = () => {
    setIsFooterVisible(true);
  };

  return (
    <div className="content">
      <footer className={`footer ${isFooterVisible ? "footerVisible" : ""}`}>
        <div className="footerContent">
          <p>
            <a href="https://www.linkedin.com/in/matthew-andersen-b491277a/">Linked-In</a> | <a href="https://github.com/Mandersen1208">Git-Hub</a> 
             | <a href="Resume">Resume</a> | <a href="/privacy-policy">Credits for photos To Mike Rivera</a> 
          </p>
        </div>
      </footer>
      <button className="showFooterButton" onClick={handleShowFooter}>
        {isFooterVisible? <a>Show Footer</a> : null}
      </button>
    </div>
  );
};

export default Footer;