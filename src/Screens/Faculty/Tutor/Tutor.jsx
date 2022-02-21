import React from 'react'
import "./Tutor.scss"

import brush from '../../../assets/whitebrush.png'
import geomatery from "../../../assets/geomatery.png"
import chemistry from "../../../assets/chemistry.png"
import english from "../../../assets/Phone.png"
import science from "../../../assets/english.png"


const arr = [
    {
        img: geomatery,
        heading: "Geomatery",
        tutor: "14",
    },
    {
        img: science,
        heading: "Science",
        tutor: "18",
    },
    {
        img: chemistry,
        heading: "Chemistry",
        tutor: "16",
    },
    {
        img: english,
        heading: "English",
        tutor: "32",
    },
]

const Tutor = () => {
    return (
        <div className="tutor__container">
            <div className="bottom__header">
                <img src={brush} alt="" className="header__brush" />
                <div className="brush__text">Find A Tutor</div>
                <div className="para">what do you want to Learn</div>
            </div>

            <div className="cards">
           {
               arr.map((data)=>{
                   return(
                        <div className="tutor__card">
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="img">
                        <img src={data.img} alt="" className="card__icon" />
                    </div>
                    <div className="title">{data.heading}</div>
                    <div className="borderr"></div>
                    <div className="total">{data.tutor} Tutors</div>
                </div>
                   )
                })
            }
            </div>
        </div>
    )
}

export default Tutor