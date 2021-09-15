import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Body from '../../components/body/body'
/* import "./home.css" */

const HomePage = () => {

  return (
    <>
      <div className='header'>
        <Navbar/>
      </div>
      <div className='body'>
        <Body/>
      </div>     
    </>

  )

}

export default HomePage;