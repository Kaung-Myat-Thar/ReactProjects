import React from 'react'

const fName = "Laura"
const lName = "Smith"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/face.png" className="profile"/>
            <h2 className="name"> </h2>
            <p className="job-position">Frontend Developer</p>
            <p className="website">{`${(fName+lName).toLowerCase()}`}.website</p>
            <button className="email-btn">
                <img src="./images/Icon.png" className="logo"/>
                <span>Email</span>
            </button>
            <button className="linkedin-btn">
                <img src="./images/Vector.png" className="logo"/>
                <span>Linkedin</span>
            </button>
        </div>
    )
}