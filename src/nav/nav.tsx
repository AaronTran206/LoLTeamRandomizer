import React, { useCallback } from "react"
import "./nav.scss"
import { FaDice } from "react-icons/fa"
import { GiPresent, GiCancel } from "react-icons/gi"
import { HiHome } from "react-icons/hi"
import { MdContentCopy } from "react-icons/md"
import { BsEraserFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import {
  setTeamSlice,
  setPlayerPerkSlice,
  summonerObject,
} from "../slices/teamSlice"
import { gamemodeObj } from "../slices/gamemodeSlice"
import cursedPerks from "../static/cursedPerks"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Nav: React.FC<{}> = ({}) => {
  //redux states
  const dispatch = useDispatch()
  const gamemode: gamemodeObj = useSelector((state: any) => state.gamemode.mode)
  const teams: summonerObject[] = useSelector(
    (state: any) => state.team.teamArr
  )

  //randomize summoner text in global state then send back to global state
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

  //randomize perks in global state and send them back to global state
  const randomizePerks = useCallback(() => {
    const randomizePerksArr = [...teams]

    randomizePerksArr.map((summoner) => {
      const perkNum = Math.floor(Math.random() * cursedPerks.length)
      const pName = cursedPerks[perkNum].name
      const pRules = cursedPerks[perkNum].rules

      dispatch(
        setPlayerPerkSlice({
          id: summoner.id,
          perkName: pName,
          perkRules: pRules,
        })
      )
    })
  }, [setTeamSlice, teams])

  //remove perk name and perk rules from each object in redux array
  const cancelPerks = useCallback(() => {
    const cancelPerksArr = [...teams]

    cancelPerksArr.map((summoner) => {
      dispatch(
        setPlayerPerkSlice({
          id: summoner.id,
          perkName: "",
          perkRules: "",
        })
      )
    })
  }, [setTeamSlice, teams])

  //set redux store back to initial state
  const resetSummoners = useCallback(() => {
    dispatch(
      setTeamSlice([
        { id: "Summoner 1", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 2", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 3", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 4", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 5", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 6", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 7", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 8", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 9", text: "", perk: { name: "", rules: "" } },
        { id: "Summoner 10", text: "", perk: { name: "", rules: "" } },
      ])
    )
  }, [setTeamSlice, teams])

  //copy info to clipboard
  const copyInfo = useCallback(() => {
    navigator.clipboard.writeText(
      `
      Gamemode: ${gamemode.name}
      Gamemode rules: ${gamemode.rules} 

      BLUE TEAM (cursed perk):                
      ${teams[0].text} (${teams[0].perk.name})
      ${teams[1].text} (${teams[1].perk.name})    
      ${teams[2].text} (${teams[2].perk.name})    
      ${teams[3].text} (${teams[3].perk.name})    
      ${teams[4].text} (${teams[4].perk.name})    

      RED TEAM (cursed perk):
      ${teams[5].text} (${teams[5].perk.name})
      ${teams[6].text} (${teams[6].perk.name})
      ${teams[7].text} (${teams[7].perk.name})
      ${teams[8].text} (${teams[8].perk.name})
      ${teams[9].text} (${teams[9].perk.name})
      `
    )

    //toastify notification to show that contents were copied
    toast.success("Copied to clipboard!", {
      position: "top-center",
      autoClose: 2000,
    })
  }, [setTeamSlice, teams])

  return (
    <>
      <nav>
        <a className="button__icon" href="#home">
          <HiHome />
          <h5 className="button__text">Home</h5>
        </a>
        <span className="divider"></span>
        <a className="button__icon" onClick={randomizeSummoners}>
          <FaDice />
          <h5 className="button__text">Randomize</h5>
        </a>
        <a className="button__icon" onClick={randomizePerks}>
          <GiPresent />
          <h5 className="button__text">Perks</h5>
        </a>
        <a className="button__icon" onClick={cancelPerks}>
          <GiCancel />
          <h5 className="button__text">Cancel Perks</h5>
        </a>
        <a className="button__icon" onClick={resetSummoners}>
          <BsEraserFill />
          <h5 className="button__text">Reset</h5>
        </a>
        <span className="divider"></span>
        <a className="button__icon" onClick={copyInfo}>
          <MdContentCopy />
          <h5 className="button__text">Copy</h5>
        </a>
      </nav>
      <ToastContainer />
    </>
  )
}

export default Nav
