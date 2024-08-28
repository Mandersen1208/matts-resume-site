import "./App.css";
import Navbar from "./base-components/navbar";
import Home from "./base-components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
