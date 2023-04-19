import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Offer from './components/Offer';
import Info from './components/Info';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <Home/>
      <br/>
      <Info/>
      <h2 className="text-2xl font-bold text-gray-900">Looking for some 'Me' time? We got you!</h2>
      <Offer/>
      
    </div>
  );
}

export default App;
