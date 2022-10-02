
import './App.css';

import AddUser from "./components/AddUser";
import Navbar from "./components/navbar";
import CrudApp from "./components/CrudApp";
import AllUsers from "./components/AllUsers";
import{ Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div>
    
    <Router>
    <Navbar />
      <Routes>
      <Route path='/add'>
        <AddUser/> 
      </Route>
      
      <Route path='/all'>
        <AllUsers />
      </Route>
      <Route path='/'>
        <CrudApp />
      </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
