import React, { useState } from "react"
import { useDrag } from "react-dnd"

const Player: React.FC<{
  i: number
}> = ({ i }) => {
  const [summoner, setSummoner] = useState<string>("")

  const [{ isDragging }, dragRef] = useDrag({
    type: "player",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <li className="row align-items-center justify-content-center">
      <input
        style={{ border: isDragging ? "2px solid pink" : "0px" }}
        className="col-8"
        onChange={(e) => setSummoner(e.target.value)}
        value={summoner}
        placeholder="Summoner name"
        ref={dragRef}
      ></input>
      <div className="col-1 nerf-icon"></div>
    </li>
  )
}

export default Player
