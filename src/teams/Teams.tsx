import React from "react"
import "./teams.scss"

const data = [
  "asdf1",
  "asdf2",
  "asdf3",
  "asdf4",
  "asdf5",
  "asdf6",
  "asdf7",
  "asdf8",
  "asdf9",
  "asdf10",
]

const Teams: React.FC<{}> = ({}) => {
  return (
    <section className="container  px-0">
      <div className="row g-3 d-flex justify-content-evenly">
        <article className="col-sm-12 col-md-5 teams__container">
          <h2 className="teams__container-header blue">Blue Side</h2>
          <div className="teams__list blue-list">
            {data.map((str, i) =>
              i % 2 !== 1 ? (
                ""
              ) : (
                <li>
                  <h4>{str}</h4>
                </li>
              )
            )}
          </div>
        </article>
        <article className="col-sm-12 col-md-5 teams__container">
          <h2 className="teams__container-header red">Red Side</h2>
          <div className="teams__list red-list">
            {data.map((str, i) =>
              i % 2 === 1 ? (
                ""
              ) : (
                <li>
                  <h4>{str}</h4>
                </li>
              )
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Teams
