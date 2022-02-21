import React from 'react'
import "./Rating.scss"

import star from "../../../assets/star.png"
import yellowstar from "../../../assets/yellowstar.png"
import graystar from "../../../assets/graystar.png"
import share from "../../../assets/share.png"
import twitter from "../../../assets/Twitter.png"
import google from "../../../assets/google.png"
import youtube from "../../../assets/Youtube.png"


const arr = [
    {
        img: graystar,
        heading: "Matthew Perry",
        desc: "Private online Principles of Finance tutor",
    },
    {
        img: yellowstar,
        heading: "Valaria Smith",
        desc: "Doctorate in Business Administration",
    },
    {
        img: graystar,
        heading: "Jordan Faster",
        desc: "MBA, Bachelors in Finance",
    },
    {
        img: graystar,
        heading: "Sienna Miller",
        desc: "M.Ed(TESL) (UM)/ B.Ed, (TESL) (UKM)",
    },
    {
        img: graystar,
        heading: "Jacom Mc Hall",
        desc: "Bsc.(Hons.) with Petroleum Chemistry",
    },
    {
        img: graystar,
        heading: "Jenny Jackson",
        desc: "Masters in Education Management",
    },
]

const Rating = () => {
    return (
        <>
        <div className="rating__container">
            <div className="rating__header">
                <div className="brush__text">Our Tutors who Earned <span>5 star Ratings</span></div>
                <div className="para">7 Years of Teaching Experience</div>
                <img src={star} alt="" className="header__brush" />
            </div>

            <div className="rating__body">
                {
                    arr.map((data) => {
                        return (
                            <div className="bottom__card">
                                <img src={data.img} alt="" className="card__star" />
                                <div className="name">{data.heading}</div>
                                <div className="position">{data.desc}</div>
                                <div className="social">
                                    <img src={share} alt="" className="twitter" />
                                    <img src={twitter} alt="" className="twitter" />
                                    <img src={google} alt="" className="twitter" />
                                    <img src={youtube} alt="" className="twitter" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
            <div className="empty">
            </div>
            </>
    )
}

export default Rating