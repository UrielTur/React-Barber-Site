import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import HairProducts from "./HairProducts";
// import logo from '.Images/logo-barber.png';


class App extends React.Component {

  state = {

  }



  render() {
    return (

      <div className="App">
          {/*<header className="App-header">*/}
              {/*<img src={"Images/logo-barber.png"} className="App-logo" alt="logo" /> /!* הצגת הלוגו *!/*/}
              <BrowserRouter>
              <NavLink to={"/products"} ></NavLink>

              <Routes>
                    <Route path={"/"}  element={<HomePage />}/>
                    <Route path={"/products"}  element={<HairProducts />}/>

              </Routes>
            </BrowserRouter>
          {/*</header>*/}

      </div>
    );
  }
}

export default App;
