import React from "react";
import {BrowserRouter as Router,Route,Switch}from "react-router-dom"
import SideMenu from "./components/sideMenu"
import Product from "./pages/Product"
import ListProducts from "./pages/ProductManagement"


const App=()=> {
  return (
    <Router>
      < SideMenu />
      <Switch>
        <Route path="/" component={ListProducts} exact />
        <Route path="/product/:id" component={Product}  />
      </Switch>
    </Router>
  );
}

export default App;
