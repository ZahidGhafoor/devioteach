import React from 'react'
import "./Footer.scss"

import geomatery from "../../../assets/Hat2.png"
import info from "../../../assets/Infoicon.png"
import BookMark from "../../../assets/BookMark.png"
import search from "../../../assets/Search.png"
import footer from "../../../assets/footerlogo.png"
import call from "../../../assets/Phone.png"
import location from "../../../assets/location.png"
import share from "../../../assets/share.png"
import twitter from "../../../assets/Twitter.png"
import google from "../../../assets/google.png"
import youtube from "../../../assets/Youtube.png"



const arr = [
    {
        img: geomatery,
        heading: "Become a Tutor",
        para: " Discuss with the tutee the amount of time necessary to complete each part of their task.",
    },
    {
        img: info,
        heading: "How it Works?",
        para: " Discuss with the tutee the amount of time necessary to complete each part of their task.",
    },
    {
        img: BookMark,
        heading: "Student Resources",
        para: " Discuss with the tutee the amount of time necessary to complete each part of their task.",
    },
    {
        img: search,
        heading: "Find a Tutor",
        para: " Discuss with the tutee the amount of time necessary to complete each part of their task.",
    },

]


const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="cards">
                    {
                        arr.map((data) => {
                            return (
                                <div className="tutor__card">
                                    <div className="dots">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                    <div className="title">{data.heading}</div>
                                    <div className="para">
                                        {data.para}
                                    </div>

                                    <div className="footer">
                                        <div className="text">Learn More</div>
                                        <img src={data.img} alt="" className="card__icon" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="footer__bottom">
                <div className="first">
                    <img src={footer} alt="" className='footer__img' />
                    <div className="first__para">
                        Discuss with the tutee the amount of time necessary to complete each part of their task.
                    </div>
                </div>
                <div className="second">
                    <div className="heading">Useful Links</div>
                    <ul>
                        <li>Free Consultation</li>
                        <li>Visit Us</li>
                        <li>Chat with us</li>
                    </ul>
                </div>
                <div className="third">
                <div className="heading">Contact</div>
                <div className="upper">
                    <img src={call} alt="" className="upper__icons" />
                    <div className="text">444.332.1167</div>
                </div>
              
                <div className="upper">
                    <img src={location} alt="" className="upper__icons" />
                  <div className="text">  7461 old Harvard Rd. <br />Middleburg, FL 32068</div>
                </div>

                </div>
                <div className="fourth">
                <div className="heading">Follow Us</div>
                <div className="social">
                                    <img src={share} alt="" className="twitter" />
                                    <img src={twitter} alt="" className="twitter" />
                                    <img src={google} alt="" className="twitter" />
                                    <img src={youtube} alt="" className="twitter" />
                                </div>

                </div>
            </div>
            <div className="footer__terms">
                <div className="dash__border"></div>
                <div className="copyring">
                    <div className="copy">Copyright © 2021. Zahid Ghafoor</div>
                    <div className="copy">Terms | Privacy Policy</div>
                </div>
            </div>
        </>
    )
}

export default Footer