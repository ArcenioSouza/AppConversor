import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from "react-router";

import BodyMeasure from "../components/body/bodyMeasure"
import BodyCurrency from "../components/body/bodyCurrency"
import BodyTemperature from "../components/body/bodyTemperature"
import Navbar from "../components/navbar/navbar";

const Routes = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={BodyMeasure} />
          <Route path='/Temperature' exact component={BodyTemperature} />
          <Route path='/Currency' exact component={BodyCurrency} />  
        </Switch>                 
    </BrowserRouter>
  )
}
export default Routes;