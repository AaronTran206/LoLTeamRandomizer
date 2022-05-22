import React, { useState } from "react"
import { useDrop } from "react-dnd"
import Player from "../player/Player"

import "./teams.scss"

const Teams: React.FC<{}> = ({}) => {
  const [blueTeam, setBlueTeam] = useState<Array<string>>([])
  const [redTeam, setRedTeam] = useState<Array<string>>([])
  const [{ isOver }, addtoTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  })
  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  })

  const movePlayer = (item) => {}

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

  const renderTeams = (color: string) => {
    return (
      <article className={`col-sm-10 col-md-5 teams__container ${color}-list`}>
        <div className="teams__list " ref={addtoTeamRef}>
          <Player color={color} i={1} onDropPlayer={movePlayer} />
          <Player color={color} i={2} onDropPlayer={movePlayer} />
          <Player color={color} i={3} onDropPlayer={movePlayer} />
          <Player color={color} i={4} onDropPlayer={movePlayer} />
          <Player color={color} i={5} onDropPlayer={movePlayer} />
        </div>
      </article>
    )
  }

  return (
    <section className="container  px-0">
      <div className="row g-3 d-flex justify-content-evenly" spellCheck="false">
        {renderTeams("blue")}
        {renderTeams("red")}
      </div>

      <button onClick={randomizeSummoners}>Randomize</button>
    </section>
  )
}

export default Teams
