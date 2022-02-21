import React from 'react'
import "./Learning.scss"


import brush from "../../../assets/brush1.png"
import certification from "../../../assets/certification.png"
import technical from "../../../assets/technical.png"


const Learning = () => {
    return (
        <div className="learning__container">
            <div className="learning__header">
                <img src={brush} alt="" className="header__brush" />
                <div className="brush__text">Learning is Fun with JD</div>
                <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos aliquam, dignissimos placeat perferendis minima voluptate minus quaerat repellat eligendi laudantium error, provident, ea deleniti sunt maiores odio! Illum ex vero minus. Consequuntur quia id similique rerum ipsa adipisci ad, deleniti vel! Eos nobis, voluptates error dolorum natus praesentium atque.</div>
            </div>

            <div className="cards">
                <div className="card1">
                    <img src={certification} alt="" className="card1__img" />
                    <div className="heading">
                        Certifications
                    </div>
                    <div className="para">Get Globally Recognized Certifications</div>
                    <div className="brder"></div>
                    <div className="card__para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa placeat deleniti quia delectus eum! Obcaecati quaerat et necessitatibus sint voluptates! Nesciunt quisquam autem quidem labore et ipsa excepturi tempora sit asperiores ad quae nam modi porro assumenda quis, alias, impedit eaque. Voluptas necessitatibus consequuntur vitae dolores assumenda perspiciatis sint debitis atque aliquam corporis! Commodi sed esse suscipit necessitatibus, molestiae officiis error expedita saepe. Distinctio?
                    </div>
                    <div className="btnn">Know More</div>
                </div>
                <div className="card1">
                    <img src={technical} alt="" className="card1__img" />
                    <div className="heading">
                        Technical Training
                    </div>
                    <div className="para">Systematic Training</div>
                    <div className="brder"></div>
                    <div className="card__para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa placeat deleniti quia delectus eum! Obcaecati quaerat et necessitatibus sint voluptates! Nesciunt quisquam autem quidem labore et ipsa excepturi tempora sit asperiores ad quae nam modi porro assumenda quis, alias, impedit eaque. Voluptas necessitatibus consequuntur vitae dolores assumenda perspiciatis sint debitis atque aliquam corporis! Commodi sed esse suscipit necessitatibus, molestiae officiis error expedita saepe. Distinctio?
                    </div>
                    <div className="btnn">Explore Courses</div>
                </div>
            </div>
        </div>
    )
}

export default Learning