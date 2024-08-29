import "./App.css";
import Navbar from "./base-components/Navbar/navbar";
import Home from "./base-components/home/Home";
import { backgroundImage } from "./Assets";
import Introduction from "./base-components/home/introduction";
import WelcomeBanner from "./base-components/Navbar/WelcomBanner";

function App() {
  const applicationBackground = {
    background: `rgba(255, 255, 255, 0.5) url(${backgroundImage})`,
    display: "flex",};

  return (
    
    <div className="App" style={applicationBackground}>
      <WelcomeBanner />
      <Navbar/>
        <Home />
      <div className="introduction-container">
        <Introduction />
      </div>
    </div>
  );
}

export default App;