import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setGamemodeSlice } from "../slices/gamemodeSlice"
import "./gamemode.scss"
import "bootstrap"

const availableGamemodes = [
  {
    id: 1,
    name: `Classic`,
    rules: `Summoner's Rift 5v5. Leave it all out there on the field!`,
  },
  {
    id: 2,
    name: `Hand Solo`,
    rules: `You can only play with your mouse.`,
  },
  {
    id: 3,
    name: `The Ol' Switcheroo`,
    rules: `Switch the position of your keyboard and mouse.`,
  },
  {
    id: 4,
    name: `Nemesis Draft`,
    rules: `Players pick the champion that the the enemy of the same position will play.`,
  },
  {
    id: 5,
    name: `Mirror Mode`,
    rules: `Switch key-bindings from Q-W-E-R to R-E-W-Q.`,
  },
]

const Gamemode: React.FC<{}> = ({}) => {
  //get dispatch hook from react-redux
  const dispatch = useDispatch()

  //grab global gamemode state
  const gamemode = useSelector((state: any) => state.gamemode.mode)

  //when link is clicked, set the global gamemode state to the gamemode that was clicked
  const handleClickGamemode = (gamemode: string) => {
    const chosenGamemode = availableGamemodes.find(
      (obj) => obj.name === gamemode
    )
    dispatch(setGamemodeSlice(chosenGamemode))
  }

  return (
    <div className={"gamemode__container"} id={"home"}>
      <div>
        <h1 className={"gamemode__header"}>Gamemode</h1>
      </div>

      <div className={"dropdown"}>
        <button
          className={"dropdown-toggle gamemode__name"}
          id="gamemode__dropdownBtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
        >
          {gamemode.name}
        </button>
        <ul
          className={"dropdown-menu dropdown-menu-dark gamemode__list"}
          aria-labelledby="gamemode__dropdownBtn"
        >
          {availableGamemodes.map((obj, i) => (
            <li key={obj.name} className={"gamemode__list-items"}>
              <a
                className={"dropdown-item "}
                onClick={() => handleClickGamemode(obj.name)}
              >
                {obj.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <h5 className={"gamemode__rules"}>{gamemode.rules}</h5>
    </div>
  )
}

export default Gamemode
