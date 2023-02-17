import React from "react"
import ReactDOM from "react-dom"
import Header from "./component/Header.js"
import Body from "./component/Body.js"
import Footer from "./component/Footer.js"

function MainApp() {
    return (
        <div className="main">
            <div className="box">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

ReactDOM.render(<MainApp />, document.getElementById("root"))