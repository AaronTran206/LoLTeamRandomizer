import React, { useState } from "react"

import "./teams.scss"

const Teams: React.FC<{}> = ({}) => {
  const [summoner0, setSummoner0] = useState<string>("")
  const [summoner1, setSummoner1] = useState<string>("")
  const [summoner2, setSummoner2] = useState<string>("")
  const [summoner3, setSummoner3] = useState<string>("")
  const [summoner4, setSummoner4] = useState<string>("")
  const [summoner5, setSummoner5] = useState<string>("")
  const [summoner6, setSummoner6] = useState<string>("")
  const [summoner7, setSummoner7] = useState<string>("")
  const [summoner8, setSummoner8] = useState<string>("")
  const [summoner9, setSummoner9] = useState<string>("")

  const randomizeSummoners = () => {
    //put summoners states into an array to prepare for randomization
    const array = [
      summoner0,
      summoner1,
      summoner2,
      summoner3,
      summoner4,
      summoner5,
      summoner6,
      summoner7,
      summoner8,
      summoner9,
    ]
    //loop through each variable of the array starting from the last to the first
    for (let i = array.length - 1; i > 0; i--) {
      //generate a random index number based on the current index loop
      const a = Math.floor(Math.random() * (i + 1))
      //save current value of the array at index i
      const b = array[i]
      //set array at index i value to array at index a value
      array[i] = array[a]
      //complete the switch of two values by setting the array at index a value to the original array at index i value
      array[a] = b
    }
    //set the summoner states to the new array values
    setSummoner0(array[0])
    setSummoner1(array[1])
    setSummoner2(array[2])
    setSummoner3(array[3])
    setSummoner4(array[4])
    setSummoner5(array[5])
    setSummoner6(array[6])
    setSummoner7(array[7])
    setSummoner8(array[8])
    setSummoner9(array[9])
  }

  const renderTeams = (color: string) => {
    return (
      <article className={`col-sm-10 col-md-5 teams__container ${color}-list`}>
        <div className="teams__list ">
          <li className="row align-items-center justify-content-center">
            <input
              className="col-8"
              onChange={
                color === "blue"
                  ? (e) => setSummoner0(e.target.value)
                  : (e) => setSummoner5(e.target.value)
              }
              value={color === "blue" ? summoner0 : summoner5}
              placeholder={color === "blue" ? "Summoner 1" : "Summoner 6"}
            ></input>
            <div className="col-1 nerf-icon"></div>
          </li>
          <li className="row align-items-center justify-content-center">
            <input
              className="col-8"
              onChange={
                color === "blue"
                  ? (e) => setSummoner1(e.target.value)
                  : (e) => setSummoner6(e.target.value)
              }
              value={color === "blue" ? summoner1 : summoner6}
              placeholder={color === "blue" ? "Summoner 2" : "Summoner 7"}
            ></input>
            <div className="col-1 nerf-icon"></div>
          </li>
          <li className="row align-items-center justify-content-center">
            <input
              className="col-8"
              onChange={
                color === "blue"
                  ? (e) => setSummoner2(e.target.value)
                  : (e) => setSummoner7(e.target.value)
              }
              value={color === "blue" ? summoner2 : summoner7}
              placeholder={color === "blue" ? "Summoner 3" : "Summoner 8"}
            ></input>
            <div className="col-1 nerf-icon"></div>
          </li>
          <li className="row align-items-center justify-content-center">
            <input
              className="col-8"
              onChange={
                color === "blue"
                  ? (e) => setSummoner3(e.target.value)
                  : (e) => setSummoner8(e.target.value)
              }
              value={color === "blue" ? summoner3 : summoner8}
              placeholder={color === "blue" ? "Summoner 4" : "Summoner 9"}
            ></input>
            <div className="col-1 nerf-icon"></div>
          </li>
          <li className="row align-items-center justify-content-center">
            <input
              className="col-8"
              onChange={
                color === "blue"
                  ? (e) => setSummoner4(e.target.value)
                  : (e) => setSummoner9(e.target.value)
              }
              value={color === "blue" ? summoner4 : summoner9}
              placeholder={color === "blue" ? "Summoner 5" : "Summoner 10"}
            ></input>
            <div className="col-1 nerf-icon"></div>
          </li>
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
