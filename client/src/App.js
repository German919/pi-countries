import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Home from "./components/home/Home";
import PageCreate from './components/createActivity/pageCreate';

function App() {

  return (
    <Router>
      <div className="App">
       
          {/* <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home/>} /> */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/createActivity" component={PageCreate} />

      </div>
    </Router>
  
  );
}

export default App;
