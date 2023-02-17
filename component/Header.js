import React from "react"

export default function Header() {
    return (
        <div className="header">
            <img src="./img/cropped me.jpg" className="profile"/>
            <h1 id="name">Kevin Setiawan</h1>
            <h3 id="title">Software Engineer</h3>
            <a href="https://kevinwebtest.github.io/" id="website" className="topics">Kevin's Website</a>
            <div className="container">
                <a href="mailto: kevinsetiawan005@gmail.com">
                    <div id="email" className="button"><img src="./img/email.png"/>Email</div>
                </a>
                <a href="https://www.linkedin.com/in/setiawan-kevin/">
                    <div id="linkedin" className="button"><img src="./img/linkedin.png"/>LinkedIn</div>
                </a>
            </div>
        </div>
    )
}