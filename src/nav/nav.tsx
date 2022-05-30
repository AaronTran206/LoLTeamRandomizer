import React, { useCallback } from "react"
import "./nav.scss"
import { FaDice } from "react-icons/fa"
import { GiEvilBook } from "react-icons/gi"
import { useSelector, useDispatch } from "react-redux"
import { setTeamSlice, summonerObject } from "../slices/teamSlice"

const cursedPerks = [
  {
    id: 1,
    name: `Leg Day`,
    rules: `Squat above your chair for 1 minutes then sit back in chair for 3 minutes. Repeat until game is over while keeping desk at sitting level.`,
  },
  {
    id: 2,
    name: `Anime Voice Actor`,
    rules: `While role-playing as your champion, you must also say your ability names as you use them.`,
  },
  {
    id: 3,
    name: `The Lead Singer`,
    rules: `You are the shot caller of your team and you must only communicate by singing.`,
  },
  {
    id: 4,
    name: `The Pirate Life`,
    rules: `Cover your dominant eye with any non-see-through material.`,
  },
  {
    id: 5,
    name: `Mirror's Edge`,
    rules: `Switch key-bindings from Q-W-E-R to R-E-W-Q.`,
  },
  {
    id: 6,
    name: `Pinky Clicker`,
    rules: `You can only right-click with pinky.`,
  },
  {
    id: 7,
    name: `Mr.Nice Guy`,
    rules: `You must ask your opponents for permission before making a play.`,
  },
  {
    id: 8,
    name: `Hype Man`,
    rules: `You're overly enthusiastic and supportive.`,
  },
  {
    id: 9,
    name: `Going In Blind`,
    rules: `Cover your minimap somehow (don't damage your computer screen though).`,
  },
  {
    id: 10,
    name: `Beginner`,
    rules: `You must play on lock-screen. If you naturally play lock-screen, then you must play on unlocked-screen.`,
  },
  {
    id: 11,
    name: `Arm Day`,
    rules: `After every death, you must do 15 pushups. Max is 60 pushups in one game. You cannot start playing again until you finish your pushups.`,
  },
]

const cursedGamemodes = [
  {
    id: 1,
    name: `Hand Solo`,
    rules: `You can only play with your mouse.`,
  },
  {
    id: 2,
    name: `The Ol-Switcheroo`,
    rules: `Switch the position of your keyboard and mouse.`,
  },
  {
    id: 3,
    name: `Nemesis Draft`,
    rules: `Players pick the champion that the the enemy of the same position will play.`,
  },
]

const Nav: React.FC<{}> = ({}) => {
  const dispatch = useDispatch()
  const teams: summonerObject[] = useSelector(
    (state: any) => state.team.teamArr
  )

  const randomizePerks = useCallback(() => {}, [setTeamSlice, teams])

  const randomizeSummoners = useCallback(() => {
    // put summoners states into an array to prepare for randomization
    const randomizeArr = [...teams]
    console.log(randomizeArr)

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
      <button className="button__icon" onClick={randomizeSummoners}>
        <FaDice />
      </button>
      <button className="button__icon" onClick={randomizePerks}>
        <GiEvilBook />
      </button>
    </nav>
  )
}

export default Nav
