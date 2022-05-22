import React, { useState } from "react"
import { useDrag } from "react-dnd"

const Player: React.FC<{
  color: string
  i: number

  onDropPlayer: Function
}> = ({ color, i, onDropPlayer }) => {
  const [summoner, setSummoner] = useState<string>("")
  const index = color === "blue" ? `Summoner ${i}` : `Summoner ${i + 5}`

  const [{ isDragging }, dragRef] = useDrag({
    type: "player",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <li
      className="row align-items-center justify-content-center"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    >
      <input
        className="col-8"
        onChange={(e) => setSummoner(e.target.value)}
        value={summoner}
        placeholder={`Summoner ${index}`}
        ref={dragRef}
      ></input>
      <div className="col-1 nerf-icon"></div>
    </li>
  )
}

export default Player
