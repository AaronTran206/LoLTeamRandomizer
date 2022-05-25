import React, { useCallback, useState } from "react"
import Player from "../player/Player"
import { useSelector } from "react-redux"

import "./teams.scss"

interface summonerObject {
  id: string
  text: string
}

const Teams: React.FC<{}> = ({}) => {
  const reduxSummonerName = useSelector(
    (state: any) => state.summonerName.value
  )
  const [teams, setTeams] = useState<summonerObject[]>([
    { id: "Summoner 1", text: reduxSummonerName },
    { id: "Summoner 2", text: reduxSummonerName },
    { id: "Summoner 3", text: reduxSummonerName },
    { id: "Summoner 4", text: reduxSummonerName },
    { id: "Summoner 5", text: reduxSummonerName },
    { id: "Summoner 6", text: reduxSummonerName },
    { id: "Summoner 7", text: reduxSummonerName },
    { id: "Summoner 8", text: reduxSummonerName },
    { id: "Summoner 9", text: reduxSummonerName },
    { id: "Summoner 10", text: reduxSummonerName },
  ])

  //callback to be used by Player component to find index of itself within teams state
  const findPlayer = useCallback(
    (id: string) => {
      const player = teams.filter((c) => c.id === id)[0] as {
        id: string
        text: string
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
      const { index } = findPlayer(id)
      //copy of current array
      const updatedArr = [...teams]

      //switch array items
      const temp = updatedArr[index]
      updatedArr[index] = updatedArr[atIndex]
      updatedArr[atIndex] = temp

      //rerender component with updated array placements
      setTeams(updatedArr)
    },
    [findPlayer, teams, setTeams]
  )

  const randomizeSummoners = () => {
    //put summoners states into an array to prepare for randomization
    // const array = [
    //   summoner0,
    //   summoner1,
    //   summoner2,
    //   summoner3,
    //   summoner4,
    //   summoner5,
    //   summoner6,
    //   summoner7,
    //   summoner8,
    //   summoner9,
    // ]
    //loop through each variable of the array starting from the last to the first
    //   for (let i = array.length - 1; i > 0; i--) {
    //     //generate a random index number based on the current index loop
    //     const a = Math.floor(Math.random() * (i + 1))
    //     //save current value of the array at index i
    //     const b = array[i]
    //     //set array at index i value to array at index a value
    //     array[i] = array[a]
    //     //complete the switch of two values by setting the array at index a value to the original array at index i value
    //     array[a] = b
    //   }
  }

  const renderPlayers = (color: string, arr: summonerObject[]) => {
    const teamArr = color === "blue" ? arr.slice(0, 5) : arr.slice(5, 10)
    return (
      <article className={`col-sm-10 col-md-5 teams__container ${color}-list`}>
        <div className="teams__list ">
          {teamArr.map((summoner) => (
            <Player
              key={summoner.id}
              id={summoner.id}
              switchPlayer={switchPlayer}
              findPlayer={findPlayer}
              text={summoner.text}
            />
          ))}
        </div>
      </article>
    )
  }

  return (
    <section className="container  px-0">
      <div className="row g-3 d-flex justify-content-evenly" spellCheck="false">
        {renderPlayers("blue", teams)}
        {renderPlayers("red", teams)}
      </div>
      <button onClick={randomizeSummoners}>Randomize</button>
    </section>
  )
}

export default Teams
