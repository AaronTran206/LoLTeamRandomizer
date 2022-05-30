import React, { useState } from "react"
import { useDrag, useDrop } from "react-dnd"
import { useDispatch, useSelector } from "react-redux"
import { setPlayerTextSlice } from "../slices/teamSlice"
import { TiDelete } from "react-icons/ti"
import "./player.scss"

const Player: React.FC<{
  text: string
  id: string
  switchPlayer: (id: string, to: number) => void
  findPlayer: (id: string) => { index: number }
}> = ({ text, id, switchPlayer, findPlayer }) => {
  const dispatch = useDispatch()

  //get original index of Player
  const originalIndex = findPlayer(id).index

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

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "player",
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
      drop({ id: draggedId }) {
        const { index } = findPlayer(id)
        if (draggedId !== id) {
          switchPlayer(draggedId, index)
        }
      },
    }),
    [findPlayer, switchPlayer]
  )

  return (
    <li ref={drop}>
      <div
        style={{
          opacity: isDragging ? 0.4 : 1,
          border: isDragging || isOver ? "1px solid white" : "0px",
        }}
        className="row align-items-center justify-content-center "
        ref={dragRef}
      >
        <div className="col-7 input-container">
          <input
            onChange={(e) =>
              dispatch(setPlayerTextSlice({ id: id, text: e.target.value }))
            }
            value={text}
            placeholder={"Summoner Name"}
          ></input>
          <TiDelete
            className={"delete-icon"}
            onClick={() => {
              dispatch(setPlayerTextSlice({ id: id, text: "" }))
            }}
          />
        </div>
        <div className="col-2 perk-icon"></div>
      </div>
    </li>
  )
}

export default Player
