import React from "react"
import "./footer.scss"

const Footer: React.FC<{}> = () => {
  return (
    <footer>
      <h5>Made by Aaron Tran</h5>

      <a href="https://aarontranportfolio.web.app/" target="_blank">
        <h5 className="portfolio__site">aarontranportfolio.web.app/</h5>
      </a>
    </footer>
  )
}

export default Footer
