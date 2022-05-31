import "./app.scss"
import "../../node_modules/bootstrap/scss/bootstrap.scss"
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "../header/Header"
import Gamemode from "../gamemode/Gamemode"
import Teams from "../teams/Teams"
import Perks from "../perks/Perks"
import Nav from "../nav/Nav"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { store } from "../store/store"
import { Provider } from "react-redux"
import Footer from "../footer/Footer"

const App: React.FC<{}> = ({}) => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Gamemode />
        <Teams />
        <Perks />
        <Nav />
        <Footer />
      </DndProvider>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
