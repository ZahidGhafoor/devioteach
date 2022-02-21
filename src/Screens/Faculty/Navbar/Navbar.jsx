import React from 'react'
import "./Navbar.scss"

import logo from "../../../assets/logo.png"
import call from "../../../assets/Phone.png"

const Navbar = () => {
  return (
    <div className="navbar__container">
        <div className="yellow">
            <div className="logo">
                <img src={logo} alt="" className="main__logo" />
            </div>
            <div className="tabs">
                <div className="tab">Home</div>
                <div className="tab">About</div>
                <div className="tab">Experies</div>
                <div className="tab">Services</div>
                <div className="tab">Timeline</div>
                <div className="tab">Awards</div>
                <div className="tab">Media</div>
                <div className="tab">Contact</div>
            </div>
        </div>
        <div className="white">
            <img src={call} alt="" className="call__logo" />
            <div className="right">
                <div className="upper">Available @</div>
                <div className="bottom">444.332.1167</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar