import "./App.css";
import Navbar from "./base-components/navbar";
import Home from "./base-components/Home";
import backgroundImage from "./Assets/background.jpg";


function App() {
  const applicationBackground = {
    background: `rgba(255, 255, 255, 0.5) url(${backgroundImage})`, // Combine background color and image
    backgroundSize: "100% 125%", // Ensures the image resizes to fit the frame
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    backgroundBlendMode: "overlay", // Blends the background color and image
  };

  return (
    <div className="App" style={applicationBackground}>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
