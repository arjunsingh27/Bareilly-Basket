import React from "react";
import Header from "./component/navbar/Header.jsx";
import Home from "./component/Home/Home.jsx";
import Products from "./product/Products.jsx";
import Checkout from "./Checkout.jsx";
import Contactus from "./Contactus/Contactus.jsx";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopHeadline from "./TopHeadline.jsx";
const App = () => {
  const AppContainer = styled.div`
    text-align: center;
  `;

  return (
    <AppContainer>
      <Router>
        <div className="App">
          <TopHeadline />
          <Header />


          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>

          <Switch>
        <Route path="/Products">
            <Products />
          </Route>
        </Switch>

        <Switch>
        <Route path="/Contactus">
            <Contactus/>
          </Route>
        </Switch>

        <Switch>
        <Route path="/Checkout">
        <Checkout />
          </Route>
        </Switch>
        </div>
      </Router>
    </AppContainer>
  );
};

export default App;
