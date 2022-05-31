import React, { useCallback } from "react"
import Player from "../player/Player"
import { useSelector, useDispatch } from "react-redux"
import { setTeamSlice, summonerObject } from "../slices/teamSlice"

import "./teams.scss"

const Teams: React.FC<{}> = ({}) => {
  const dispatch = useDispatch()

  const teams: summonerObject[] = useSelector(
    (state: any) => state.team.teamArr
  )

  //callback to be used by Player component to find index of itself within teams state
  const findPlayer = useCallback(
    (id: string) => {
      const player = teams.filter((c) => c.id === id)[0] as {
        id: string
        text: string
        icon: string
      }
      return {
        player,
        index: teams.indexOf(player),
      }
    },
    [teams]
  )

  //callback to be used by Player component to move Player
  const switchPlayer = useCallback(
    (id: string, atIndex: number) => {
      //get index number of ID argument
      const { index } = findPlayer(id)
      //copy of current array
      const updatedArr = [...teams]

      //switch array items
      const temp = updatedArr[index]
      updatedArr[index] = updatedArr[atIndex]
      updatedArr[atIndex] = temp

      console.log(updatedArr)

      dispatch(setTeamSlice(updatedArr))

      //rerender component with updated array placements
    },
    [findPlayer, teams, setTeamSlice]
  )

  const renderPlayers = (color: string, arr: summonerObject[]) => {
    const teamArr = color === "blue" ? arr.slice(0, 5) : arr.slice(5, 10)
    return (
      <article className={`col-sm-10 col-md-5 teams__container ${color}-list`}>
        <div className="teams__list ">
          {teamArr.map((summoner) => (
            <Player
              text={summoner.text}
              key={summoner.id}
              id={summoner.id}
              switchPlayer={switchPlayer}
              findPlayer={findPlayer}
            />
          ))}
        </div>
      </article>
    )
  }

  return (
    <section className="container-sm px-0">
      <div className="teams__header">
        <h1>Teams</h1>
      </div>
      <div className="row g-3 d-flex justify-content-evenly" spellCheck="false">
        {renderPlayers("blue", teams)}
        {renderPlayers("red", teams)}
      </div>
    </section>
  )
}

export default Teams
