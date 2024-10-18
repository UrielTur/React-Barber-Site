import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import HairProducts from "./HairProducts";
import NotFoundPage from "./NotFoundPage";


class App extends React.Component {

  state = {

  }


  render() {
    return (

      <div className="App">
          {/*<a href={"/products"}> Go to products page </a>*/}
          <BrowserRouter>
              {/*<NavLink style={navLinkStile} to={"/home"}>Home</NavLink>*/}
              {/*<NavLink to={"/"} ></NavLink>*/}
              <NavLink to={"/products"} ></NavLink>



              <Routes>
                    <Route path={"/"}  element={<HomePage />}/>
                    <Route path={"/products"}  element={<HairProducts />}/>
                    {/*<Route path={"*"}  element={<NotFoundPage />}/>*/}

              </Routes>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
