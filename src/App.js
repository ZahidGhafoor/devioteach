import React from 'react'
import Footer from './Screens/Faculty/Footer/Footer'
import Learning from './Screens/Faculty/Learning/Learning'
import Mobile from './Screens/Faculty/MobileNav/Mobile'
import Navbar from './Screens/Faculty/Navbar/Navbar'
import Rating from './Screens/Faculty/Ratings/Rating'
import Team from './Screens/Faculty/Team/Team'
import Tutor from './Screens/Faculty/Tutor/Tutor'

const App = () => {
  return (
    <>
    <Navbar/>
    <Mobile/>
    <Team/>
    <Tutor/>
    <Rating/>
    <Learning/>
    <Footer/> 
    </>
  )
}

export default App