import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Route } from "react-router";

import BodyMeasure from "../components/body/bodyMeasure"
import BodyCurrency from "../components/body/bodyCurrency"
import BodyTemperature from "../components/body/bodyTemperature"

const Routes = () => {
  return (
    <BrowserRouter>
        <Route path='/' exact component={BodyMeasure} />
        <Route path='/Temperature' exact component={BodyTemperature} />
        <Route path='/Currency' exact component={BodyCurrency} />           
    </BrowserRouter>
  )
}
export default Routes;