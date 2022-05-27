import React from "react"
import "./nav.scss"
import { FaDice } from "react-icons/fa"
import { SiApplearcade } from "react-icons/si"

const cursedPerks = [
  {
    id: 1,
    name: `Leg Day`,
    rules: `Play without a chair and keep desk at sitting level.`,
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
]

const cursedGamemodes = [
  {
    name: `Hand Solo`,
    rules: `You can only play with your mouse.`,
  },
  {
    name: `The Ol-Switcheroo`,
    rules: `Switch the position of your keyboard and mouse.`,
  },
  {
    name: `Nemesis Draft`,
    rules: `Players pick the champion that the the enemy of the same position will play.`,
  },
]

const Nav: React.FC<{}> = ({}) => {
  // const randomizeSummoners = () => {
  //   //put summoners states into an array to prepare for randomization

  //   //loop through each variable of the array starting from the last to the first
  //   // for (let i = array.length - 1; i > 0; i--) {
  //   //   //generate a random index number based on the current index loop
  //   //   const a = Math.floor(Math.random() * (i + 1))
  //   //   //save current value of the array at index i
  //   //   const b = array[i]
  //   //   //set array at index i value to array at index a value
  //   //   array[i] = array[a]
  //   //   //complete the switch of two values by setting the array at index a value to the original array at index i value
  //   //   array[a] = b
  //   }
  // }

  return (
    <nav>
      <div className="button__icon">
        <FaDice />
      </div>
      <div className="button__icon">
        <SiApplearcade />
      </div>
    </nav>
  )
}

export default Nav
