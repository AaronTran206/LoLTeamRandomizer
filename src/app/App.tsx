import "./app.scss"
import "../../node_modules/bootstrap/scss/bootstrap.scss"
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "../header/Header"
import Teams from "../teams/Teams"
import Nav from "../nav/Nav"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { store } from "../store/store"
import { Provider } from "react-redux"

const App: React.FC<{}> = ({}) => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Teams />
        <Nav />
      </DndProvider>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
