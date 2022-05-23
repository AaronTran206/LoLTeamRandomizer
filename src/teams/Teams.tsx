import { createReadStream } from "fs"
import React, { useCallback, useState } from "react"
import {} from "react-dnd"
import Player from "../player/Player"

import "./teams.scss"

interface summonerObject {
  id: string
  text: string
}

const Teams: React.FC<{}> = ({}) => {
  const [teams, setTeams] = useState<summonerObject[]>([
    { id: "Summoner 1", text: "" },
    { id: "Summoner 2", text: "" },
    { id: "Summoner 3", text: "" },
    { id: "Summoner 4", text: "" },
    { id: "Summoner 5", text: "" },
    { id: "Summoner 6", text: "" },
    { id: "Summoner 7", text: "" },
    { id: "Summoner 8", text: "" },
    { id: "Summoner 9", text: "" },
    { id: "Summoner 10", text: "" },
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
      const { player, index } = findPlayer(id)
      console.log(player)
    },
    [findPlayer, teams, setTeams]
  )

  //get state data from child component and update array with new text data
  const getText = useCallback(
    (id: string, summonerText: string) => {
      const player = teams.filter((c) => c.id === id)[0]
      const index = teams.indexOf(player)
      teams[index].text = summonerText
      console.log(player.text)
    },
    [teams]
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

  const renderTeams = (arr: summonerObject[]) => {
    const blueTeam = arr.slice(0, 5)
    const redTeam = arr.slice(5, 10)

    return (
      <>
        <article className={`col-sm-10 col-md-5 teams__container blue-list`}>
          <div className="teams__list ">
            {blueTeam.map((str) => (
              <Player
                key={str.id}
                id={str.id}
                switchPlayer={switchPlayer}
                findPlayer={findPlayer}
                getText={getText}
              />
            ))}
          </div>
        </article>
        <article className={`col-sm-10 col-md-5 teams__container red-list`}>
          <div className="teams__list ">
            {redTeam.map((str, i) => (
              <Player
                key={str.id}
                id={str.id}
                switchPlayer={switchPlayer}
                findPlayer={findPlayer}
                getText={getText}
              />
            ))}
          </div>
        </article>
      </>
    )
  }

  return (
    <section className="container  px-0">
      <div className="row g-3 d-flex justify-content-evenly" spellCheck="false">
        {renderTeams(teams)}
      </div>

      <button onClick={randomizeSummoners}>Randomize</button>
    </section>
  )
}

export default Teams
