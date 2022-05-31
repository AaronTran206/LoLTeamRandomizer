import React, { useState } from "react"
import { useDrag, useDrop } from "react-dnd"
import { useDispatch } from "react-redux"
import { setPlayerTextSlice } from "../slices/teamSlice"
import { TiDelete } from "react-icons/ti"
import "./player.scss"

//gamemode icons
import {
  GiOneEyed,
  GiLeg,
  GiArm,
  GiBlindfold,
  GiMirrorMirror,
  GiMusicalNotes,
  GiAbdominalArmor,
} from "react-icons/gi"
import { FaBaby, FaUserFriends } from "react-icons/fa"
import { MdCelebration, MdRecordVoiceOver } from "react-icons/md"
import { TbHandLittleFinger } from "react-icons/tb"
import { HandLittleFinger } from "tabler-icons-react"

interface perkObj {
  name: string
  rules: string
}

const Player: React.FC<{
  text: string
  id: string
  perk: perkObj
  switchPlayer: (id: string, to: number) => void
  findPlayer: (id: string) => { index: number }
}> = ({ text, id, perk, switchPlayer, findPlayer }) => {
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

  const getIcon = (perkName) => {
    if (perkName === "Beginner") return <FaBaby />
    if (perkName === "Anime Voice Actor") return <MdRecordVoiceOver />
    if (perkName === "The Lead Singer") return <GiMusicalNotes />
    if (perkName === "The Pirate Life") return <GiOneEyed />
    if (perkName === "Mirror's Edge") return <GiMirrorMirror />
    if (perkName === "Pinky Promise") return <HandLittleFinger />
    if (perkName === "Mr.Nice Guy") return <FaUserFriends />
    if (perkName === "Hype Man") return <MdCelebration />
    if (perkName === "Lee Sin") return <GiBlindfold />
    if (perkName === "Leg Day") return <GiLeg />
    if (perkName === "Arm Day") return <GiArm />
    if (perkName === "Ab Day") return <GiAbdominalArmor />
  }

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

        {perk.name !== "" ? (
          <div className="col-3 perk-container">
            <h5 className="summoner__perk-rules">{perk.rules}</h5>
            <div>
              <div className="summoner__perk-icon">
                <>{getIcon(perk.name)}</>
              </div>
              <h5 className="summoner__perk-name">{perk.name}</h5>
            </div>
          </div>
        ) : (
          <div className="col-3 perk-container"></div>
        )}
      </div>
    </li>
  )
}

export default Player
