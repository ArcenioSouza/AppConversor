import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Route } from "react-router";

import BodyMeasure from "../components/body/bodyMeasure"
import BodyCurrency from "../components/body/bodyCurrency"
import BodyTemperature from "../components/body/bodyTemperature"

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path='/BodyMeasure' component={BodyMeasure} />
        <Route path='/BodyTemperature' component={BodyTemperature} />
        <Route path='/BodyCurrency' component={BodyCurrency} />           
    </BrowserRouter>
  )
}
export default Routes;