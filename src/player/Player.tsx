import React, { useState } from "react"
import { useDrag, useDrop } from "react-dnd"

const Player: React.FC<{
  id: string
  switchPlayer: (id: string, to: number) => void
  findPlayer: (id: string) => { index: number }
  getText: (id: string, summonerText: string) => void
}> = ({ id, switchPlayer, findPlayer, getText }) => {
  const [summoner, setSummoner] = useState<string>("")

  //get original index of Player
  const originalIndex = findPlayer(id).index

  //send state data to teams component
  getText(id, summoner)

  //link drag ref to input component.
  //create isDragging element to style components with when component is being dragged
  //Monitor the element that is dropped
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "player",
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          switchPlayer(droppedId, originalIndex)
        }
      },
    }),
    [id, originalIndex, switchPlayer]
  )

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "player",
    drop: (item: any) => addPlayerToTeam(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findPlayer(id)
        switchPlayer(draggedId, overIndex)
      }
    },
  }))

  const addPlayerToTeam = (id: string) => {
    console.log(id)
  }

  return (
    <li ref={drop} className="row align-items-center justify-content-center">
      <input
        style={{
          opacity: isDragging ? 0.4 : 1,
          border: isDragging || isOver ? "1px solid white" : "0px",
        }}
        className="col-8"
        onChange={(e) => setSummoner(e.target.value)}
        value={summoner}
        placeholder={id}
        ref={dragRef}
      ></input>
      <div className="col-1 nerf-icon"></div>
    </li>
  )
}

export default Player
