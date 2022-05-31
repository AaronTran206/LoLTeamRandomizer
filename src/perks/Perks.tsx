import React from "react"
import cursedPerks from "../static/cursedPerks"
import "./perks.scss"

const Perks: React.FC<{}> = ({}) => {
  return (
    <section className="container">
      <div className="perks__header ">
        <h1>Cursed Perks</h1>
      </div>
      <div className="row justify-content-center">
        {cursedPerks.map((perk) => (
          <div
            key={perk.name}
            className="col-xs-10 col-sm-5 col-md-3 perks__card"
          >
            <h2 className={"perks__name"}>{perk.name}</h2>
            <h5 className={"perks__rules"}>{perk.rules}</h5>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Perks
