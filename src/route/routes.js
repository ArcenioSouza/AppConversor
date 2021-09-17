import React from "react";
import { Route, BrowserRouter } from 'react-router-dom'

import BodyCurrency from "../components/body/bodyCurrency";
import BodyMeasure from "../components/body/bodyMeasure";
import BodyTemperature from "../components/body/bodyTemperature";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path='/' component={BodyMeasure} />
        <Route path='/BodyTemperature' component={BodyTemperature} />
        <Route path='/BodyCurrency' component={BodyCurrency} />      
    </BrowserRouter>
  )
}
export default Routes;