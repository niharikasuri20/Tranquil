import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mood from "./components/Mood";
import Skincare from "./components/Skincare";
import Journal from "./components/Journal";
import Reading from "./components/Reading";
import Offer from "./components/Offer";
import Media from "./components/Media";
import Meditation from "./components/Meditation";
import ScrollToTop from "./components/Scrolltotop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <ScrollToTop/>
      <Routes>
        
        <Route exact path="/mood" element={<Mood />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skin" element={<Skincare />}/>
        <Route exact path="/Journal" element={<Journal />}/>
        <Route exact path="/Reading" element={<Reading/>}/>
        <Route exact path="/Offer" element={<Offer/>}/>
        <Route exact path="/Media" element={<Media/>}/>
        <Route exact path="/Meditation" element={<Meditation/>}/>
      </Routes>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
