import React from "react"
import { Link } from "gatsby"

function HeroSection() {
    return (
        <>
            <img src="/images/logos/logo.svg" alt="logo"/>
            <h1>
                Welcome to <b>Gatsby!</b>
            </h1>
            <p>
                Don’t skip design. Learn design and code by building real apps with
                React and Swift. Complete courses about the best tools.
            </p>
            <Link to="/page-2/">Go to page 2</Link>
        </>
    )
}

export default HeroSection