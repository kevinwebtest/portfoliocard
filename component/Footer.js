import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <a href="tel:6281290662297">
                <div id="phone" className="footerLogo">
                    <img src="./img/whatsapp.png"/>
                </div>
            </a>
            <a href="https://github.com/kevinwebtest">
                <div id="github" className="footerLogo">
                    <img src="./img/github.png"/>
                </div>
            </a>
        </div>
    )
}