import React from "react"
import "./header.scss"

const Header: React.FC<{}> = ({}) => {
  return (
    <header>
      <div className="header__container">
        <h2>Welcome to the</h2>
        <h1>LoL In-House Team Randomizer</h1>
        <h5>Have fun!</h5>
      </div>
    </header>
  )
}

export default Header
