import React from 'react'
import HeaderSection from '../Organisms/HeaderSection'
import Home from '../Organisms/Home'
import OurServicesHome from '../Organisms/OurServicesHome'
import Ourwork from '../Organisms/Ourwork'

function HomeTemplate() {
  return (
    <>
        <div
      className="section"
      style={{
        backgroundImage: "url(/Section.png)",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <HeaderSection />
    </div>
    <Home/>
    <OurServicesHome/>
    <Ourwork/>
    
    </>
  )
}

export default HomeTemplate