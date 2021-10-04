import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

import Course from './components/Course/Course';
import React from "react";
import { BrowserRouter as Router,Switch, Route, Link
} from "react-router-dom";
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Servicepart/Service';
import Contact from './components/Contact/Contact';
import NotFound from './components/Notfound/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App"  >
      <Router>
     
        <Header></Header>
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/course">
            <Course></Course>
          </Route>
          
          <Route path="/details">
        <Details></Details>
          </Route>
          <Route path="/about">
        <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound>

            </NotFound>
          </Route>
       

         
        </Switch>
        <Footer></Footer>
      </Router>
      





      {/* <Header></Header>
  <Course></Course> */}
    </div>
  );
}

export default App;
