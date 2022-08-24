import React from "react";
import Header from "./containers/Header";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
