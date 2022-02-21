import React from 'react'
import "./Team.scss"

import upperimg from "../../../assets/headerimg.png"
import hat from "../../../assets/hat.png"
import brush from "../../../assets/brush1.png"
import star from "../../../assets/yellowstar.png"
import share from "../../../assets/share.png"
import twitter from "../../../assets/Twitter.png"
import google from "../../../assets/google.png"
import youtube from "../../../assets/Youtube.png"


const Team = () => {
  return (
    <div className="team__container">
        <div className="upper">
           <div className="img">
           <img src={upperimg} alt="" className="upper__img" />
           </div>
           <div className="img__text">
               <div className="text">Home</div>
               <img src={hat} alt="" className="text__img" />
               <div className="text">Instructors</div>
           </div>
        </div>
        <div className="bottom">
            <div className="bottom__header">
                <img src={brush} alt="" className="header__brush" />
                <div className="brush__text">Meet our Team</div>
                <div className="para">Best in Serivce</div>
            </div>
            <div className="bottom__body">
                <div className="bottom__card">
                    <img src={star} alt="" className="card__star" />
                    <div className="name">Steve Carrel</div>
                    <div className="position">Founder & Director</div>
                    <div className="social">
                        <img src={share} alt="" className="twitter" />
                        <img src={twitter} alt="" className="twitter" />
                        <img src={google} alt="" className="twitter" />
                        <img src={youtube} alt="" className="twitter" />
                    </div>
                    <div className="desc">
                        There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.
                    </div>
                </div>
                <div className="bottom__card">
                    <img src={star} alt="" className="card__star" />
                    <div className="name">Linda Karen</div>
                    <div className="position">Co-Founder</div>
                    <div className="social">
                        <img src={share} alt="" className="twitter" />
                        <img src={twitter} alt="" className="twitter" />
                        <img src={google} alt="" className="twitter" />
                        <img src={youtube} alt="" className="twitter" />
                    </div>
                    <div className="desc">
                        There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team