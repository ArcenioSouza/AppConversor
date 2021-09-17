import React from 'react'
import Navbar from '../../components/navbar/navbar'
/* import BodyMeasure from '../../components/body/bodyMeasure' */
/* import BodyTemperature from '../../components/body/bodyTemperature' */
import BodyCurrency from '../../components/body/bodyCurrency'

const HomePage = () => {

  return (
    <>
      <div className='header'>
        <Navbar/>
      </div>
      <div className='body'>
        <BodyCurrency/>
      </div>     
    </>

  )

}

export default HomePage;