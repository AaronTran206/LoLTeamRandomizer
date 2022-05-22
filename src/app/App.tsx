import "./app.scss"
import "../../node_modules/bootstrap/scss/bootstrap.scss"
import React from "react"
import ReactDOM from "react-dom"
import Header from "../header/Header"
import Teams from "../teams/Teams"
import Nav from "../nav/Nav"

const App: React.FC<{}> = ({}) => {
  return (
    <>
      <Header />
      <Teams />
      <Nav />
    </>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)
