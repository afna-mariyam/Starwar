// import logo from './logo.svg';
// import './App.css';
import { Routes, Route , BrowserRouter as Router} from "react-router-dom";
import HomePage from './components/HomePage';
import Planets from './components/Planets';
import SpaceShip from './components/SpaceShip';
import People from './components/People';
import Vehicle from './components/Vehicle';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/planets" element={<Planets/>} />
        <Route exact path="/spaceship" element={<SpaceShip/>} />
        <Route exact path="/people" element={<People/>} />
        <Route exact path="/vehicle" element={<Vehicle/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
