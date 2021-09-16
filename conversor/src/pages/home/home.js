import React from 'react'
import Navbar from '../../components/navbar/navbar'
/* import BodyMeasure from '../../components/body/bodyMeasure' */
import BodyTemperature from '../../components/body/bodyTemperature'
/* import "./home.css" */

const HomePage = () => {

  return (
    <>
      <div className='header'>
        <Navbar/>
      </div>
      <div className='body'>
        <BodyTemperature/>
      </div>     
    </>

  )

}

export default HomePage;