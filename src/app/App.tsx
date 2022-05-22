import "./app.scss"
import "../../node_modules/bootstrap/scss/bootstrap.scss"
import React from "react"
import ReactDOM from "react-dom"
import Header from "../header/Header"
import Teams from "../teams/Teams"
import Nav from "../nav/Nav"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const App: React.FC<{}> = ({}) => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Teams />
        <Nav />
      </DndProvider>
    </>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)
