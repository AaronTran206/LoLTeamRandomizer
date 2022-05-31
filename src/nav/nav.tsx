import React, { useCallback } from "react"
import "./nav.scss"
import { FaDice } from "react-icons/fa"
import { GiPresent } from "react-icons/gi"
import { HiHome } from "react-icons/hi"
import { MdContentCopy } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import {
  setTeamSlice,
  setPlayerPerkSlice,
  summonerObject,
} from "../slices/teamSlice"
import cursedPerks from "../static/cursedPerks"

const Nav: React.FC<{}> = ({}) => {
  const dispatch = useDispatch()
  const teams: summonerObject[] = useSelector(
    (state: any) => state.team.teamArr
  )

  const copyInfo = useCallback(() => {}, [setTeamSlice, teams])

  const randomizePerks = useCallback(() => {
    const randomizePerksArr = [...teams]

    randomizePerksArr.map((summoner) => {
      const perkNum = Math.floor(Math.random() * cursedPerks.length)
      const pName = cursedPerks[perkNum].name
      const pRules = cursedPerks[perkNum].rules

      console.log(pName, pRules)

      dispatch(
        setPlayerPerkSlice({
          id: summoner.id,
          perkName: pName,
          perkRules: pRules,
        })
      )
    })
  }, [setTeamSlice, teams])

  const randomizeSummoners = useCallback(() => {
    // put summoners states into an array to prepare for randomization
    const randomizeArr = [...teams]

    // loop through each variable of the array starting from the last to the first
    for (let i = randomizeArr.length - 1; i > 0; i--) {
      const a = Math.floor(Math.random() * (i + 1))

      //swap positions of randomizeArr elements using a temp variable
      const temp = randomizeArr[i]
      randomizeArr[i] = randomizeArr[a]
      randomizeArr[a] = temp
    }
    dispatch(setTeamSlice(randomizeArr))
  }, [setTeamSlice, teams])

  return (
    <nav>
      <a className="button__icon" href="#home">
        <HiHome />
      </a>
      <span className="divider"></span>
      <a className="button__icon" onClick={randomizeSummoners}>
        <FaDice />
      </a>
      <a className="button__icon" onClick={randomizePerks}>
        <GiPresent />
      </a>
      <span className="divider"></span>
      <a className="button__icon" onClick={copyInfo}>
        <MdContentCopy />
      </a>
    </nav>
  )
}

export default Nav
