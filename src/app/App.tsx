import "./app.scss"
import React from "react"
import ReactDOM from "react-dom"
import Header from "../header/Header"
import Teams from "../teams/Teams"
import Footer from "../footer/Footer"

const App: React.FC<{}> = ({}) => {
  return (
    <>
      <Header />
      <Teams />
      <Footer />
    </>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)
